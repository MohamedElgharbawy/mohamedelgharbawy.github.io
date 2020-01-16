! function (e, t) {
	if ("object" == typeof exports && "object" == typeof module) module.exports = t();
	else if ("function" == typeof define && define.amd) define([], t);
	else {
		var r = t();
		for (var i in r)("object" == typeof exports ? exports : e)[i] = r[i]
	}
}(window, function () {
	return function (e) {
		var t = {};

		function r(i) {
			if (t[i]) return t[i].exports;
			var n = t[i] = {
				i: i,
				l: !1,
				exports: {}
			};
			return e[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
		}
		return r.m = e, r.c = t, r.d = function (e, t, i) {
			r.o(e, t) || Object.defineProperty(e, t, {
				enumerable: !0,
				get: i
			})
		}, r.r = function (e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, r.t = function (e, t) {
			if (1 & t && (e = r(e)), 8 & t) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var i = Object.create(null);
			if (r.r(i), Object.defineProperty(i, "default", {
					enumerable: !0,
					value: e
				}), 2 & t && "string" != typeof e)
				for (var n in e) r.d(i, n, function (t) {
					return e[t]
				}.bind(null, n));
			return i
		}, r.n = function (e) {
			var t = e && e.__esModule ? function () {
				return e.default
			} : function () {
				return e
			};
			return r.d(t, "a", t), t
		}, r.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, r.p = "", r(r.s = 33)
	}([function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(14);
		t.IBufferService = i.createDecorator("BufferService"), t.ICoreMouseService = i.createDecorator("CoreMouseService"), t.ICoreService = i.createDecorator("CoreService"), t.IDirtyRowService = i.createDecorator("DirtyRowService"), t.IInstantiationService = i.createDecorator("InstantiationService"), t.ILogService = i.createDecorator("LogService"), t.IOptionsService = i.createDecorator("OptionsService")
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
			function e() {
				this._listeners = [], this._disposed = !1
			}
			return Object.defineProperty(e.prototype, "event", {
				get: function () {
					var e = this;
					return this._event || (this._event = function (t) {
						return e._listeners.push(t), {
							dispose: function () {
								if (!e._disposed)
									for (var r = 0; r < e._listeners.length; r++)
										if (e._listeners[r] === t) return void e._listeners.splice(r, 1)
							}
						}
					}), this._event
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.fire = function (e) {
				for (var t = [], r = 0; r < this._listeners.length; r++) t.push(this._listeners[r]);
				for (r = 0; r < t.length; r++) t[r].call(void 0, e)
			}, e.prototype.dispose = function () {
				this._listeners && (this._listeners.length = 0), this._disposed = !0
			}, e
		}();
		t.EventEmitter = i
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
			function e() {
				this._disposables = [], this._isDisposed = !1
			}
			return e.prototype.dispose = function () {
				this._isDisposed = !0, this._disposables.forEach(function (e) {
					return e.dispose()
				}), this._disposables.length = 0
			}, e.prototype.register = function (e) {
				this._disposables.push(e)
			}, e.prototype.unregister = function (e) {
				var t = this._disposables.indexOf(e); - 1 !== t && this._disposables.splice(t, 1)
			}, e
		}();
		t.Disposable = i
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.DEFAULT_COLOR = 256, t.DEFAULT_ATTR = 256 | t.DEFAULT_COLOR << 9, t.CHAR_DATA_ATTR_INDEX = 0, t.CHAR_DATA_CHAR_INDEX = 1, t.CHAR_DATA_WIDTH_INDEX = 2, t.CHAR_DATA_CODE_INDEX = 3, t.NULL_CELL_CHAR = "", t.NULL_CELL_WIDTH = 1, t.NULL_CELL_CODE = 0, t.WHITESPACE_CELL_CHAR = " ", t.WHITESPACE_CELL_WIDTH = 1, t.WHITESPACE_CELL_CODE = 32
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(14);
		t.ICharSizeService = i.createDecorator("CharSizeService"), t.ICoreBrowserService = i.createDecorator("CoreBrowserService"), t.IMouseService = i.createDecorator("MouseService"), t.IRenderService = i.createDecorator("RenderService"), t.ISelectionService = i.createDecorator("SelectionService"), t.ISoundService = i.createDecorator("SoundService")
	}, function (e, t, r) {
		"use strict";
		var i, n = this && this.__extends || (i = function (e, t) {
			return (i = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (e, t) {
					e.__proto__ = t
				} || function (e, t) {
					for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
				})(e, t)
		}, function (e, t) {
			function r() {
				this.constructor = e
			}
			i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
		});
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(8),
			s = r(3),
			a = function (e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.content = 0, t.fg = 0, t.bg = 0, t.combinedData = "", t
				}
				return n(t, e), t.fromCharData = function (e) {
					var r = new t;
					return r.setFromCharData(e), r
				}, t.prototype.isCombined = function () {
					return 2097152 & this.content
				}, t.prototype.getWidth = function () {
					return this.content >> 22
				}, t.prototype.getChars = function () {
					return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? o.stringFromCodePoint(2097151 & this.content) : ""
				}, t.prototype.getCode = function () {
					return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content
				}, t.prototype.setFromCharData = function (e) {
					this.fg = e[s.CHAR_DATA_ATTR_INDEX], this.bg = 0;
					var t = !1;
					if (e[s.CHAR_DATA_CHAR_INDEX].length > 2) t = !0;
					else if (2 === e[s.CHAR_DATA_CHAR_INDEX].length) {
						var r = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
						if (55296 <= r && r <= 56319) {
							var i = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
							56320 <= i && i <= 57343 ? this.content = 1024 * (r - 55296) + i - 56320 + 65536 | e[s.CHAR_DATA_WIDTH_INDEX] << 22 : t = !0
						} else t = !0
					} else this.content = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | e[s.CHAR_DATA_WIDTH_INDEX] << 22;
					t && (this.combinedData = e[s.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | e[s.CHAR_DATA_WIDTH_INDEX] << 22)
				}, t.prototype.getAsCharData = function () {
					return [this.fg, this.getChars(), this.getWidth(), this.getCode()]
				}, t
			}(r(6).AttributeData);
		t.CellData = a
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
			function e() {
				this.fg = 0, this.bg = 0
			}
			return e.toColorRGB = function (e) {
				return [e >>> 16 & 255, e >>> 8 & 255, 255 & e]
			}, e.fromColorRGB = function (e) {
				return (255 & e[0]) << 16 | (255 & e[1]) << 8 | 255 & e[2]
			}, e.prototype.clone = function () {
				var t = new e;
				return t.fg = this.fg, t.bg = this.bg, t
			}, e.prototype.isInverse = function () {
				return 67108864 & this.fg
			}, e.prototype.isBold = function () {
				return 134217728 & this.fg
			}, e.prototype.isUnderline = function () {
				return 268435456 & this.fg
			}, e.prototype.isBlink = function () {
				return 536870912 & this.fg
			}, e.prototype.isInvisible = function () {
				return 1073741824 & this.fg
			}, e.prototype.isItalic = function () {
				return 67108864 & this.bg
			}, e.prototype.isDim = function () {
				return 134217728 & this.bg
			}, e.prototype.getFgColorMode = function () {
				return 50331648 & this.fg
			}, e.prototype.getBgColorMode = function () {
				return 50331648 & this.bg
			}, e.prototype.isFgRGB = function () {
				return 50331648 == (50331648 & this.fg)
			}, e.prototype.isBgRGB = function () {
				return 50331648 == (50331648 & this.bg)
			}, e.prototype.isFgPalette = function () {
				return 16777216 == (50331648 & this.fg) || 33554432 == (50331648 & this.fg)
			}, e.prototype.isBgPalette = function () {
				return 16777216 == (50331648 & this.bg) || 33554432 == (50331648 & this.bg)
			}, e.prototype.isFgDefault = function () {
				return 0 == (50331648 & this.fg)
			}, e.prototype.isBgDefault = function () {
				return 0 == (50331648 & this.bg)
			}, e.prototype.getFgColor = function () {
				switch (50331648 & this.fg) {
					case 16777216:
					case 33554432:
						return 255 & this.fg;
					case 50331648:
						return 16777215 & this.fg;
					default:
						return -1
				}
			}, e.prototype.getBgColor = function () {
				switch (50331648 & this.bg) {
					case 16777216:
					case 33554432:
						return 255 & this.bg;
					case 50331648:
						return 16777215 & this.bg;
					default:
						return -1
				}
			}, e
		}();
		t.AttributeData = i
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.addDisposableDomListener = function (e, t, r, i) {
			return e.addEventListener(t, r, i), {
				dispose: function () {
					r && e.removeEventListener(t, r, i)
				}
			}
		}
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.stringFromCodePoint = function (e) {
			return e > 65535 ? (e -= 65536, String.fromCharCode(55296 + (e >> 10)) + String.fromCharCode(e % 1024 + 56320)) : String.fromCharCode(e)
		}, t.utf32ToString = function (e, t, r) {
			void 0 === t && (t = 0), void 0 === r && (r = e.length);
			for (var i = "", n = t; n < r; ++n) {
				var o = e[n];
				o > 65535 ? (o -= 65536, i += String.fromCharCode(55296 + (o >> 10)) + String.fromCharCode(o % 1024 + 56320)) : i += String.fromCharCode(o)
			}
			return i
		};
		var i = function () {
			function e() {
				this._interim = 0
			}
			return e.prototype.clear = function () {
				this._interim = 0
			}, e.prototype.decode = function (e, t) {
				var r = e.length;
				if (!r) return 0;
				var i = 0,
					n = 0;
				this._interim && (56320 <= (a = e.charCodeAt(n++)) && a <= 57343 ? t[i++] = 1024 * (this._interim - 55296) + a - 56320 + 65536 : (t[i++] = this._interim, t[i++] = a), this._interim = 0);
				for (var o = n; o < r; ++o) {
					var s = e.charCodeAt(o);
					if (55296 <= s && s <= 56319) {
						if (++o >= r) return this._interim = s, i;
						var a;
						56320 <= (a = e.charCodeAt(o)) && a <= 57343 ? t[i++] = 1024 * (s - 55296) + a - 56320 + 65536 : (t[i++] = s, t[i++] = a)
					} else t[i++] = s
				}
				return i
			}, e
		}();
		t.StringToUtf32 = i;
		var n = function () {
			function e() {
				this.interim = new Uint8Array(3)
			}
			return e.prototype.clear = function () {
				this.interim.fill(0)
			}, e.prototype.decode = function (e, t) {
				var r = e.length;
				if (!r) return 0;
				var i, n, o, s, a = 0,
					c = 0,
					l = 0;
				if (this.interim[0]) {
					var h = !1,
						u = this.interim[0];
					u &= 192 == (224 & u) ? 31 : 224 == (240 & u) ? 15 : 7;
					for (var f = 0, _ = void 0;
						(_ = 63 & this.interim[++f]) && f < 4;) u <<= 6, u |= _;
					for (var d = 192 == (224 & this.interim[0]) ? 2 : 224 == (240 & this.interim[0]) ? 3 : 4, p = d - f; l < p;) {
						if (l >= r) return 0;
						if (128 != (192 & (_ = e[l++]))) {
							l--, h = !0;
							break
						}
						this.interim[f++] = _, u <<= 6, u |= 63 & _
					}
					h || (2 === d ? u < 128 ? l-- : t[a++] = u : 3 === d ? u < 2048 || u >= 55296 && u <= 57343 || (t[a++] = u) : u < 65536 || u > 1114111 || (t[a++] = u)), this.interim.fill(0)
				}
				for (var v = r - 4, g = l; g < r;) {
					for (; !(!(g < v) || 128 & (i = e[g]) || 128 & (n = e[g + 1]) || 128 & (o = e[g + 2]) || 128 & (s = e[g + 3]));) t[a++] = i, t[a++] = n, t[a++] = o, t[a++] = s, g += 4;
					if ((i = e[g++]) < 128) t[a++] = i;
					else if (192 == (224 & i)) {
						if (g >= r) return this.interim[0] = i, a;
						if (128 != (192 & (n = e[g++]))) {
							g--;
							continue
						}
						if ((c = (31 & i) << 6 | 63 & n) < 128) {
							g--;
							continue
						}
						t[a++] = c
					} else if (224 == (240 & i)) {
						if (g >= r) return this.interim[0] = i, a;
						if (128 != (192 & (n = e[g++]))) {
							g--;
							continue
						}
						if (g >= r) return this.interim[0] = i, this.interim[1] = n, a;
						if (128 != (192 & (o = e[g++]))) {
							g--;
							continue
						}
						if ((c = (15 & i) << 12 | (63 & n) << 6 | 63 & o) < 2048 || c >= 55296 && c <= 57343) continue;
						t[a++] = c
					} else if (240 == (248 & i)) {
						if (g >= r) return this.interim[0] = i, a;
						if (128 != (192 & (n = e[g++]))) {
							g--;
							continue
						}
						if (g >= r) return this.interim[0] = i, this.interim[1] = n, a;
						if (128 != (192 & (o = e[g++]))) {
							g--;
							continue
						}
						if (g >= r) return this.interim[0] = i, this.interim[1] = n, this.interim[2] = o, a;
						if (128 != (192 & (s = e[g++]))) {
							g--;
							continue
						}
						if ((c = (7 & i) << 18 | (63 & n) << 12 | (63 & o) << 6 | 63 & s) < 65536 || c > 1114111) continue;
						t[a++] = c
					}
				}
				return a
			}, e
		}();
		t.Utf8ToUtf32 = n
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.INVERTED_DEFAULT_COLOR = 257, t.DIM_OPACITY = .5, t.CHAR_ATLAS_CELL_SPACING = 1
	}, function (e, t, r) {
		"use strict";

		function i(e) {
			var t = e.toString(16);
			return t.length < 2 ? "0" + t : t
		}

		function n(e, t, r, n) {
			return void 0 !== n ? "#" + i(e) + i(t) + i(r) + i(n) : "#" + i(e) + i(t) + i(r)
		}

		function o(e, t, r, i) {
			return void 0 === i && (i = 255), (e << 24 | t << 16 | r << 8 | i) >>> 0
		}

		function s(e) {
			return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e]
		}

		function a(e) {
			return c(e >> 16 & 255, e >> 8 & 255, 255 & e)
		}

		function c(e, t, r) {
			var i = e / 255,
				n = t / 255,
				o = r / 255;
			return .2126 * (i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)) + .7152 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)) + .0722 * (o <= .03928 ? o / 12.92 : Math.pow((o + .055) / 1.055, 2.4))
		}

		function l(e, t) {
			return e < t ? (t + .05) / (e + .05) : (e + .05) / (t + .05)
		}

		function h(e, t, r) {
			return {
				css: n(e, t, r),
				rgba: o(e, t, r)
			}
		}

		function u(e, t, r) {
			var i = a(e >> 8),
				n = a(t >> 8);
			if (l(i, n) < r) return n < i ? f(e, t, r) : _(e, t, r)
		}

		function f(e, t, r) {
			for (var i = e >> 24 & 255, n = e >> 16 & 255, o = e >> 8 & 255, s = t >> 24 & 255, a = t >> 16 & 255, h = t >> 8 & 255, u = l(c(s, h, a), c(i, n, o)); u < r && (s > 0 || a > 0 || h > 0);) s -= Math.max(0, Math.ceil(.1 * s)), a -= Math.max(0, Math.ceil(.1 * a)), u = l(c(s, h -= Math.max(0, Math.ceil(.1 * h)), a), c(i, n, o));
			return (s << 24 | a << 16 | h << 8 | 255) >>> 0
		}

		function _(e, t, r) {
			for (var i = e >> 24 & 255, n = e >> 16 & 255, o = e >> 8 & 255, s = t >> 24 & 255, a = t >> 16 & 255, h = t >> 8 & 255, u = l(c(s, h, a), c(i, n, o)); u < r && (s < 255 || a < 255 || h < 255);) s = Math.min(255, s + Math.ceil(.1 * (255 - s))), a = Math.min(255, a + Math.ceil(.1 * (255 - a))), u = l(c(s, h = Math.min(255, h + Math.ceil(.1 * (255 - h))), a), c(i, n, o));
			return (s << 24 | a << 16 | h << 8 | 255) >>> 0
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.blend = function (e, t) {
			var r = (255 & t.rgba) / 255;
			if (1 === r) return {
				css: t.css,
				rgba: t.rgba
			};
			var i = t.rgba >> 24 & 255,
				s = t.rgba >> 16 & 255,
				a = t.rgba >> 8 & 255,
				c = e.rgba >> 24 & 255,
				l = e.rgba >> 16 & 255,
				h = e.rgba >> 8 & 255,
				u = c + Math.round((i - c) * r),
				f = l + Math.round((s - l) * r),
				_ = h + Math.round((a - h) * r);
			return {
				css: n(u, f, _),
				rgba: o(u, f, _)
			}
		}, t.fromCss = function (e) {
			return {
				css: e,
				rgba: (parseInt(e.slice(1), 16) << 8 | 255) >>> 0
			}
		}, t.toPaddedHex = i, t.toCss = n, t.toRgba = o, t.fromRgba = s, t.opaque = function (e) {
			var t = (255 | e.rgba) >>> 0,
				r = s(t);
			return {
				css: n(r[0], r[1], r[2]),
				rgba: t
			}
		}, t.rgbRelativeLuminance = a, t.rgbRelativeLuminance2 = c, t.contrastRatio = l, t.rgbaToColor = h, t.ensureContrastRatioRgba = u, t.ensureContrastRatio = function (e, t, r) {
			var i = u(e.rgba, t.rgba, r);
			if (i) return h(i >> 24 & 255, i >> 16 & 255, i >> 8 & 255)
		}, t.reduceLuminance = f, t.increaseLuminance = _
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = "undefined" == typeof navigator,
			n = i ? "node" : navigator.userAgent,
			o = i ? "node" : navigator.platform;

		function s(e, t) {
			return e.indexOf(t) >= 0
		}
		t.isFirefox = !!~n.indexOf("Firefox"), t.isSafari = /^((?!chrome|android).)*safari/i.test(n), t.isMac = s(["Macintosh", "MacIntel", "MacPPC", "Mac68K"], o), t.isIpad = "iPad" === o, t.isIphone = "iPhone" === o, t.isWindows = s(["Windows", "Win16", "Win32", "WinCE"], o), t.isLinux = o.indexOf("Linux") >= 0
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			function (e) {
				e.NUL = "\0", e.SOH = "", e.STX = "", e.ETX = "", e.EOT = "", e.ENQ = "", e.ACK = "", e.BEL = "", e.BS = "\b", e.HT = "\t", e.LF = "\n", e.VT = "\v", e.FF = "\f", e.CR = "\r", e.SO = "", e.SI = "", e.DLE = "", e.DC1 = "", e.DC2 = "", e.DC3 = "", e.DC4 = "", e.NAK = "", e.SYN = "", e.ETB = "", e.CAN = "", e.EM = "", e.SUB = "", e.ESC = "", e.FS = "", e.GS = "", e.RS = "", e.US = "", e.SP = " ", e.DEL = ""
			}(t.C0 || (t.C0 = {})),
			function (e) {
				e.PAD = "", e.HOP = "", e.BPH = "", e.NBH = "", e.IND = "", e.NEL = "", e.SSA = "", e.ESA = "", e.HTS = "", e.HTJ = "", e.VTS = "", e.PLD = "", e.PLU = "", e.RI = "", e.SS2 = "", e.SS3 = "", e.DCS = "", e.PU1 = "", e.PU2 = "", e.STS = "", e.CCH = "", e.MW = "", e.SPA = "", e.EPA = "", e.SOS = "", e.SGCI = "", e.SCI = "", e.CSI = "", e.ST = "", e.OSC = "", e.PM = "", e.APC = ""
			}(t.C1 || (t.C1 = {}))
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(3),
			n = r(9),
			o = r(24),
			s = r(6),
			a = r(27),
			c = r(10),
			l = function () {
				function e(e, t, r, i, n, o, s, a) {
					this._container = e, this._alpha = i, this._colors = n, this._rendererId = o, this._bufferService = s, this._optionsService = a, this._scaledCharWidth = 0, this._scaledCharHeight = 0, this._scaledCellWidth = 0, this._scaledCellHeight = 0, this._scaledCharLeft = 0, this._scaledCharTop = 0, this._currentGlyphIdentifier = {
						chars: "",
						code: 0,
						bg: 0,
						fg: 0,
						bold: !1,
						dim: !1,
						italic: !1
					}, this._canvas = document.createElement("canvas"), this._canvas.classList.add("xterm-" + t + "-layer"), this._canvas.style.zIndex = r.toString(), this._initCanvas(), this._container.appendChild(this._canvas)
				}
				return e.prototype.dispose = function () {
					var e;
					this._container.removeChild(this._canvas), null === (e = this._charAtlas) || void 0 === e || e.dispose()
				}, e.prototype._initCanvas = function () {
					this._ctx = a.throwIfFalsy(this._canvas.getContext("2d", {
						alpha: this._alpha
					})), this._alpha || this._clearAll()
				}, e.prototype.onOptionsChanged = function () {}, e.prototype.onBlur = function () {}, e.prototype.onFocus = function () {}, e.prototype.onCursorMove = function () {}, e.prototype.onGridChanged = function (e, t) {}, e.prototype.onSelectionChanged = function (e, t, r) {
					void 0 === r && (r = !1)
				}, e.prototype.setColors = function (e) {
					this._refreshCharAtlas(e)
				}, e.prototype._setTransparency = function (e) {
					if (e !== this._alpha) {
						var t = this._canvas;
						this._alpha = e, this._canvas = this._canvas.cloneNode(), this._initCanvas(), this._container.replaceChild(this._canvas, t), this._refreshCharAtlas(this._colors), this.onGridChanged(0, this._bufferService.rows - 1)
					}
				}, e.prototype._refreshCharAtlas = function (e) {
					this._scaledCharWidth <= 0 && this._scaledCharHeight <= 0 || (this._charAtlas = o.acquireCharAtlas(this._optionsService.options, this._rendererId, e, this._scaledCharWidth, this._scaledCharHeight), this._charAtlas.warmUp())
				}, e.prototype.resize = function (e) {
					this._scaledCellWidth = e.scaledCellWidth, this._scaledCellHeight = e.scaledCellHeight, this._scaledCharWidth = e.scaledCharWidth, this._scaledCharHeight = e.scaledCharHeight, this._scaledCharLeft = e.scaledCharLeft, this._scaledCharTop = e.scaledCharTop, this._canvas.width = e.scaledCanvasWidth, this._canvas.height = e.scaledCanvasHeight, this._canvas.style.width = e.canvasWidth + "px", this._canvas.style.height = e.canvasHeight + "px", this._alpha || this._clearAll(), this._refreshCharAtlas(this._colors)
				}, e.prototype._fillCells = function (e, t, r, i) {
					this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, i * this._scaledCellHeight)
				}, e.prototype._fillBottomLineAtCells = function (e, t, r) {
					void 0 === r && (r = 1), this._ctx.fillRect(e * this._scaledCellWidth, (t + 1) * this._scaledCellHeight - window.devicePixelRatio - 1, r * this._scaledCellWidth, window.devicePixelRatio)
				}, e.prototype._fillLeftLineAtCell = function (e, t) {
					this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, window.devicePixelRatio, this._scaledCellHeight)
				}, e.prototype._strokeRectAtCell = function (e, t, r, i) {
					this._ctx.lineWidth = window.devicePixelRatio, this._ctx.strokeRect(e * this._scaledCellWidth + window.devicePixelRatio / 2, t * this._scaledCellHeight + window.devicePixelRatio / 2, r * this._scaledCellWidth - window.devicePixelRatio, i * this._scaledCellHeight - window.devicePixelRatio)
				}, e.prototype._clearAll = function () {
					this._alpha ? this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height) : (this._ctx.fillStyle = this._colors.background.css, this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height))
				}, e.prototype._clearCells = function (e, t, r, i) {
					this._alpha ? this._ctx.clearRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, i * this._scaledCellHeight) : (this._ctx.fillStyle = this._colors.background.css, this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, i * this._scaledCellHeight))
				}, e.prototype._fillCharTrueColor = function (e, t, r) {
					this._ctx.font = this._getFont(!1, !1), this._ctx.textBaseline = "middle", this._clipRow(r), this._ctx.fillText(e.getChars(), t * this._scaledCellWidth + this._scaledCharLeft, r * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight / 2)
				}, e.prototype._drawChars = function (e, t, r) {
					var o, s, a = this._getContrastColor(e);
					a || e.isFgRGB() || e.isBgRGB() ? this._drawUncachedChars(e, t, r, a) : (e.isInverse() ? (o = e.isBgDefault() ? n.INVERTED_DEFAULT_COLOR : e.getBgColor(), s = e.isFgDefault() ? n.INVERTED_DEFAULT_COLOR : e.getFgColor()) : (s = e.isBgDefault() ? i.DEFAULT_COLOR : e.getBgColor(), o = e.isFgDefault() ? i.DEFAULT_COLOR : e.getFgColor()), o += this._optionsService.options.drawBoldTextInBrightColors && e.isBold() && o < 8 ? 8 : 0, this._currentGlyphIdentifier.chars = e.getChars() || i.WHITESPACE_CELL_CHAR, this._currentGlyphIdentifier.code = e.getCode() || i.WHITESPACE_CELL_CODE, this._currentGlyphIdentifier.bg = s, this._currentGlyphIdentifier.fg = o, this._currentGlyphIdentifier.bold = !!e.isBold(), this._currentGlyphIdentifier.dim = !!e.isDim(), this._currentGlyphIdentifier.italic = !!e.isItalic(), this._charAtlas && this._charAtlas.draw(this._ctx, this._currentGlyphIdentifier, t * this._scaledCellWidth + this._scaledCharLeft, r * this._scaledCellHeight + this._scaledCharTop) || this._drawUncachedChars(e, t, r))
				}, e.prototype._drawUncachedChars = function (e, t, r, i) {
					if (this._ctx.save(), this._ctx.font = this._getFont(!!e.isBold(), !!e.isItalic()), this._ctx.textBaseline = "middle", e.isInverse())
						if (i) this._ctx.fillStyle = i.css;
						else if (e.isBgDefault()) this._ctx.fillStyle = c.opaque(this._colors.background).css;
					else if (e.isBgRGB()) this._ctx.fillStyle = "rgb(" + s.AttributeData.toColorRGB(e.getBgColor()).join(",") + ")";
					else {
						var o = e.getBgColor();
						this._optionsService.options.drawBoldTextInBrightColors && e.isBold() && o < 8 && (o += 8), this._ctx.fillStyle = this._colors.ansi[o].css
					} else if (i) this._ctx.fillStyle = i.css;
					else if (e.isFgDefault()) this._ctx.fillStyle = this._colors.foreground.css;
					else if (e.isFgRGB()) this._ctx.fillStyle = "rgb(" + s.AttributeData.toColorRGB(e.getFgColor()).join(",") + ")";
					else {
						var a = e.getFgColor();
						this._optionsService.options.drawBoldTextInBrightColors && e.isBold() && a < 8 && (a += 8), this._ctx.fillStyle = this._colors.ansi[a].css
					}
					this._clipRow(r), e.isDim() && (this._ctx.globalAlpha = n.DIM_OPACITY), this._ctx.fillText(e.getChars(), t * this._scaledCellWidth + this._scaledCharLeft, r * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight / 2), this._ctx.restore()
				}, e.prototype._clipRow = function (e) {
					this._ctx.beginPath(), this._ctx.rect(0, e * this._scaledCellHeight, this._bufferService.cols * this._scaledCellWidth, this._scaledCellHeight), this._ctx.clip()
				}, e.prototype._getFont = function (e, t) {
					return (t ? "italic" : "") + " " + (e ? this._optionsService.options.fontWeightBold : this._optionsService.options.fontWeight) + " " + this._optionsService.options.fontSize * window.devicePixelRatio + "px " + this._optionsService.options.fontFamily
				}, e.prototype._getContrastColor = function (e) {
					if (1 !== this._optionsService.options.minimumContrastRatio) {
						var t = this._colors.contrastCache.getColor(e.bg, e.fg);
						if (void 0 !== t) return t || void 0;
						var r = e.getFgColor(),
							i = e.getFgColorMode(),
							n = e.getBgColor(),
							o = e.getBgColorMode(),
							s = !!e.isInverse(),
							a = !!e.isInverse();
						if (s) {
							var l = r;
							r = n, n = l;
							var h = i;
							i = o, o = h
						}
						var u = this._resolveBackgroundRgba(o, n, s),
							f = this._resolveForegroundRgba(i, r, s, a),
							_ = c.ensureContrastRatioRgba(u, f, this._optionsService.options.minimumContrastRatio);
						if (_) {
							var d = {
								css: c.toCss(_ >> 24 & 255, _ >> 16 & 255, _ >> 8 & 255),
								rgba: _
							};
							return this._colors.contrastCache.setColor(e.bg, e.fg, d), d
						}
						this._colors.contrastCache.setColor(e.bg, e.fg, null)
					}
				}, e.prototype._resolveBackgroundRgba = function (e, t, r) {
					switch (e) {
						case 16777216:
						case 33554432:
							return this._colors.ansi[t].rgba;
						case 50331648:
							return t << 8;
						case 0:
						default:
							return r ? this._colors.foreground.rgba : this._colors.background.rgba
					}
				}, e.prototype._resolveForegroundRgba = function (e, t, r, i) {
					switch (e) {
						case 16777216:
						case 33554432:
							return this._optionsService.options.drawBoldTextInBrightColors && i && t < 8 && (t += 8), this._colors.ansi[t].rgba;
						case 50331648:
							return t << 8;
						case 0:
						default:
							return r ? this._colors.background.rgba : this._colors.foreground.rgba
					}
				}, e
			}();
		t.BaseRenderLayer = l
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = "di$target",
			n = "di$dependencies";

		function o(e, t, r) {
			t[i] === t ? t[n].push({
				id: e,
				index: r
			}) : (t[n] = [{
				id: e,
				index: r
			}], t[i] = t)
		}
		t.serviceRegistry = new Map, t.getServiceDependencies = function (e) {
			return e[n] || []
		}, t.createDecorator = function (e) {
			if (t.serviceRegistry.has(e)) return t.serviceRegistry.get(e);
			var r = function (e, t, i) {
				if (3 !== arguments.length) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
				o(r, e, i)
			};
			return r.toString = function () {
				return e
			}, t.serviceRegistry.set(e, r), r
		}
	}, function (e, t, r) {
		"use strict";

		function i(e, t, r, i) {
			if (void 0 === r && (r = 0), void 0 === i && (i = e.length), r >= e.length) return e;
			r = (e.length + r) % e.length, i = i >= e.length ? e.length : (e.length + i) % e.length;
			for (var n = r; n < i; ++n) e[n] = t;
			return e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.fill = function (e, t, r, n) {
			return e.fill ? e.fill(t, r, n) : i(e, t, r, n)
		}, t.fillFallback = i, t.concat = function (e, t) {
			var r = new e.constructor(e.length + t.length);
			return r.set(e), r.set(t, e.length), r
		}
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(8),
			n = r(3),
			o = r(5),
			s = r(6),
			a = 3;
		t.DEFAULT_ATTR_DATA = Object.freeze(new s.AttributeData);
		var c = function () {
			function e(e, t, r) {
				void 0 === r && (r = !1), this.isWrapped = r, this._combined = {}, this._data = new Uint32Array(e * a);
				for (var i = t || o.CellData.fromCharData([0, n.NULL_CELL_CHAR, n.NULL_CELL_WIDTH, n.NULL_CELL_CODE]), s = 0; s < e; ++s) this.setCell(s, i);
				this.length = e
			}
			return e.prototype.get = function (e) {
				var t = this._data[e * a + 0],
					r = 2097151 & t;
				return [this._data[e * a + 1], 2097152 & t ? this._combined[e] : r ? i.stringFromCodePoint(r) : "", t >> 22, 2097152 & t ? this._combined[e].charCodeAt(this._combined[e].length - 1) : r]
			}, e.prototype.set = function (e, t) {
				this._data[e * a + 1] = t[n.CHAR_DATA_ATTR_INDEX], t[n.CHAR_DATA_CHAR_INDEX].length > 1 ? (this._combined[e] = t[1], this._data[e * a + 0] = 2097152 | e | t[n.CHAR_DATA_WIDTH_INDEX] << 22) : this._data[e * a + 0] = t[n.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | t[n.CHAR_DATA_WIDTH_INDEX] << 22
			}, e.prototype.getWidth = function (e) {
				return this._data[e * a + 0] >> 22
			}, e.prototype.hasWidth = function (e) {
				return 12582912 & this._data[e * a + 0]
			}, e.prototype.getFg = function (e) {
				return this._data[e * a + 1]
			}, e.prototype.getBg = function (e) {
				return this._data[e * a + 2]
			}, e.prototype.hasContent = function (e) {
				return 4194303 & this._data[e * a + 0]
			}, e.prototype.getCodePoint = function (e) {
				var t = this._data[e * a + 0];
				return 2097152 & t ? this._combined[e].charCodeAt(this._combined[e].length - 1) : 2097151 & t
			}, e.prototype.isCombined = function (e) {
				return 2097152 & this._data[e * a + 0]
			}, e.prototype.getString = function (e) {
				var t = this._data[e * a + 0];
				return 2097152 & t ? this._combined[e] : 2097151 & t ? i.stringFromCodePoint(2097151 & t) : ""
			}, e.prototype.loadCell = function (e, t) {
				var r = e * a;
				return t.content = this._data[r + 0], t.fg = this._data[r + 1], t.bg = this._data[r + 2], 2097152 & t.content && (t.combinedData = this._combined[e]), t
			}, e.prototype.setCell = function (e, t) {
				2097152 & t.content && (this._combined[e] = t.combinedData), this._data[e * a + 0] = t.content, this._data[e * a + 1] = t.fg, this._data[e * a + 2] = t.bg
			}, e.prototype.setCellFromCodePoint = function (e, t, r, i, n) {
				this._data[e * a + 0] = t | r << 22, this._data[e * a + 1] = i, this._data[e * a + 2] = n
			}, e.prototype.addCodepointToCell = function (e, t) {
				var r = this._data[e * a + 0];
				2097152 & r ? this._combined[e] += i.stringFromCodePoint(t) : (2097151 & r ? (this._combined[e] = i.stringFromCodePoint(2097151 & r) + i.stringFromCodePoint(t), r &= -2097152, r |= 2097152) : r = t | 1 << 22, this._data[e * a + 0] = r)
			}, e.prototype.insertCells = function (e, t, r) {
				if (e %= this.length, t < this.length - e) {
					for (var i = new o.CellData, n = this.length - e - t - 1; n >= 0; --n) this.setCell(e + t + n, this.loadCell(e + n, i));
					for (n = 0; n < t; ++n) this.setCell(e + n, r)
				} else
					for (n = e; n < this.length; ++n) this.setCell(n, r)
			}, e.prototype.deleteCells = function (e, t, r) {
				if (e %= this.length, t < this.length - e) {
					for (var i = new o.CellData, n = 0; n < this.length - e - t; ++n) this.setCell(e + n, this.loadCell(e + t + n, i));
					for (n = this.length - t; n < this.length; ++n) this.setCell(n, r)
				} else
					for (n = e; n < this.length; ++n) this.setCell(n, r)
			}, e.prototype.replaceCells = function (e, t, r) {
				for (; e < t && e < this.length;) this.setCell(e++, r)
			}, e.prototype.resize = function (e, t) {
				if (e !== this.length) {
					if (e > this.length) {
						var r = new Uint32Array(e * a);
						this.length && (e * a < this._data.length ? r.set(this._data.subarray(0, e * a)) : r.set(this._data)), this._data = r;
						for (var i = this.length; i < e; ++i) this.setCell(i, t)
					} else if (e) {
						(r = new Uint32Array(e * a)).set(this._data.subarray(0, e * a)), this._data = r;
						var n = Object.keys(this._combined);
						for (i = 0; i < n.length; i++) {
							var o = parseInt(n[i], 10);
							o >= e && delete this._combined[o]
						}
					} else this._data = new Uint32Array(0), this._combined = {};
					this.length = e
				}
			}, e.prototype.fill = function (e) {
				this._combined = {};
				for (var t = 0; t < this.length; ++t) this.setCell(t, e)
			}, e.prototype.copyFrom = function (e) {
				for (var t in this.length !== e.length ? this._data = new Uint32Array(e._data) : this._data.set(e._data), this.length = e.length, this._combined = {}, e._combined) this._combined[t] = e._combined[t];
				this.isWrapped = e.isWrapped
			}, e.prototype.clone = function () {
				var t = new e(0);
				for (var r in t._data = new Uint32Array(this._data), t.length = this.length, this._combined) t._combined[r] = this._combined[r];
				return t.isWrapped = this.isWrapped, t
			}, e.prototype.getTrimmedLength = function () {
				for (var e = this.length - 1; e >= 0; --e)
					if (4194303 & this._data[e * a + 0]) return e + (this._data[e * a + 0] >> 22);
				return 0
			}, e.prototype.copyCellsFrom = function (e, t, r, i, n) {
				var o = e._data;
				if (n)
					for (var s = i - 1; s >= 0; s--)
						for (var c = 0; c < a; c++) this._data[(r + s) * a + c] = o[(t + s) * a + c];
				else
					for (s = 0; s < i; s++)
						for (c = 0; c < a; c++) this._data[(r + s) * a + c] = o[(t + s) * a + c];
				var l = Object.keys(e._combined);
				for (c = 0; c < l.length; c++) {
					var h = parseInt(l[c], 10);
					h >= t && (this._combined[h - t + r] = e._combined[h])
				}
			}, e.prototype.translateToString = function (e, t, r) {
				void 0 === e && (e = !1), void 0 === t && (t = 0), void 0 === r && (r = this.length), e && (r = Math.min(r, this.getTrimmedLength()));
				for (var o = ""; t < r;) {
					var s = this._data[t * a + 0],
						c = 2097151 & s;
					o += 2097152 & s ? this._combined[t] : c ? i.stringFromCodePoint(c) : n.WHITESPACE_CELL_CHAR, t += s >> 22 || 1
				}
				return o
			}, e
		}();
		t.BufferLine = c
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.promptLabel = "Terminal input", t.tooMuchOutput = "Too much output to announce, navigate to rows manually to read"
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.CHARSETS = {}, t.DEFAULT_CHARSET = t.CHARSETS.B, t.CHARSETS[0] = {
			"`": "◆",
			a: "▒",
			b: "\t",
			c: "\f",
			d: "\r",
			e: "\n",
			f: "°",
			g: "±",
			h: "␤",
			i: "\v",
			j: "┘",
			k: "┐",
			l: "┌",
			m: "└",
			n: "┼",
			o: "⎺",
			p: "⎻",
			q: "─",
			r: "⎼",
			s: "⎽",
			t: "├",
			u: "┤",
			v: "┴",
			w: "┬",
			x: "│",
			y: "≤",
			z: "≥",
			"{": "π",
			"|": "≠",
			"}": "£",
			"~": "·"
		}, t.CHARSETS.A = {
			"#": "£"
		}, t.CHARSETS.B = null, t.CHARSETS[4] = {
			"#": "£",
			"@": "¾",
			"[": "ij",
			"\\": "½",
			"]": "|",
			"{": "¨",
			"|": "f",
			"}": "¼",
			"~": "´"
		}, t.CHARSETS.C = t.CHARSETS[5] = {
			"[": "Ä",
			"\\": "Ö",
			"]": "Å",
			"^": "Ü",
			"`": "é",
			"{": "ä",
			"|": "ö",
			"}": "å",
			"~": "ü"
		}, t.CHARSETS.R = {
			"#": "£",
			"@": "à",
			"[": "°",
			"\\": "ç",
			"]": "§",
			"{": "é",
			"|": "ù",
			"}": "è",
			"~": "¨"
		}, t.CHARSETS.Q = {
			"@": "à",
			"[": "â",
			"\\": "ç",
			"]": "ê",
			"^": "î",
			"`": "ô",
			"{": "é",
			"|": "ù",
			"}": "è",
			"~": "û"
		}, t.CHARSETS.K = {
			"@": "§",
			"[": "Ä",
			"\\": "Ö",
			"]": "Ü",
			"{": "ä",
			"|": "ö",
			"}": "ü",
			"~": "ß"
		}, t.CHARSETS.Y = {
			"#": "£",
			"@": "§",
			"[": "°",
			"\\": "ç",
			"]": "é",
			"`": "ù",
			"{": "à",
			"|": "ò",
			"}": "è",
			"~": "ì"
		}, t.CHARSETS.E = t.CHARSETS[6] = {
			"@": "Ä",
			"[": "Æ",
			"\\": "Ø",
			"]": "Å",
			"^": "Ü",
			"`": "ä",
			"{": "æ",
			"|": "ø",
			"}": "å",
			"~": "ü"
		}, t.CHARSETS.Z = {
			"#": "£",
			"@": "§",
			"[": "¡",
			"\\": "Ñ",
			"]": "¿",
			"{": "°",
			"|": "ñ",
			"}": "ç"
		}, t.CHARSETS.H = t.CHARSETS[7] = {
			"@": "É",
			"[": "Ä",
			"\\": "Ö",
			"]": "Å",
			"^": "Ü",
			"`": "é",
			"{": "ä",
			"|": "ö",
			"}": "å",
			"~": "ü"
		}, t.CHARSETS["="] = {
			"#": "ù",
			"@": "à",
			"[": "é",
			"\\": "ç",
			"]": "ê",
			"^": "î",
			_: "è",
			"`": "ô",
			"{": "ä",
			"|": "ö",
			"}": "ü",
			"~": "û"
		}
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(15);
		t.wcwidth = function (e) {
			var t = [[768, 879], [1155, 1158], [1160, 1161], [1425, 1469], [1471, 1471], [1473, 1474], [1476, 1477], [1479, 1479], [1536, 1539], [1552, 1557], [1611, 1630], [1648, 1648], [1750, 1764], [1767, 1768], [1770, 1773], [1807, 1807], [1809, 1809], [1840, 1866], [1958, 1968], [2027, 2035], [2305, 2306], [2364, 2364], [2369, 2376], [2381, 2381], [2385, 2388], [2402, 2403], [2433, 2433], [2492, 2492], [2497, 2500], [2509, 2509], [2530, 2531], [2561, 2562], [2620, 2620], [2625, 2626], [2631, 2632], [2635, 2637], [2672, 2673], [2689, 2690], [2748, 2748], [2753, 2757], [2759, 2760], [2765, 2765], [2786, 2787], [2817, 2817], [2876, 2876], [2879, 2879], [2881, 2883], [2893, 2893], [2902, 2902], [2946, 2946], [3008, 3008], [3021, 3021], [3134, 3136], [3142, 3144], [3146, 3149], [3157, 3158], [3260, 3260], [3263, 3263], [3270, 3270], [3276, 3277], [3298, 3299], [3393, 3395], [3405, 3405], [3530, 3530], [3538, 3540], [3542, 3542], [3633, 3633], [3636, 3642], [3655, 3662], [3761, 3761], [3764, 3769], [3771, 3772], [3784, 3789], [3864, 3865], [3893, 3893], [3895, 3895], [3897, 3897], [3953, 3966], [3968, 3972], [3974, 3975], [3984, 3991], [3993, 4028], [4038, 4038], [4141, 4144], [4146, 4146], [4150, 4151], [4153, 4153], [4184, 4185], [4448, 4607], [4959, 4959], [5906, 5908], [5938, 5940], [5970, 5971], [6002, 6003], [6068, 6069], [6071, 6077], [6086, 6086], [6089, 6099], [6109, 6109], [6155, 6157], [6313, 6313], [6432, 6434], [6439, 6440], [6450, 6450], [6457, 6459], [6679, 6680], [6912, 6915], [6964, 6964], [6966, 6970], [6972, 6972], [6978, 6978], [7019, 7027], [7616, 7626], [7678, 7679], [8203, 8207], [8234, 8238], [8288, 8291], [8298, 8303], [8400, 8431], [12330, 12335], [12441, 12442], [43014, 43014], [43019, 43019], [43045, 43046], [64286, 64286], [65024, 65039], [65056, 65059], [65279, 65279], [65529, 65531]],
				r = [[68097, 68099], [68101, 68102], [68108, 68111], [68152, 68154], [68159, 68159], [119143, 119145], [119155, 119170], [119173, 119179], [119210, 119213], [119362, 119364], [917505, 917505], [917536, 917631], [917760, 917999]];
			var n = 0 | e.control,
				o = new Uint8Array(65536);
			i.fill(o, 1), o[0] = e.nul, i.fill(o, e.control, 1, 32), i.fill(o, e.control, 127, 160), i.fill(o, 2, 4352, 4448), o[9001] = 2, o[9002] = 2, i.fill(o, 2, 11904, 42192), o[12351] = 1, i.fill(o, 2, 44032, 55204), i.fill(o, 2, 63744, 64256), i.fill(o, 2, 65040, 65050), i.fill(o, 2, 65072, 65136), i.fill(o, 2, 65280, 65377), i.fill(o, 2, 65504, 65511);
			for (var s = 0; s < t.length; ++s) i.fill(o, 0, t[s][0], t[s][1] + 1);
			return function (e) {
				return e < 32 ? 0 | n : e < 127 ? 1 : e < 65536 ? o[e] : function (e, t) {
					var r, i = 0,
						n = t.length - 1;
					if (e < t[0][0] || e > t[n][1]) return !1;
					for (; n >= i;)
						if (e > t[r = i + n >> 1][1]) i = r + 1;
						else {
							if (!(e < t[r][0])) return !0;
							n = r - 1
						} return !1
				}(t = e, r) ? 0 : t >= 131072 && t <= 196605 || t >= 196608 && t <= 262141 ? 2 : 1;
				var t
			}
		}({
			nul: 0,
			control: 0
		}), t.getStringCellWidth = function (e) {
			for (var r = 0, i = e.length, n = 0; n < i; ++n) {
				var o = e.charCodeAt(n);
				if (55296 <= o && o <= 56319) {
					if (++n >= i) return r + t.wcwidth(o);
					var s = e.charCodeAt(n);
					56320 <= s && s <= 57343 ? o = 1024 * (o - 55296) + s - 56320 + 65536 : r += t.wcwidth(s)
				}
				r += t.wcwidth(o)
			}
			return r
		}
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = 256,
			n = function () {
				function e(e, t) {
					if (void 0 === e && (e = 32), void 0 === t && (t = 32), this.maxLength = e, this.maxSubParamsLength = t, t > i) throw new Error("maxSubParamsLength must not be greater than 256");
					this.params = new Int32Array(e), this.length = 0, this._subParams = new Int32Array(t), this._subParamsLength = 0, this._subParamsIdx = new Uint16Array(e), this._rejectDigits = !1, this._rejectSubDigits = !1, this._digitIsSub = !1
				}
				return e.fromArray = function (t) {
					var r = new e;
					if (!t.length) return r;
					for (var i = t[0] instanceof Array ? 1 : 0; i < t.length; ++i) {
						var n = t[i];
						if (n instanceof Array)
							for (var o = 0; o < n.length; ++o) r.addSubParam(n[o]);
						else r.addParam(n)
					}
					return r
				}, e.prototype.clone = function () {
					var t = new e(this.maxLength, this.maxSubParamsLength);
					return t.params.set(this.params), t.length = this.length, t._subParams.set(this._subParams), t._subParamsLength = this._subParamsLength, t._subParamsIdx.set(this._subParamsIdx), t._rejectDigits = this._rejectDigits, t._rejectSubDigits = this._rejectSubDigits, t._digitIsSub = this._digitIsSub, t
				}, e.prototype.toArray = function () {
					for (var e = [], t = 0; t < this.length; ++t) {
						e.push(this.params[t]);
						var r = this._subParamsIdx[t] >> 8,
							i = 255 & this._subParamsIdx[t];
						i - r > 0 && e.push(Array.prototype.slice.call(this._subParams, r, i))
					}
					return e
				}, e.prototype.reset = function () {
					this.length = 0, this._subParamsLength = 0, this._rejectDigits = !1, this._rejectSubDigits = !1, this._digitIsSub = !1
				}, e.prototype.addParam = function (e) {
					if (this._digitIsSub = !1, this.length >= this.maxLength) this._rejectDigits = !0;
					else {
						if (e < -1) throw new Error("values lesser than -1 are not allowed");
						this._subParamsIdx[this.length] = this._subParamsLength << 8 | this._subParamsLength, this.params[this.length++] = e > 2147483647 ? 2147483647 : e
					}
				}, e.prototype.addSubParam = function (e) {
					if (this._digitIsSub = !0, this.length)
						if (this._rejectDigits || this._subParamsLength >= this.maxSubParamsLength) this._rejectSubDigits = !0;
						else {
							if (e < -1) throw new Error("values lesser than -1 are not allowed");
							this._subParams[this._subParamsLength++] = e > 2147483647 ? 2147483647 : e, this._subParamsIdx[this.length - 1]++
						}
				}, e.prototype.hasSubParams = function (e) {
					return (255 & this._subParamsIdx[e]) - (this._subParamsIdx[e] >> 8) > 0
				}, e.prototype.getSubParams = function (e) {
					var t = this._subParamsIdx[e] >> 8,
						r = 255 & this._subParamsIdx[e];
					return r - t > 0 ? this._subParams.subarray(t, r) : null
				}, e.prototype.getSubParamsAll = function () {
					for (var e = {}, t = 0; t < this.length; ++t) {
						var r = this._subParamsIdx[t] >> 8,
							i = 255 & this._subParamsIdx[t];
						i - r > 0 && (e[t] = this._subParams.slice(r, i))
					}
					return e
				}, e.prototype.addDigit = function (e) {
					var t;
					if (!(this._rejectDigits || !(t = this._digitIsSub ? this._subParamsLength : this.length) || this._digitIsSub && this._rejectSubDigits)) {
						var r = this._digitIsSub ? this._subParams : this.params,
							i = r[t - 1];
						r[t - 1] = ~i ? Math.min(10 * i + e, 2147483647) : e
					}
				}, e
			}();
		t.Params = n
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(22),
			n = r(8),
			o = function () {
				function e() {
					this._state = 0, this._id = -1, this._handlers = Object.create(null), this._handlerFb = function () {}
				}
				return e.prototype.addHandler = function (e, t) {
					void 0 === this._handlers[e] && (this._handlers[e] = []);
					var r = this._handlers[e];
					return r.push(t), {
						dispose: function () {
							var e = r.indexOf(t); - 1 !== e && r.splice(e, 1)
						}
					}
				}, e.prototype.setHandler = function (e, t) {
					this._handlers[e] = [t]
				}, e.prototype.clearHandler = function (e) {
					this._handlers[e] && delete this._handlers[e]
				}, e.prototype.setHandlerFallback = function (e) {
					this._handlerFb = e
				}, e.prototype.dispose = function () {
					this._handlers = Object.create(null), this._handlerFb = function () {}
				}, e.prototype.reset = function () {
					2 === this._state && this.end(!1), this._id = -1, this._state = 0
				}, e.prototype._start = function () {
					var e = this._handlers[this._id];
					if (e)
						for (var t = e.length - 1; t >= 0; t--) e[t].start();
					else this._handlerFb(this._id, "START")
				}, e.prototype._put = function (e, t, r) {
					var i = this._handlers[this._id];
					if (i)
						for (var o = i.length - 1; o >= 0; o--) i[o].put(e, t, r);
					else this._handlerFb(this._id, "PUT", n.utf32ToString(e, t, r))
				}, e.prototype._end = function (e) {
					var t = this._handlers[this._id];
					if (t) {
						for (var r = t.length - 1; r >= 0 && !1 === t[r].end(e); r--);
						for (r--; r >= 0; r--) t[r].end(!1)
					} else this._handlerFb(this._id, "END", e)
				}, e.prototype.start = function () {
					this.reset(), this._id = -1, this._state = 1
				}, e.prototype.put = function (e, t, r) {
					if (3 !== this._state) {
						if (1 === this._state)
							for (; t < r;) {
								var i = e[t++];
								if (59 === i) {
									this._state = 2, this._start();
									break
								}
								if (i < 48 || 57 < i) return void(this._state = 3); - 1 === this._id && (this._id = 0), this._id = 10 * this._id + i - 48
							}
						2 === this._state && r - t > 0 && this._put(e, t, r)
					}
				}, e.prototype.end = function (e) {
					0 !== this._state && (3 !== this._state && (1 === this._state && this._start(), this._end(e)), this._id = -1, this._state = 0)
				}, e
			}();
		t.OscParser = o;
		var s = function () {
			function e(e) {
				this._handler = e, this._data = "", this._hitLimit = !1
			}
			return e.prototype.start = function () {
				this._data = "", this._hitLimit = !1
			}, e.prototype.put = function (e, t, r) {
				this._hitLimit || (this._data += n.utf32ToString(e, t, r), this._data.length > i.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = !0))
			}, e.prototype.end = function (e) {
				var t;
				return this._hitLimit ? t = !1 : e && (t = this._handler(this._data)), this._data = "", this._hitLimit = !1, t
			}, e
		}();
		t.OscHandler = s
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.PAYLOAD_LIMIT = 1e7
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(8),
			n = r(20),
			o = r(22),
			s = [],
			a = function () {
				function e() {
					this._handlers = Object.create(null), this._active = s, this._ident = 0, this._handlerFb = function () {}
				}
				return e.prototype.dispose = function () {
					this._handlers = Object.create(null), this._handlerFb = function () {}
				}, e.prototype.addHandler = function (e, t) {
					void 0 === this._handlers[e] && (this._handlers[e] = []);
					var r = this._handlers[e];
					return r.push(t), {
						dispose: function () {
							var e = r.indexOf(t); - 1 !== e && r.splice(e, 1)
						}
					}
				}, e.prototype.setHandler = function (e, t) {
					this._handlers[e] = [t]
				}, e.prototype.clearHandler = function (e) {
					this._handlers[e] && delete this._handlers[e]
				}, e.prototype.setHandlerFallback = function (e) {
					this._handlerFb = e
				}, e.prototype.reset = function () {
					this._active.length && this.unhook(!1), this._active = s, this._ident = 0
				}, e.prototype.hook = function (e, t) {
					if (this.reset(), this._ident = e, this._active = this._handlers[e] || s, this._active.length)
						for (var r = this._active.length - 1; r >= 0; r--) this._active[r].hook(t);
					else this._handlerFb(this._ident, "HOOK", t)
				}, e.prototype.put = function (e, t, r) {
					if (this._active.length)
						for (var n = this._active.length - 1; n >= 0; n--) this._active[n].put(e, t, r);
					else this._handlerFb(this._ident, "PUT", i.utf32ToString(e, t, r))
				}, e.prototype.unhook = function (e) {
					if (this._active.length) {
						for (var t = this._active.length - 1; t >= 0 && !1 === this._active[t].unhook(e); t--);
						for (t--; t >= 0; t--) this._active[t].unhook(!1)
					} else this._handlerFb(this._ident, "UNHOOK", e);
					this._active = s, this._ident = 0
				}, e
			}();
		t.DcsParser = a;
		var c = function () {
			function e(e) {
				this._handler = e, this._data = "", this._hitLimit = !1
			}
			return e.prototype.hook = function (e) {
				this._params = e.clone(), this._data = "", this._hitLimit = !1
			}, e.prototype.put = function (e, t, r) {
				this._hitLimit || (this._data += i.utf32ToString(e, t, r), this._data.length > o.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = !0))
			}, e.prototype.unhook = function (e) {
				var t;
				return this._hitLimit ? t = !1 : e && (t = this._handler(this._data, this._params ? this._params : new n.Params)), this._params = void 0, this._data = "", this._hitLimit = !1, t
			}, e
		}();
		t.DcsHandler = c
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(25),
			n = r(43),
			o = [];
		t.acquireCharAtlas = function (e, t, r, s, a) {
			for (var c = i.generateConfig(s, a, e, r), l = 0; l < o.length; l++) {
				var h = (u = o[l]).ownedBy.indexOf(t);
				if (h >= 0) {
					if (i.configEquals(u.config, c)) return u.atlas;
					1 === u.ownedBy.length ? (u.atlas.dispose(), o.splice(l, 1)) : u.ownedBy.splice(h, 1);
					break
				}
			}
			for (l = 0; l < o.length; l++) {
				var u = o[l];
				if (i.configEquals(u.config, c)) return u.ownedBy.push(t), u.atlas
			}
			var f = {
				atlas: new n.DynamicCharAtlas(document, c),
				config: c,
				ownedBy: [t]
			};
			return o.push(f), f.atlas
		}, t.removeTerminalFromCache = function (e) {
			for (var t = 0; t < o.length; t++) {
				var r = o[t].ownedBy.indexOf(e);
				if (-1 !== r) {
					1 === o[t].ownedBy.length ? (o[t].atlas.dispose(), o.splice(t, 1)) : o[t].ownedBy.splice(r, 1);
					break
				}
			}
		}
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(3);
		t.generateConfig = function (e, t, r, i) {
			var n = {
				foreground: i.foreground,
				background: i.background,
				cursor: void 0,
				cursorAccent: void 0,
				selection: void 0,
				ansi: i.ansi.slice(0, 16)
			};
			return {
				devicePixelRatio: window.devicePixelRatio,
				scaledCharWidth: e,
				scaledCharHeight: t,
				fontFamily: r.fontFamily,
				fontSize: r.fontSize,
				fontWeight: r.fontWeight,
				fontWeightBold: r.fontWeightBold,
				allowTransparency: r.allowTransparency,
				colors: n
			}
		}, t.configEquals = function (e, t) {
			for (var r = 0; r < e.colors.ansi.length; r++)
				if (e.colors.ansi[r].rgba !== t.colors.ansi[r].rgba) return !1;
			return e.devicePixelRatio === t.devicePixelRatio && e.fontFamily === t.fontFamily && e.fontSize === t.fontSize && e.fontWeight === t.fontWeight && e.fontWeightBold === t.fontWeightBold && e.allowTransparency === t.allowTransparency && e.scaledCharWidth === t.scaledCharWidth && e.scaledCharHeight === t.scaledCharHeight && e.colors.foreground === t.colors.foreground && e.colors.background === t.colors.background
		}, t.is256Color = function (e) {
			return e < i.DEFAULT_COLOR
		}
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(10),
			n = r(45),
			o = i.fromCss("#ffffff"),
			s = i.fromCss("#000000"),
			a = i.fromCss("#ffffff"),
			c = i.fromCss("#000000"),
			l = {
				css: "rgba(255, 255, 255, 0.3)",
				rgba: 4294967117
			};
		t.DEFAULT_ANSI_COLORS = function () {
			for (var e = [i.fromCss("#2e3436"), i.fromCss("#cc0000"), i.fromCss("#4e9a06"), i.fromCss("#c4a000"), i.fromCss("#3465a4"), i.fromCss("#75507b"), i.fromCss("#06989a"), i.fromCss("#d3d7cf"), i.fromCss("#555753"), i.fromCss("#ef2929"), i.fromCss("#8ae234"), i.fromCss("#fce94f"), i.fromCss("#729fcf"), i.fromCss("#ad7fa8"), i.fromCss("#34e2e2"), i.fromCss("#eeeeec")], t = [0, 95, 135, 175, 215, 255], r = 0; r < 216; r++) {
				var n = t[r / 36 % 6 | 0],
					o = t[r / 6 % 6 | 0],
					s = t[r % 6];
				e.push({
					css: i.toCss(n, o, s),
					rgba: i.toRgba(n, o, s)
				})
			}
			for (r = 0; r < 24; r++) {
				var a = 8 + 10 * r;
				e.push({
					css: i.toCss(a, a, a),
					rgba: i.toRgba(a, a, a)
				})
			}
			return e
		}();
		var h = function () {
			function e(e, r) {
				this.allowTransparency = r;
				var h = e.createElement("canvas");
				h.width = 1, h.height = 1;
				var u = h.getContext("2d");
				if (!u) throw new Error("Could not get rendering context");
				this._ctx = u, this._ctx.globalCompositeOperation = "copy", this._litmusColor = this._ctx.createLinearGradient(0, 0, 1, 1), this._contrastCache = new n.ColorContrastCache, this.colors = {
					foreground: o,
					background: s,
					cursor: a,
					cursorAccent: c,
					selection: l,
					selectionOpaque: i.blend(s, l),
					ansi: t.DEFAULT_ANSI_COLORS.slice(),
					contrastCache: this._contrastCache
				}
			}
			return e.prototype.onOptionsChange = function (e) {
				"minimumContrastRatio" === e && this._contrastCache.clear()
			}, e.prototype.setTheme = function (e) {
				void 0 === e && (e = {}), this.colors.foreground = this._parseColor(e.foreground, o), this.colors.background = this._parseColor(e.background, s), this.colors.cursor = this._parseColor(e.cursor, a, !0), this.colors.cursorAccent = this._parseColor(e.cursorAccent, c, !0), this.colors.selection = this._parseColor(e.selection, l, !0), this.colors.selectionOpaque = i.blend(this.colors.background, this.colors.selection), this.colors.ansi[0] = this._parseColor(e.black, t.DEFAULT_ANSI_COLORS[0]), this.colors.ansi[1] = this._parseColor(e.red, t.DEFAULT_ANSI_COLORS[1]), this.colors.ansi[2] = this._parseColor(e.green, t.DEFAULT_ANSI_COLORS[2]), this.colors.ansi[3] = this._parseColor(e.yellow, t.DEFAULT_ANSI_COLORS[3]), this.colors.ansi[4] = this._parseColor(e.blue, t.DEFAULT_ANSI_COLORS[4]), this.colors.ansi[5] = this._parseColor(e.magenta, t.DEFAULT_ANSI_COLORS[5]), this.colors.ansi[6] = this._parseColor(e.cyan, t.DEFAULT_ANSI_COLORS[6]), this.colors.ansi[7] = this._parseColor(e.white, t.DEFAULT_ANSI_COLORS[7]), this.colors.ansi[8] = this._parseColor(e.brightBlack, t.DEFAULT_ANSI_COLORS[8]), this.colors.ansi[9] = this._parseColor(e.brightRed, t.DEFAULT_ANSI_COLORS[9]), this.colors.ansi[10] = this._parseColor(e.brightGreen, t.DEFAULT_ANSI_COLORS[10]), this.colors.ansi[11] = this._parseColor(e.brightYellow, t.DEFAULT_ANSI_COLORS[11]), this.colors.ansi[12] = this._parseColor(e.brightBlue, t.DEFAULT_ANSI_COLORS[12]), this.colors.ansi[13] = this._parseColor(e.brightMagenta, t.DEFAULT_ANSI_COLORS[13]), this.colors.ansi[14] = this._parseColor(e.brightCyan, t.DEFAULT_ANSI_COLORS[14]), this.colors.ansi[15] = this._parseColor(e.brightWhite, t.DEFAULT_ANSI_COLORS[15]), this._contrastCache.clear()
			}, e.prototype._parseColor = function (e, t, r) {
				if (void 0 === r && (r = this.allowTransparency), void 0 === e) return t;
				if (this._ctx.fillStyle = this._litmusColor, this._ctx.fillStyle = e, "string" != typeof this._ctx.fillStyle) return console.warn("Color: " + e + " is invalid using fallback " + t.css), t;
				this._ctx.fillRect(0, 0, 1, 1);
				var n = this._ctx.getImageData(0, 0, 1, 1).data;
				if (255 !== n[3]) {
					if (!r) return console.warn("Color: " + e + " is using transparency, but allowTransparency is false. Using fallback " + t.css + "."), t;
					var o = void 0,
						s = void 0,
						a = void 0,
						c = void 0,
						l = void 0;
					if (5 === e.length) {
						var h = parseInt(e.substr(1), 16);
						o = 16 * (h >> 12 & 15), s = 16 * (h >> 8 & 15), a = 16 * (h >> 4 & 15), c = 16 * (15 & h), l = i.toRgba(o, s, a, c)
					} else o = (l = parseInt(e.substr(1), 16)) >> 24 & 255, s = l >> 16 & 255, a = l >> 8 & 255, c = 255 & l;
					return {
						rgba: l,
						css: i.toCss(o, s, a, c)
					}
				}
				return {
					css: e,
					rgba: i.toRgba(n[0], n[1], n[2], n[3])
				}
			}, e
		}();
		t.ColorManager = h
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.throwIfFalsy = function (e) {
			if (!e) throw new Error("value must not be falsy");
			return e
		}
	}, function (e, t, r) {
		"use strict";
		var i, n = this && this.__extends || (i = function (e, t) {
			return (i = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (e, t) {
					e.__proto__ = t
				} || function (e, t) {
					for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
				})(e, t)
		}, function (e, t) {
			function r() {
				this.constructor = e
			}
			i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
		});
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(6),
			s = r(3),
			a = r(5),
			c = function (e) {
				function t(t, r, i) {
					var n = e.call(this) || this;
					return n.content = 0, n.combinedData = "", n.fg = t.fg, n.bg = t.bg, n.combinedData = r, n._width = i, n
				}
				return n(t, e), t.prototype.isCombined = function () {
					return 2097152
				}, t.prototype.getWidth = function () {
					return this._width
				}, t.prototype.getChars = function () {
					return this.combinedData
				}, t.prototype.getCode = function () {
					return 2097151
				}, t.prototype.setFromCharData = function (e) {
					throw new Error("not implemented")
				}, t.prototype.getAsCharData = function () {
					return [this.fg, this.getChars(), this.getWidth(), this.getCode()]
				}, t
			}(o.AttributeData);
		t.JoinedCellData = c;
		var l = function () {
			function e(e) {
				this._bufferService = e, this._characterJoiners = [], this._nextCharacterJoinerId = 0, this._workCell = new a.CellData
			}
			return e.prototype.registerCharacterJoiner = function (e) {
				var t = {
					id: this._nextCharacterJoinerId++,
					handler: e
				};
				return this._characterJoiners.push(t), t.id
			}, e.prototype.deregisterCharacterJoiner = function (e) {
				for (var t = 0; t < this._characterJoiners.length; t++)
					if (this._characterJoiners[t].id === e) return this._characterJoiners.splice(t, 1), !0;
				return !1
			}, e.prototype.getJoinedCharacters = function (e) {
				if (0 === this._characterJoiners.length) return [];
				var t = this._bufferService.buffer.lines.get(e);
				if (!t || 0 === t.length) return [];
				for (var r = [], i = t.translateToString(!0), n = 0, o = 0, a = 0, c = t.getFg(0), l = t.getBg(0), h = 0; h < t.getTrimmedLength(); h++)
					if (t.loadCell(h, this._workCell), 0 !== this._workCell.getWidth()) {
						if (this._workCell.fg !== c || this._workCell.bg !== l) {
							if (h - n > 1)
								for (var u = this._getJoinedRanges(i, a, o, t, n), f = 0; f < u.length; f++) r.push(u[f]);
							n = h, a = o, c = this._workCell.fg, l = this._workCell.bg
						}
						o += this._workCell.getChars().length || s.WHITESPACE_CELL_CHAR.length
					} if (this._bufferService.cols - n > 1)
					for (u = this._getJoinedRanges(i, a, o, t, n), f = 0; f < u.length; f++) r.push(u[f]);
				return r
			}, e.prototype._getJoinedRanges = function (t, r, i, n, o) {
				for (var s = t.substring(r, i), a = this._characterJoiners[0].handler(s), c = 1; c < this._characterJoiners.length; c++)
					for (var l = this._characterJoiners[c].handler(s), h = 0; h < l.length; h++) e._mergeRanges(a, l[h]);
				return this._stringRangesToCellRanges(a, n, o), a
			}, e.prototype._stringRangesToCellRanges = function (e, t, r) {
				var i = 0,
					n = !1,
					o = 0,
					a = e[i];
				if (a) {
					for (var c = r; c < this._bufferService.cols; c++) {
						var l = t.getWidth(c),
							h = t.getString(c).length || s.WHITESPACE_CELL_CHAR.length;
						if (0 !== l) {
							if (!n && a[0] <= o && (a[0] = c, n = !0), a[1] <= o) {
								if (a[1] = c, !(a = e[++i])) break;
								a[0] <= o ? (a[0] = c, n = !0) : n = !1
							}
							o += h
						}
					}
					a && (a[1] = this._bufferService.cols)
				}
			}, e._mergeRanges = function (e, t) {
				for (var r = !1, i = 0; i < e.length; i++) {
					var n = e[i];
					if (r) {
						if (t[1] <= n[0]) return e[i - 1][1] = t[1], e;
						if (t[1] <= n[1]) return e[i - 1][1] = Math.max(t[1], n[1]), e.splice(i, 1), e;
						e.splice(i, 1), i--
					} else {
						if (t[1] <= n[0]) return e.splice(i, 0, t), e;
						if (t[1] <= n[1]) return n[0] = Math.min(t[0], n[0]), e;
						t[0] < n[1] && (n[0] = Math.min(t[0], n[0]), r = !0)
					}
				}
				return r ? e[e.length - 1][1] = t[1] : e.push(t), e
			}, e
		}();
		t.CharacterJoinerRegistry = l
	}, function (e, t, r) {
		"use strict";

		function i(e, t) {
			var r = t.getBoundingClientRect();
			return [e.clientX - r.left, e.clientY - r.top]
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.getCoordsRelativeToElement = i, t.getCoords = function (e, t, r, n, o, s, a, c) {
			if (o) {
				var l = i(e, t);
				if (l) return l[0] = Math.ceil((l[0] + (c ? s / 2 : 0)) / s), l[1] = Math.ceil(l[1] / a), l[0] = Math.min(Math.max(l[0], 1), r + (c ? 1 : 0)), l[1] = Math.min(Math.max(l[1], 1), n), l
			}
		}, t.getRawByteCoords = function (e) {
			if (e) return {
				x: e[0] + 32,
				y: e[1] + 32
			}
		}
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
			function e(e) {
				this._renderCallback = e
			}
			return e.prototype.dispose = function () {
				this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0)
			}, e.prototype.refresh = function (e, t, r) {
				var i = this;
				this._rowCount = r, e = void 0 !== e ? e : 0, t = void 0 !== t ? t : this._rowCount - 1, this._rowStart = void 0 !== this._rowStart ? Math.min(this._rowStart, e) : e, this._rowEnd = void 0 !== this._rowEnd ? Math.max(this._rowEnd, t) : t, this._animationFrame || (this._animationFrame = window.requestAnimationFrame(function () {
					return i._innerRefresh()
				}))
			}, e.prototype._innerRefresh = function () {
				void 0 !== this._rowStart && void 0 !== this._rowEnd && void 0 !== this._rowCount && (this._rowStart = Math.max(this._rowStart, 0), this._rowEnd = Math.min(this._rowEnd, this._rowCount - 1), this._renderCallback(this._rowStart, this._rowEnd), this._rowStart = void 0, this._rowEnd = void 0, this._animationFrame = void 0)
			}, e
		}();
		t.RenderDebouncer = i
	}, function (e, t, r) {
		"use strict";
		var i, n = this && this.__extends || (i = function (e, t) {
			return (i = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (e, t) {
					e.__proto__ = t
				} || function (e, t) {
					for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
				})(e, t)
		}, function (e, t) {
			function r() {
				this.constructor = e
			}
			i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
		});
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = function (e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t._currentDevicePixelRatio = window.devicePixelRatio, t
			}
			return n(t, e), t.prototype.setListener = function (e) {
				var t = this;
				this._listener && this.clearListener(), this._listener = e, this._outerListener = function () {
					t._listener && (t._listener(window.devicePixelRatio, t._currentDevicePixelRatio), t._updateDpr())
				}, this._updateDpr()
			}, t.prototype.dispose = function () {
				e.prototype.dispose.call(this), this.clearListener()
			}, t.prototype._updateDpr = function () {
				this._resolutionMediaMatchList && this._outerListener && (this._resolutionMediaMatchList.removeListener(this._outerListener), this._currentDevicePixelRatio = window.devicePixelRatio, this._resolutionMediaMatchList = window.matchMedia("screen and (resolution: " + window.devicePixelRatio + "dppx)"), this._resolutionMediaMatchList.addListener(this._outerListener))
			}, t.prototype.clearListener = function () {
				this._resolutionMediaMatchList && this._listener && this._outerListener && (this._resolutionMediaMatchList.removeListener(this._outerListener), this._resolutionMediaMatchList = void 0, this._listener = void 0, this._outerListener = void 0)
			}, t
		}(r(2).Disposable);
		t.ScreenDprMonitor = o
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.clone = function e(t, r) {
			if (void 0 === r && (r = 5), "object" != typeof t) return t;
			var i = Array.isArray(t) ? [] : {};
			for (var n in t) i[n] = r <= 1 ? t[n] : t[n] ? e(t[n], r - 1) : t[n];
			return i
		}
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(34),
			n = r(17),
			o = r(78),
			s = function () {
				function e(e) {
					this._core = new i.Terminal(e), this._addonManager = new o.AddonManager
				}
				return Object.defineProperty(e.prototype, "onCursorMove", {
					get: function () {
						return this._core.onCursorMove
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onLineFeed", {
					get: function () {
						return this._core.onLineFeed
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onSelectionChange", {
					get: function () {
						return this._core.onSelectionChange
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onData", {
					get: function () {
						return this._core.onData
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onBinary", {
					get: function () {
						return this._core.onBinary
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onTitleChange", {
					get: function () {
						return this._core.onTitleChange
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onScroll", {
					get: function () {
						return this._core.onScroll
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onKey", {
					get: function () {
						return this._core.onKey
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onRender", {
					get: function () {
						return this._core.onRender
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onResize", {
					get: function () {
						return this._core.onResize
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "element", {
					get: function () {
						return this._core.element
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "parser", {
					get: function () {
						return this._parser || (this._parser = new h(this._core)), this._parser
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "textarea", {
					get: function () {
						return this._core.textarea
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "rows", {
					get: function () {
						return this._core.rows
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "cols", {
					get: function () {
						return this._core.cols
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "buffer", {
					get: function () {
						return new a(this._core.buffer)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "markers", {
					get: function () {
						return this._core.markers
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.blur = function () {
					this._core.blur()
				}, e.prototype.focus = function () {
					this._core.focus()
				}, e.prototype.resize = function (e, t) {
					this._verifyIntegers(e, t), this._core.resize(e, t)
				}, e.prototype.open = function (e) {
					this._core.open(e)
				}, e.prototype.attachCustomKeyEventHandler = function (e) {
					this._core.attachCustomKeyEventHandler(e)
				}, e.prototype.registerLinkMatcher = function (e, t, r) {
					return this._core.registerLinkMatcher(e, t, r)
				}, e.prototype.deregisterLinkMatcher = function (e) {
					this._core.deregisterLinkMatcher(e)
				}, e.prototype.registerCharacterJoiner = function (e) {
					return this._core.registerCharacterJoiner(e)
				}, e.prototype.deregisterCharacterJoiner = function (e) {
					this._core.deregisterCharacterJoiner(e)
				}, e.prototype.addMarker = function (e) {
					return this._verifyIntegers(e), this._core.addMarker(e)
				}, e.prototype.hasSelection = function () {
					return this._core.hasSelection()
				}, e.prototype.select = function (e, t, r) {
					this._verifyIntegers(e, t, r), this._core.select(e, t, r)
				}, e.prototype.getSelection = function () {
					return this._core.getSelection()
				}, e.prototype.getSelectionPosition = function () {
					return this._core.getSelectionPosition()
				}, e.prototype.clearSelection = function () {
					this._core.clearSelection()
				}, e.prototype.selectAll = function () {
					this._core.selectAll()
				}, e.prototype.selectLines = function (e, t) {
					this._verifyIntegers(e, t), this._core.selectLines(e, t)
				}, e.prototype.dispose = function () {
					this._addonManager.dispose(), this._core.dispose()
				}, e.prototype.scrollLines = function (e) {
					this._verifyIntegers(e), this._core.scrollLines(e)
				}, e.prototype.scrollPages = function (e) {
					this._verifyIntegers(e), this._core.scrollPages(e)
				}, e.prototype.scrollToTop = function () {
					this._core.scrollToTop()
				}, e.prototype.scrollToBottom = function () {
					this._core.scrollToBottom()
				}, e.prototype.scrollToLine = function (e) {
					this._verifyIntegers(e), this._core.scrollToLine(e)
				}, e.prototype.clear = function () {
					this._core.clear()
				}, e.prototype.write = function (e, t) {
					this._core.write(e, t)
				}, e.prototype.writeUtf8 = function (e, t) {
					this._core.write(e, t)
				}, e.prototype.writeln = function (e, t) {
					this._core.write(e), this._core.write("\r\n", t)
				}, e.prototype.paste = function (e) {
					this._core.paste(e)
				}, e.prototype.getOption = function (e) {
					return this._core.optionsService.getOption(e)
				}, e.prototype.setOption = function (e, t) {
					this._core.optionsService.setOption(e, t)
				}, e.prototype.refresh = function (e, t) {
					this._verifyIntegers(e, t), this._core.refresh(e, t)
				}, e.prototype.reset = function () {
					this._core.reset()
				}, e.prototype.loadAddon = function (e) {
					return this._addonManager.loadAddon(this, e)
				}, Object.defineProperty(e, "strings", {
					get: function () {
						return n
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype._verifyIntegers = function () {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					e.forEach(function (e) {
						if (e === 1 / 0 || isNaN(e) || e % 1 != 0) throw new Error("This API only accepts integers")
					})
				}, e
			}();
		t.Terminal = s;
		var a = function () {
				function e(e) {
					this._buffer = e
				}
				return Object.defineProperty(e.prototype, "cursorY", {
					get: function () {
						return this._buffer.y
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "cursorX", {
					get: function () {
						return this._buffer.x
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "viewportY", {
					get: function () {
						return this._buffer.ydisp
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "baseY", {
					get: function () {
						return this._buffer.ybase
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "length", {
					get: function () {
						return this._buffer.lines.length
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.getLine = function (e) {
					var t = this._buffer.lines.get(e);
					if (t) return new c(t)
				}, e
			}(),
			c = function () {
				function e(e) {
					this._line = e
				}
				return Object.defineProperty(e.prototype, "isWrapped", {
					get: function () {
						return this._line.isWrapped
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.getCell = function (e) {
					if (!(e < 0 || e >= this._line.length)) return new l(this._line, e)
				}, e.prototype.translateToString = function (e, t, r) {
					return this._line.translateToString(e, t, r)
				}, e
			}(),
			l = function () {
				function e(e, t) {
					this._line = e, this._x = t
				}
				return Object.defineProperty(e.prototype, "char", {
					get: function () {
						return this._line.getString(this._x)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "width", {
					get: function () {
						return this._line.getWidth(this._x)
					},
					enumerable: !0,
					configurable: !0
				}), e
			}(),
			h = function () {
				function e(e) {
					this._core = e
				}
				return e.prototype.addCsiHandler = function (e, t) {
					return this._core.addCsiHandler(e, function (e) {
						return t(e.toArray())
					})
				}, e.prototype.addDcsHandler = function (e, t) {
					return this._core.addDcsHandler(e, function (e, r) {
						return t(e, r.toArray())
					})
				}, e.prototype.addEscHandler = function (e, t) {
					return this._core.addEscHandler(e, t)
				}, e.prototype.addOscHandler = function (e, t) {
					return this._core.addOscHandler(e, t)
				}, e
			}()
	}, function (e, t, r) {
		"use strict";
		var i, n = this && this.__extends || (i = function (e, t) {
			return (i = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (e, t) {
					e.__proto__ = t
				} || function (e, t) {
					for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
				})(e, t)
		}, function (e, t) {
			function r() {
				this.constructor = e
			}
			i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
		});
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(35),
			s = r(36),
			a = r(37),
			c = r(12),
			l = r(38),
			h = r(40),
			u = r(50),
			f = r(51),
			_ = r(11),
			d = r(7),
			p = r(17),
			v = r(54),
			g = r(55),
			y = r(56),
			b = r(57),
			m = r(59),
			C = r(1),
			S = r(16),
			w = r(60),
			E = r(26),
			L = r(61),
			A = r(0),
			R = r(62),
			x = r(4),
			k = r(63),
			D = r(64),
			T = r(2),
			M = r(70),
			O = r(71),
			P = r(72),
			H = r(73),
			I = r(74),
			B = r(75),
			F = r(76),
			j = r(77),
			q = "undefined" != typeof window ? window.document : null,
			W = function (e) {
				function t(t) {
					void 0 === t && (t = {});
					var r = e.call(this) || this;
					return r.browser = _, r.mouseEvents = 0, r._keyDownHandled = !1, r._blankLine = null, r._onCursorMove = new C.EventEmitter, r._onData = new C.EventEmitter, r._onBinary = new C.EventEmitter, r._onKey = new C.EventEmitter, r._onLineFeed = new C.EventEmitter, r._onRender = new C.EventEmitter, r._onResize = new C.EventEmitter, r._onScroll = new C.EventEmitter, r._onSelectionChange = new C.EventEmitter, r._onTitleChange = new C.EventEmitter, r._onFocus = new C.EventEmitter, r._onBlur = new C.EventEmitter, r.onA11yCharEmitter = new C.EventEmitter, r.onA11yTabEmitter = new C.EventEmitter, r._instantiationService = new I.InstantiationService, r.optionsService = new R.OptionsService(t), r._instantiationService.setService(A.IOptionsService, r.optionsService), r._bufferService = r._instantiationService.createInstance(D.BufferService), r._instantiationService.setService(A.IBufferService, r._bufferService), r._logService = r._instantiationService.createInstance(P.LogService), r._instantiationService.setService(A.ILogService, r._logService), r._coreService = r._instantiationService.createInstance(O.CoreService, function () {
						return r.scrollToBottom()
					}), r._instantiationService.setService(A.ICoreService, r._coreService), r._coreService.onData(function (e) {
						return r._onData.fire(e)
					}), r._coreService.onBinary(function (e) {
						return r._onBinary.fire(e)
					}), r._coreMouseService = r._instantiationService.createInstance(B.CoreMouseService), r._instantiationService.setService(A.ICoreMouseService, r._coreMouseService), r._dirtyRowService = r._instantiationService.createInstance(H.DirtyRowService), r._instantiationService.setService(A.IDirtyRowService, r._dirtyRowService), r._setupOptionsListeners(), r._setup(), r._writeBuffer = new F.WriteBuffer(function (e) {
						return r._inputHandler.parse(e)
					}), r
				}
				return n(t, e), Object.defineProperty(t.prototype, "options", {
					get: function () {
						return this.optionsService.options
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "cols", {
					get: function () {
						return this._bufferService.cols
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "rows", {
					get: function () {
						return this._bufferService.rows
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "onCursorMove", {
					get: function () {
						return this._onCursorMove.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "onData", {
					get: function () {
						return this._onData.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "onBinary", {
					get: function () {
						return this._onBinary.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "onKey", {
					get: function () {
						return this._onKey.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "onLineFeed", {
					get: function () {
						return this._onLineFeed.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "onRender", {
					get: function () {
						return this._onRender.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "onResize", {
					get: function () {
						return this._onResize.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "onScroll", {
					get: function () {
						return this._onScroll.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "onSelectionChange", {
					get: function () {
						return this._onSelectionChange.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "onTitleChange", {
					get: function () {
						return this._onTitleChange.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "onFocus", {
					get: function () {
						return this._onFocus.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "onBlur", {
					get: function () {
						return this._onBlur.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "onA11yChar", {
					get: function () {
						return this.onA11yCharEmitter.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "onA11yTab", {
					get: function () {
						return this.onA11yTabEmitter.event
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.dispose = function () {
					var t, r, i, n;
					this._isDisposed || (e.prototype.dispose.call(this), null === (t = this._windowsMode) || void 0 === t || t.dispose(), this._windowsMode = void 0, null === (r = this._renderService) || void 0 === r || r.dispose(), this._customKeyEventHandler = null, this.write = function () {}, null === (n = null === (i = this.element) || void 0 === i ? void 0 : i.parentNode) || void 0 === n || n.removeChild(this.element))
				}, t.prototype._setup = function () {
					var e = this;
					this._parent = q ? q.body : null, this._customKeyEventHandler = null, this.applicationKeypad = !1, this.originMode = !1, this.insertMode = !1, this.wraparoundMode = !0, this.bracketedPasteMode = !1, this.charset = null, this.gcharset = null, this.glevel = 0, this.charsets = [null], this.curAttrData = S.DEFAULT_ATTR_DATA.clone(), this._eraseAttrData = S.DEFAULT_ATTR_DATA.clone(), this.params = [], this.currentParam = 0, this._userScrolling = !1, this._inputHandler = new l.InputHandler(this, this._bufferService, this._coreService, this._dirtyRowService, this._logService, this.optionsService, this._coreMouseService), this._inputHandler.onCursorMove(function () {
						return e._onCursorMove.fire()
					}), this._inputHandler.onLineFeed(function () {
						return e._onLineFeed.fire()
					}), this.register(this._inputHandler), this.linkifier = this.linkifier || new u.Linkifier(this._bufferService, this._logService), this.options.windowsMode && this._enableWindowsMode()
				}, t.prototype._enableWindowsMode = function () {
					this._windowsMode || (this._windowsMode = this.onLineFeed(w.handleWindowsModeLineFeed.bind(null, this._bufferService)))
				}, Object.defineProperty(t.prototype, "buffer", {
					get: function () {
						return this.buffers.active
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "buffers", {
					get: function () {
						return this._bufferService.buffers
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.eraseAttrData = function () {
					return this._eraseAttrData.bg &= -67108864, this._eraseAttrData.bg |= 67108863 & this.curAttrData.bg, this._eraseAttrData
				}, t.prototype.focus = function () {
					this.textarea && this.textarea.focus({
						preventScroll: !0
					})
				}, t.prototype._setupOptionsListeners = function () {
					var e = this;
					this.optionsService.onOptionChange(function (t) {
						var r, i, n, o, s;
						switch (t) {
							case "fontFamily":
							case "fontSize":
								null === (r = e._renderService) || void 0 === r || r.clear(), null === (i = e._charSizeService) || void 0 === i || i.measure();
								break;
							case "drawBoldTextInBrightColors":
							case "letterSpacing":
							case "lineHeight":
							case "fontWeight":
							case "fontWeightBold":
							case "minimumContrastRatio":
								e._renderService && (e._renderService.clear(), e._renderService.onResize(e.cols, e.rows), e.refresh(0, e.rows - 1));
								break;
							case "rendererType":
								e._renderService && (e._renderService.setRenderer(e._createRenderer()), e._renderService.onResize(e.cols, e.rows));
								break;
							case "scrollback":
								e.buffers.resize(e.cols, e.rows), null === (n = e.viewport) || void 0 === n || n.syncScrollArea();
								break;
							case "screenReaderMode":
								e.optionsService.options.screenReaderMode ? !e._accessibilityManager && e._renderService && (e._accessibilityManager = new y.AccessibilityManager(e, e._renderService)) : (null === (o = e._accessibilityManager) || void 0 === o || o.dispose(), e._accessibilityManager = null);
								break;
							case "tabStopWidth":
								e.buffers.setupTabStops();
								break;
							case "theme":
								e._setTheme(e.optionsService.options.theme);
								break;
							case "windowsMode":
								e.optionsService.options.windowsMode ? e._enableWindowsMode() : (null === (s = e._windowsMode) || void 0 === s || s.dispose(), e._windowsMode = void 0)
						}
					})
				}, t.prototype._onTextAreaFocus = function (e) {
					this.sendFocus && this._coreService.triggerDataEvent(c.C0.ESC + "[I"), this.updateCursorStyle(e), this.element.classList.add("focus"), this.showCursor(), this._onFocus.fire()
				}, t.prototype.blur = function () {
					return this.textarea.blur()
				}, t.prototype._onTextAreaBlur = function () {
					this.textarea.value = "", this.refresh(this.buffer.y, this.buffer.y), this.sendFocus && this._coreService.triggerDataEvent(c.C0.ESC + "[O"), this.element.classList.remove("focus"), this._onBlur.fire()
				}, t.prototype._initGlobal = function () {
					var e = this;
					this._bindKeys(), this.register(d.addDisposableDomListener(this.element, "copy", function (t) {
						e.hasSelection() && a.copyHandler(t, e._selectionService)
					}));
					var t = function (t) {
						return a.handlePasteEvent(t, e.textarea, e.bracketedPasteMode, e._coreService)
					};
					this.register(d.addDisposableDomListener(this.textarea, "paste", t)), this.register(d.addDisposableDomListener(this.element, "paste", t)), _.isFirefox ? this.register(d.addDisposableDomListener(this.element, "mousedown", function (t) {
						2 === t.button && a.rightClickHandler(t, e.textarea, e.screenElement, e._selectionService, e.options.rightClickSelectsWord)
					})) : this.register(d.addDisposableDomListener(this.element, "contextmenu", function (t) {
						a.rightClickHandler(t, e.textarea, e.screenElement, e._selectionService, e.options.rightClickSelectsWord)
					})), _.isLinux && this.register(d.addDisposableDomListener(this.element, "auxclick", function (t) {
						1 === t.button && a.moveTextAreaUnderMouseCursor(t, e.textarea, e.screenElement)
					}))
				}, t.prototype._bindKeys = function () {
					var e = this;
					this.register(d.addDisposableDomListener(this.textarea, "keyup", function (t) {
						return e._keyUp(t)
					}, !0)), this.register(d.addDisposableDomListener(this.textarea, "keydown", function (t) {
						return e._keyDown(t)
					}, !0)), this.register(d.addDisposableDomListener(this.textarea, "keypress", function (t) {
						return e._keyPress(t)
					}, !0)), this.register(d.addDisposableDomListener(this.textarea, "compositionstart", function () {
						return e._compositionHelper.compositionstart()
					})), this.register(d.addDisposableDomListener(this.textarea, "compositionupdate", function (t) {
						return e._compositionHelper.compositionupdate(t)
					})), this.register(d.addDisposableDomListener(this.textarea, "compositionend", function () {
						return e._compositionHelper.compositionend()
					})), this.register(this.onRender(function () {
						return e._compositionHelper.updateCompositionElements()
					})), this.register(this.onRender(function (t) {
						return e._queueLinkification(t.start, t.end)
					}))
				}, t.prototype.open = function (e) {
					var t = this;
					if (this._parent = e || this._parent, !this._parent) throw new Error("Terminal requires a parent element.");
					q.body.contains(e) || this._logService.warn("Terminal.open was called on an element that was not attached to the DOM"), this._document = this._parent.ownerDocument, this.element = this._document.createElement("div"), this.element.dir = "ltr", this.element.classList.add("terminal"), this.element.classList.add("xterm"), this.element.setAttribute("tabindex", "0"), this._parent.appendChild(this.element);
					var r = q.createDocumentFragment();
					this._viewportElement = q.createElement("div"), this._viewportElement.classList.add("xterm-viewport"), r.appendChild(this._viewportElement), this._viewportScrollArea = q.createElement("div"), this._viewportScrollArea.classList.add("xterm-scroll-area"), this._viewportElement.appendChild(this._viewportScrollArea), this.screenElement = q.createElement("div"), this.screenElement.classList.add("xterm-screen"), this._helperContainer = q.createElement("div"), this._helperContainer.classList.add("xterm-helpers"), this.screenElement.appendChild(this._helperContainer), r.appendChild(this.screenElement), this.textarea = q.createElement("textarea"), this.textarea.classList.add("xterm-helper-textarea"), this.textarea.setAttribute("aria-label", p.promptLabel), this.textarea.setAttribute("aria-multiline", "false"), this.textarea.setAttribute("autocorrect", "off"), this.textarea.setAttribute("autocapitalize", "off"), this.textarea.setAttribute("spellcheck", "false"), this.textarea.tabIndex = 0, this.register(d.addDisposableDomListener(this.textarea, "focus", function (e) {
						return t._onTextAreaFocus(e)
					})), this.register(d.addDisposableDomListener(this.textarea, "blur", function () {
						return t._onTextAreaBlur()
					})), this._helperContainer.appendChild(this.textarea);
					var i = this._instantiationService.createInstance(j.CoreBrowserService, this.textarea);
					this._instantiationService.setService(x.ICoreBrowserService, i), this._charSizeService = this._instantiationService.createInstance(k.CharSizeService, this._document, this._helperContainer), this._instantiationService.setService(x.ICharSizeService, this._charSizeService), this._compositionView = q.createElement("div"), this._compositionView.classList.add("composition-view"), this._compositionHelper = this._instantiationService.createInstance(o.CompositionHelper, this.textarea, this._compositionView), this._helperContainer.appendChild(this._compositionView), this.element.appendChild(r), this._theme = this.options.theme || this._theme, this.options.theme = void 0, this._colorManager = new E.ColorManager(q, this.options.allowTransparency), this.optionsService.onOptionChange(function (e) {
						return t._colorManager.onOptionsChange(e)
					}), this._colorManager.setTheme(this._theme);
					var n = this._createRenderer();
					this._renderService = this._instantiationService.createInstance(L.RenderService, n, this.rows, this.screenElement), this._instantiationService.setService(x.IRenderService, this._renderService), this._renderService.onRender(function (e) {
						return t._onRender.fire(e)
					}), this.onResize(function (e) {
						return t._renderService.resize(e.cols, e.rows)
					}), this._soundService = this._instantiationService.createInstance(v.SoundService), this._instantiationService.setService(x.ISoundService, this._soundService), this._mouseService = this._instantiationService.createInstance(M.MouseService), this._instantiationService.setService(x.IMouseService, this._mouseService), this.viewport = this._instantiationService.createInstance(s.Viewport, function (e, r) {
						return t.scrollLines(e, r)
					}, this._viewportElement, this._viewportScrollArea), this.viewport.onThemeChange(this._colorManager.colors), this.register(this.viewport), this.register(this.onCursorMove(function () {
						return t._renderService.onCursorMove()
					})), this.register(this.onResize(function () {
						return t._renderService.onResize(t.cols, t.rows)
					})), this.register(this.onBlur(function () {
						return t._renderService.onBlur()
					})), this.register(this.onFocus(function () {
						return t._renderService.onFocus()
					})), this.register(this._renderService.onDimensionsChange(function () {
						return t.viewport.syncScrollArea()
					})), this._selectionService = this._instantiationService.createInstance(f.SelectionService, function (e, r) {
						return t.scrollLines(e, r)
					}, this.element, this.screenElement), this._instantiationService.setService(x.ISelectionService, this._selectionService), this.register(this._selectionService.onSelectionChange(function () {
						return t._onSelectionChange.fire()
					})), this.register(this._selectionService.onRedrawRequest(function (e) {
						return t._renderService.onSelectionChanged(e.start, e.end, e.columnSelectMode)
					})), this.register(this._selectionService.onLinuxMouseSelection(function (e) {
						t.textarea.value = e, t.textarea.focus(), t.textarea.select()
					})), this.register(this.onScroll(function () {
						t.viewport.syncScrollArea(), t._selectionService.refresh()
					})), this.register(d.addDisposableDomListener(this._viewportElement, "scroll", function () {
						return t._selectionService.refresh()
					})), this._mouseZoneManager = this._instantiationService.createInstance(g.MouseZoneManager, this.element, this.screenElement), this.register(this._mouseZoneManager), this.register(this.onScroll(function () {
						return t._mouseZoneManager.clearAll()
					})), this.linkifier.attachToDom(this.element, this._mouseZoneManager), this.register(d.addDisposableDomListener(this.element, "mousedown", function (e) {
						return t._selectionService.onMouseDown(e)
					})), this.mouseEvents ? (this._selectionService.disable(), this.element.classList.add("enable-mouse-events")) : this._selectionService.enable(), this.options.screenReaderMode && (this._accessibilityManager = new y.AccessibilityManager(this, this._renderService)), this._charSizeService.measure(), this.refresh(0, this.rows - 1), this._initGlobal(), this.bindMouse()
				}, t.prototype._createRenderer = function () {
					switch (this.options.rendererType) {
						case "canvas":
							return this._instantiationService.createInstance(h.Renderer, this._colorManager.colors, this.screenElement, this.linkifier);
						case "dom":
							return this._instantiationService.createInstance(b.DomRenderer, this._colorManager.colors, this.element, this.screenElement, this._viewportElement, this.linkifier);
						default:
							throw new Error('Unrecognized rendererType "' + this.options.rendererType + '"')
					}
				}, t.prototype._setTheme = function (e) {
					var t, r, i;
					this._theme = e, null === (t = this._colorManager) || void 0 === t || t.setTheme(e), null === (r = this._renderService) || void 0 === r || r.setColors(this._colorManager.colors), null === (i = this.viewport) || void 0 === i || i.onThemeChange(this._colorManager.colors)
				}, t.prototype.bindMouse = function () {
					var e = this,
						t = this,
						r = this.element;

					function i(e) {
						var r, i, n;
						if (!(r = t._mouseService.getRawByteCoords(e, t.screenElement, t.cols, t.rows))) return !1;
						switch (e.overrideType || e.type) {
							case "mousemove":
								n = 32, void 0 === e.buttons ? (i = 3, void 0 !== e.button && (i = e.button < 3 ? e.button : 3)) : i = 1 & e.buttons ? 0 : 4 & e.buttons ? 1 : 2 & e.buttons ? 2 : 3;
								break;
							case "mouseup":
								n = 0, i = e.button < 3 ? e.button : 3;
								break;
							case "mousedown":
								n = 1, i = e.button < 3 ? e.button : 3;
								break;
							case "wheel":
								0 !== e.deltaY && (n = e.deltaY < 0 ? 0 : 1), i = 4;
								break;
							default:
								return !1
						}
						return !(void 0 === n || void 0 === i || i > 4) && t._coreMouseService.triggerMouseEvent({
							col: r.x - 33,
							row: r.y - 33,
							button: i,
							action: n,
							ctrl: e.ctrlKey,
							alt: e.altKey,
							shift: e.shiftKey
						})
					}
					var n = {
							mouseup: null,
							wheel: null,
							mousedrag: null,
							mousemove: null
						},
						o = function (t) {
							return i(t), t.buttons || (e._document.removeEventListener("mouseup", n.mouseup), n.mousedrag && e._document.removeEventListener("mousemove", n.mousedrag)), e.cancel(t)
						},
						s = function (t) {
							return i(t), t.preventDefault(), e.cancel(t)
						},
						a = function (e) {
							e.buttons && i(e)
						},
						l = function (e) {
							e.buttons || i(e)
						};
					this._coreMouseService.onProtocolChange(function (t) {
						e.mouseEvents = t, t ? ("debug" === e.optionsService.options.logLevel && e._logService.debug("Binding to mouse events:", e._coreMouseService.explainEvents(t)), e.element.classList.add("enable-mouse-events"), e._selectionService.disable()) : (e._logService.debug("Unbinding from mouse events."), e.element.classList.remove("enable-mouse-events"), e._selectionService.enable()), 8 & t ? n.mousemove || (r.addEventListener("mousemove", l), n.mousemove = l) : (r.removeEventListener("mousemove", n.mousemove), n.mousemove = null), 16 & t ? n.wheel || (r.addEventListener("wheel", s), n.wheel = s) : (r.removeEventListener("wheel", n.wheel), n.wheel = null), 2 & t ? n.mouseup || (n.mouseup = o) : (e._document.removeEventListener("mouseup", n.mouseup), n.mouseup = null), 4 & t ? n.mousedrag || (n.mousedrag = a) : (e._document.removeEventListener("mousemove", n.mousedrag), n.mousedrag = null)
					}), this._coreMouseService.activeProtocol = this._coreMouseService.activeProtocol, this.register(d.addDisposableDomListener(r, "mousedown", function (t) {
						if (t.preventDefault(), e.focus(), e.mouseEvents && !e._selectionService.shouldForceSelection(t)) return i(t), n.mouseup && e._document.addEventListener("mouseup", n.mouseup), n.mousedrag && e._document.addEventListener("mousemove", n.mousedrag), e.cancel(t)
					})), this.register(d.addDisposableDomListener(r, "wheel", function (t) {
						if (n.wheel);
						else if (!e.buffer.hasScrollback) {
							var r = e.viewport.getLinesScrolled(t);
							if (0 === r) return;
							for (var i = c.C0.ESC + (e._coreService.decPrivateModes.applicationCursorKeys ? "O" : "[") + (t.deltaY < 0 ? "A" : "B"), o = "", s = 0; s < Math.abs(r); s++) o += i;
							e._coreService.triggerDataEvent(o, !0)
						}
					})), this.register(d.addDisposableDomListener(r, "wheel", function (t) {
						if (!n.wheel) return e.viewport.onWheel(t) ? void 0 : e.cancel(t)
					})), this.register(d.addDisposableDomListener(r, "touchstart", function (t) {
						if (!e.mouseEvents) return e.viewport.onTouchStart(t), e.cancel(t)
					})), this.register(d.addDisposableDomListener(r, "touchmove", function (t) {
						if (!e.mouseEvents) return e.viewport.onTouchMove(t) ? void 0 : e.cancel(t)
					}))
				}, t.prototype.refresh = function (e, t) {
					var r;
					null === (r = this._renderService) || void 0 === r || r.refreshRows(e, t)
				}, t.prototype._queueLinkification = function (e, t) {
					var r;
					null === (r = this.linkifier) || void 0 === r || r.linkifyRows(e, t)
				}, t.prototype.updateCursorStyle = function (e) {
					this._selectionService && this._selectionService.shouldColumnSelect(e) ? this.element.classList.add("column-select") : this.element.classList.remove("column-select")
				}, t.prototype.showCursor = function () {
					this._coreService.isCursorInitialized || (this._coreService.isCursorInitialized = !0, this.refresh(this.buffer.y, this.buffer.y))
				}, t.prototype.scroll = function (e) {
					var t;
					void 0 === e && (e = !1), t = this._blankLine;
					var r = this.eraseAttrData();
					t && t.length === this.cols && t.getFg(0) === r.fg && t.getBg(0) === r.bg || (t = this.buffer.getBlankLine(r, e), this._blankLine = t), t.isWrapped = e;
					var i = this.buffer.ybase + this.buffer.scrollTop,
						n = this.buffer.ybase + this.buffer.scrollBottom;
					if (0 === this.buffer.scrollTop) {
						var o = this.buffer.lines.isFull;
						n === this.buffer.lines.length - 1 ? o ? this.buffer.lines.recycle().copyFrom(t) : this.buffer.lines.push(t.clone()) : this.buffer.lines.splice(n + 1, 0, t.clone()), o ? this._userScrolling && (this.buffer.ydisp = Math.max(this.buffer.ydisp - 1, 0)) : (this.buffer.ybase++, this._userScrolling || this.buffer.ydisp++)
					} else {
						var s = n - i + 1;
						this.buffer.lines.shiftElements(i + 1, s - 1, -1), this.buffer.lines.set(n, t.clone())
					}
					this._userScrolling || (this.buffer.ydisp = this.buffer.ybase), this._dirtyRowService.markRangeDirty(this.buffer.scrollTop, this.buffer.scrollBottom), this._onScroll.fire(this.buffer.ydisp)
				}, t.prototype.scrollLines = function (e, t) {
					if (e < 0) {
						if (0 === this.buffer.ydisp) return;
						this._userScrolling = !0
					} else e + this.buffer.ydisp >= this.buffer.ybase && (this._userScrolling = !1);
					var r = this.buffer.ydisp;
					this.buffer.ydisp = Math.max(Math.min(this.buffer.ydisp + e, this.buffer.ybase), 0), r !== this.buffer.ydisp && (t || this._onScroll.fire(this.buffer.ydisp), this.refresh(0, this.rows - 1))
				}, t.prototype.scrollPages = function (e) {
					this.scrollLines(e * (this.rows - 1))
				}, t.prototype.scrollToTop = function () {
					this.scrollLines(-this.buffer.ydisp)
				}, t.prototype.scrollToBottom = function () {
					this.scrollLines(this.buffer.ybase - this.buffer.ydisp)
				}, t.prototype.scrollToLine = function (e) {
					var t = e - this.buffer.ydisp;
					0 !== t && this.scrollLines(t)
				}, t.prototype.paste = function (e) {
					a.paste(e, this.textarea, this.bracketedPasteMode, this._coreService)
				}, t.prototype.attachCustomKeyEventHandler = function (e) {
					this._customKeyEventHandler = e
				}, t.prototype.addEscHandler = function (e, t) {
					return this._inputHandler.addEscHandler(e, t)
				}, t.prototype.addDcsHandler = function (e, t) {
					return this._inputHandler.addDcsHandler(e, t)
				}, t.prototype.addCsiHandler = function (e, t) {
					return this._inputHandler.addCsiHandler(e, t)
				}, t.prototype.addOscHandler = function (e, t) {
					return this._inputHandler.addOscHandler(e, t)
				}, t.prototype.registerLinkMatcher = function (e, t, r) {
					var i = this.linkifier.registerLinkMatcher(e, t, r);
					return this.refresh(0, this.rows - 1), i
				}, t.prototype.deregisterLinkMatcher = function (e) {
					this.linkifier.deregisterLinkMatcher(e) && this.refresh(0, this.rows - 1)
				}, t.prototype.registerCharacterJoiner = function (e) {
					var t = this._renderService.registerCharacterJoiner(e);
					return this.refresh(0, this.rows - 1), t
				}, t.prototype.deregisterCharacterJoiner = function (e) {
					this._renderService.deregisterCharacterJoiner(e) && this.refresh(0, this.rows - 1)
				}, Object.defineProperty(t.prototype, "markers", {
					get: function () {
						return this.buffer.markers
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.addMarker = function (e) {
					if (this.buffer === this.buffers.normal) return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + e)
				}, t.prototype.hasSelection = function () {
					return !!this._selectionService && this._selectionService.hasSelection
				}, t.prototype.select = function (e, t, r) {
					this._selectionService.setSelection(e, t, r)
				}, t.prototype.getSelection = function () {
					return this._selectionService ? this._selectionService.selectionText : ""
				}, t.prototype.getSelectionPosition = function () {
					if (this._selectionService.hasSelection) return {
						startColumn: this._selectionService.selectionStart[0],
						startRow: this._selectionService.selectionStart[1],
						endColumn: this._selectionService.selectionEnd[0],
						endRow: this._selectionService.selectionEnd[1]
					}
				}, t.prototype.clearSelection = function () {
					var e;
					null === (e = this._selectionService) || void 0 === e || e.clearSelection()
				}, t.prototype.selectAll = function () {
					var e;
					null === (e = this._selectionService) || void 0 === e || e.selectAll()
				}, t.prototype.selectLines = function (e, t) {
					var r;
					null === (r = this._selectionService) || void 0 === r || r.selectLines(e, t)
				}, t.prototype._keyDown = function (e) {
					if (this._keyDownHandled = !1, this._customKeyEventHandler && !1 === this._customKeyEventHandler(e)) return !1;
					if (!this._compositionHelper.keydown(e)) return this.buffer.ybase !== this.buffer.ydisp && this.scrollToBottom(), !1;
					var t = m.evaluateKeyboardEvent(e, this._coreService.decPrivateModes.applicationCursorKeys, this.browser.isMac, this.options.macOptionIsMeta);
					if (this.updateCursorStyle(e), 3 === t.type || 2 === t.type) {
						var r = this.rows - 1;
						return this.scrollLines(2 === t.type ? -r : r), this.cancel(e, !0)
					}
					return 1 === t.type && this.selectAll(), !!this._isThirdLevelShift(this.browser, e) || (t.cancel && this.cancel(e, !0), !t.key || (t.key !== c.C0.ETX && t.key !== c.C0.CR || (this.textarea.value = ""), this._onKey.fire({
						key: t.key,
						domEvent: e
					}), this.showCursor(), this._coreService.triggerDataEvent(t.key, !0), this.optionsService.options.screenReaderMode ? void(this._keyDownHandled = !0) : this.cancel(e, !0)))
				}, t.prototype._isThirdLevelShift = function (e, t) {
					var r = e.isMac && !this.options.macOptionIsMeta && t.altKey && !t.ctrlKey && !t.metaKey || e.isWindows && t.altKey && t.ctrlKey && !t.metaKey;
					return "keypress" === t.type ? r : r && (!t.keyCode || t.keyCode > 47)
				}, t.prototype.setgLevel = function (e) {
					this.glevel = e, this.charset = this.charsets[e]
				}, t.prototype.setgCharset = function (e, t) {
					this.charsets[e] = t, this.glevel === e && (this.charset = t)
				}, t.prototype._keyUp = function (e) {
					this._customKeyEventHandler && !1 === this._customKeyEventHandler(e) || (function (e) {
						return 16 === e.keyCode || 17 === e.keyCode || 18 === e.keyCode
					}(e) || this.focus(), this.updateCursorStyle(e))
				}, t.prototype._keyPress = function (e) {
					var t;
					if (this._keyDownHandled) return !1;
					if (this._customKeyEventHandler && !1 === this._customKeyEventHandler(e)) return !1;
					if (this.cancel(e), e.charCode) t = e.charCode;
					else if (null === e.which || void 0 === e.which) t = e.keyCode;
					else {
						if (0 === e.which || 0 === e.charCode) return !1;
						t = e.which
					}
					return !(!t || (e.altKey || e.ctrlKey || e.metaKey) && !this._isThirdLevelShift(this.browser, e)) && (t = String.fromCharCode(t), this._onKey.fire({
						key: t,
						domEvent: e
					}), this.showCursor(), this._coreService.triggerDataEvent(t, !0), !0)
				}, t.prototype.bell = function () {
					var e = this;
					this._soundBell() && this._soundService.playBellSound(), this._visualBell() && (this.element.classList.add("visual-bell-active"), clearTimeout(this._visualBellTimer), this._visualBellTimer = window.setTimeout(function () {
						e.element.classList.remove("visual-bell-active")
					}, 200))
				}, t.prototype.resize = function (e, t) {
					var r;
					isNaN(e) || isNaN(t) || (e !== this.cols || t !== this.rows ? (e < D.MINIMUM_COLS && (e = D.MINIMUM_COLS), t < D.MINIMUM_ROWS && (t = D.MINIMUM_ROWS), this.buffers.resize(e, t), this._bufferService.resize(e, t), this.buffers.setupTabStops(this.cols), null === (r = this._charSizeService) || void 0 === r || r.measure(), this.viewport.syncScrollArea(!0), this.refresh(0, this.rows - 1), this._onResize.fire({
						cols: e,
						rows: t
					})) : this._charSizeService && !this._charSizeService.hasValidSize && this._charSizeService.measure())
				}, t.prototype.clear = function () {
					if (0 !== this.buffer.ybase || 0 !== this.buffer.y) {
						this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)), this.buffer.lines.length = 1, this.buffer.ydisp = 0, this.buffer.ybase = 0, this.buffer.y = 0;
						for (var e = 1; e < this.rows; e++) this.buffer.lines.push(this.buffer.getBlankLine(S.DEFAULT_ATTR_DATA));
						this.refresh(0, this.rows - 1), this._onScroll.fire(this.buffer.ydisp)
					}
				}, t.prototype.is = function (e) {
					return 0 === (this.options.termName + "").indexOf(e)
				}, t.prototype.handleTitle = function (e) {
					this._onTitleChange.fire(e)
				}, t.prototype.reset = function () {
					var e, t;
					this.options.rows = this.rows, this.options.cols = this.cols;
					var r = this._customKeyEventHandler,
						i = this._inputHandler,
						n = this._userScrolling;
					this._setup(), this._bufferService.reset(), this._coreService.reset(), this._coreMouseService.reset(), null === (e = this._selectionService) || void 0 === e || e.reset(), this._customKeyEventHandler = r, this._inputHandler = i, this._userScrolling = n, this.refresh(0, this.rows - 1), null === (t = this.viewport) || void 0 === t || t.syncScrollArea()
				}, t.prototype.cancel = function (e, t) {
					if (this.options.cancelEvents || t) return e.preventDefault(), e.stopPropagation(), !1
				}, t.prototype._visualBell = function () {
					return !1
				}, t.prototype._soundBell = function () {
					return "sound" === this.options.bellStyle
				}, t.prototype.write = function (e, t) {
					this._writeBuffer.write(e, t)
				}, t.prototype.writeSync = function (e) {
					this._writeBuffer.writeSync(e)
				}, t
			}(T.Disposable);
		t.Terminal = W
	}, function (e, t, r) {
		"use strict";
		var i = this && this.__decorate || function (e, t, r, i) {
				var n, o = arguments.length,
					s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
				return o > 3 && s && Object.defineProperty(t, r, s), s
			},
			n = this && this.__param || function (e, t) {
				return function (r, i) {
					t(r, i, e)
				}
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(4),
			s = r(0),
			a = function () {
				function e(e, t, r, i, n, o) {
					this._textarea = e, this._compositionView = t, this._bufferService = r, this._optionsService = i, this._charSizeService = n, this._coreService = o, this._isComposing = !1, this._isSendingComposition = !1, this._compositionPosition = {
						start: 0,
						end: 0
					}
				}
				return e.prototype.compositionstart = function () {
					this._isComposing = !0, this._compositionPosition.start = this._textarea.value.length, this._compositionView.textContent = "", this._compositionView.classList.add("active")
				}, e.prototype.compositionupdate = function (e) {
					var t = this;
					this._compositionView.textContent = e.data, this.updateCompositionElements(), setTimeout(function () {
						t._compositionPosition.end = t._textarea.value.length
					}, 0)
				}, e.prototype.compositionend = function () {
					this._finalizeComposition(!0)
				}, e.prototype.keydown = function (e) {
					if (this._isComposing || this._isSendingComposition) {
						if (229 === e.keyCode) return !1;
						if (16 === e.keyCode || 17 === e.keyCode || 18 === e.keyCode) return !1;
						this._finalizeComposition(!1)
					}
					return 229 !== e.keyCode || (this._handleAnyTextareaChanges(), !1)
				}, e.prototype._finalizeComposition = function (e) {
					var t = this;
					if (this._compositionView.classList.remove("active"), this._isComposing = !1, this._clearTextareaPosition(), e) {
						var r = {
							start: this._compositionPosition.start,
							end: this._compositionPosition.end
						};
						this._isSendingComposition = !0, setTimeout(function () {
							if (t._isSendingComposition) {
								t._isSendingComposition = !1;
								var e = void 0;
								e = t._isComposing ? t._textarea.value.substring(r.start, r.end) : t._textarea.value.substring(r.start), t._coreService.triggerDataEvent(e, !0)
							}
						}, 0)
					} else {
						this._isSendingComposition = !1;
						var i = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
						this._coreService.triggerDataEvent(i, !0)
					}
				}, e.prototype._handleAnyTextareaChanges = function () {
					var e = this,
						t = this._textarea.value;
					setTimeout(function () {
						if (!e._isComposing) {
							var r = e._textarea.value.replace(t, "");
							r.length > 0 && e._coreService.triggerDataEvent(r, !0)
						}
					}, 0)
				}, e.prototype.updateCompositionElements = function (e) {
					var t = this;
					if (this._isComposing) {
						if (this._bufferService.buffer.isCursorInViewport) {
							var r = Math.ceil(this._charSizeService.height * this._optionsService.options.lineHeight),
								i = this._bufferService.buffer.y * r,
								n = this._bufferService.buffer.x * this._charSizeService.width;
							this._compositionView.style.left = n + "px", this._compositionView.style.top = i + "px", this._compositionView.style.height = r + "px", this._compositionView.style.lineHeight = r + "px", this._compositionView.style.fontFamily = this._optionsService.options.fontFamily, this._compositionView.style.fontSize = this._optionsService.options.fontSize + "px";
							var o = this._compositionView.getBoundingClientRect();
							this._textarea.style.left = n + "px", this._textarea.style.top = i + "px", this._textarea.style.width = o.width + "px", this._textarea.style.height = o.height + "px", this._textarea.style.lineHeight = o.height + "px"
						}
						e || setTimeout(function () {
							return t.updateCompositionElements(!0)
						}, 0)
					}
				}, e.prototype._clearTextareaPosition = function () {
					this._textarea.style.left = "", this._textarea.style.top = ""
				}, e = i([n(2, s.IBufferService), n(3, s.IOptionsService), n(4, o.ICharSizeService), n(5, s.ICoreService)], e)
			}();
		t.CompositionHelper = a
	}, function (e, t, r) {
		"use strict";
		var i, n = this && this.__extends || (i = function (e, t) {
				return (i = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function (e, t) {
						e.__proto__ = t
					} || function (e, t) {
						for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
					})(e, t)
			}, function (e, t) {
				function r() {
					this.constructor = e
				}
				i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
			}),
			o = this && this.__decorate || function (e, t, r, i) {
				var n, o = arguments.length,
					s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
				return o > 3 && s && Object.defineProperty(t, r, s), s
			},
			s = this && this.__param || function (e, t) {
				return function (r, i) {
					t(r, i, e)
				}
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = r(2),
			c = r(7),
			l = r(4),
			h = r(0),
			u = 15,
			f = function (e) {
				function t(t, r, i, n, o, s, a) {
					var l = e.call(this) || this;
					return l._scrollLines = t, l._viewportElement = r, l._scrollArea = i, l._bufferService = n, l._optionsService = o, l._charSizeService = s, l._renderService = a, l.scrollBarWidth = 0, l._currentRowHeight = 0, l._lastRecordedBufferLength = 0, l._lastRecordedViewportHeight = 0, l._lastRecordedBufferHeight = 0, l._lastTouchY = 0, l._lastScrollTop = 0, l._wheelPartialScroll = 0, l._refreshAnimationFrame = null, l._ignoreNextScrollEvent = !1, l.scrollBarWidth = l._viewportElement.offsetWidth - l._scrollArea.offsetWidth || u, l.register(c.addDisposableDomListener(l._viewportElement, "scroll", l._onScroll.bind(l))), setTimeout(function () {
						return l.syncScrollArea()
					}, 0), l
				}
				return n(t, e), t.prototype.onThemeChange = function (e) {
					this._viewportElement.style.backgroundColor = e.background.css
				}, t.prototype._refresh = function (e) {
					var t = this;
					if (e) return this._innerRefresh(), void(null !== this._refreshAnimationFrame && cancelAnimationFrame(this._refreshAnimationFrame));
					null === this._refreshAnimationFrame && (this._refreshAnimationFrame = requestAnimationFrame(function () {
						return t._innerRefresh()
					}))
				}, t.prototype._innerRefresh = function () {
					if (this._charSizeService.height > 0) {
						this._currentRowHeight = this._renderService.dimensions.scaledCellHeight / window.devicePixelRatio, this._lastRecordedViewportHeight = this._viewportElement.offsetHeight;
						var e = Math.round(this._currentRowHeight * this._lastRecordedBufferLength) + (this._lastRecordedViewportHeight - this._renderService.dimensions.canvasHeight);
						this._lastRecordedBufferHeight !== e && (this._lastRecordedBufferHeight = e, this._scrollArea.style.height = this._lastRecordedBufferHeight + "px")
					}
					var t = this._bufferService.buffer.ydisp * this._currentRowHeight;
					this._viewportElement.scrollTop !== t && (this._ignoreNextScrollEvent = !0, this._viewportElement.scrollTop = t), this._refreshAnimationFrame = null
				}, t.prototype.syncScrollArea = function (e) {
					if (void 0 === e && (e = !1), this._lastRecordedBufferLength !== this._bufferService.buffer.lines.length) return this._lastRecordedBufferLength = this._bufferService.buffer.lines.length, void this._refresh(e);
					if (this._lastRecordedViewportHeight === this._renderService.dimensions.canvasHeight) {
						var t = this._bufferService.buffer.ydisp * this._currentRowHeight;
						this._lastScrollTop === t && this._lastScrollTop === this._viewportElement.scrollTop && this._renderService.dimensions.scaledCellHeight / window.devicePixelRatio === this._currentRowHeight || this._refresh(e)
					} else this._refresh(e)
				}, t.prototype._onScroll = function (e) {
					if (this._lastScrollTop = this._viewportElement.scrollTop, this._viewportElement.offsetParent)
						if (this._ignoreNextScrollEvent) this._ignoreNextScrollEvent = !1;
						else {
							var t = Math.round(this._lastScrollTop / this._currentRowHeight) - this._bufferService.buffer.ydisp;
							this._scrollLines(t, !0)
						}
				}, t.prototype._bubbleScroll = function (e, t) {
					var r = this._viewportElement.scrollTop + this._lastRecordedViewportHeight;
					return !(t < 0 && 0 !== this._viewportElement.scrollTop || t > 0 && r < this._lastRecordedBufferHeight) || (e.cancelable && e.preventDefault(), !1)
				}, t.prototype.onWheel = function (e) {
					var t = this._getPixelsScrolled(e);
					return 0 !== t && (this._viewportElement.scrollTop += t, this._bubbleScroll(e, t))
				}, t.prototype._getPixelsScrolled = function (e) {
					if (0 === e.deltaY) return 0;
					var t = this._applyScrollModifier(e.deltaY, e);
					return e.deltaMode === WheelEvent.DOM_DELTA_LINE ? t *= this._currentRowHeight : e.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t *= this._currentRowHeight * this._bufferService.rows), t
				}, t.prototype.getLinesScrolled = function (e) {
					if (0 === e.deltaY) return 0;
					var t = this._applyScrollModifier(e.deltaY, e);
					return e.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? (t /= this._currentRowHeight + 0, this._wheelPartialScroll += t, t = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1), this._wheelPartialScroll %= 1) : e.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t *= this._bufferService.rows), t
				}, t.prototype._applyScrollModifier = function (e, t) {
					var r = this._optionsService.options.fastScrollModifier;
					return "alt" === r && t.altKey || "ctrl" === r && t.ctrlKey || "shift" === r && t.shiftKey ? e * this._optionsService.options.fastScrollSensitivity * this._optionsService.options.scrollSensitivity : e * this._optionsService.options.scrollSensitivity
				}, t.prototype.onTouchStart = function (e) {
					this._lastTouchY = e.touches[0].pageY
				}, t.prototype.onTouchMove = function (e) {
					var t = this._lastTouchY - e.touches[0].pageY;
					return this._lastTouchY = e.touches[0].pageY, 0 !== t && (this._viewportElement.scrollTop += t, this._bubbleScroll(e, t))
				}, t = o([s(3, h.IBufferService), s(4, h.IOptionsService), s(5, l.ICharSizeService), s(6, l.IRenderService)], t)
			}(a.Disposable);
		t.Viewport = f
	}, function (e, t, r) {
		"use strict";

		function i(e) {
			return e.replace(/\r?\n/g, "\r")
		}

		function n(e, t) {
			return t ? "[200~" + e + "[201~" : e
		}

		function o(e, t, r, o) {
			e = n(e = i(e), r), o.triggerDataEvent(e, !0), t.value = ""
		}

		function s(e, t, r) {
			var i = r.getBoundingClientRect(),
				n = e.clientX - i.left - 10,
				o = e.clientY - i.top - 10;
			t.style.position = "absolute", t.style.width = "20px", t.style.height = "20px", t.style.left = n + "px", t.style.top = o + "px", t.style.zIndex = "1000", t.focus(), setTimeout(function () {
				t.style.position = "", t.style.width = "", t.style.height = "", t.style.left = "", t.style.top = "", t.style.zIndex = ""
			}, 200)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.prepareTextForTerminal = i, t.bracketTextForPaste = n, t.copyHandler = function (e, t) {
			e.clipboardData && e.clipboardData.setData("text/plain", t.selectionText), e.preventDefault()
		}, t.handlePasteEvent = function (e, t, r, i) {
			e.stopPropagation(), e.clipboardData && o(e.clipboardData.getData("text/plain"), t, r, i)
		}, t.paste = o, t.moveTextAreaUnderMouseCursor = s, t.rightClickHandler = function (e, t, r, i, n) {
			s(e, t, r), n && !i.isClickInSelection(e) && i.selectWordAtCursor(e), t.value = i.selectionText, t.select()
		}
	}, function (e, t, r) {
		"use strict";
		var i, n = this && this.__extends || (i = function (e, t) {
			return (i = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (e, t) {
					e.__proto__ = t
				} || function (e, t) {
					for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
				})(e, t)
		}, function (e, t) {
			function r() {
				this.constructor = e
			}
			i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
		});
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(12),
			s = r(18),
			a = r(19),
			c = r(39),
			l = r(2),
			h = r(15),
			u = r(8),
			f = r(16),
			_ = r(1),
			d = r(3),
			p = r(5),
			v = r(6),
			g = r(21),
			y = r(23),
			b = {
				"(": 0,
				")": 1,
				"*": 2,
				"+": 3,
				"-": 1,
				".": 2
			},
			m = function () {
				function e(e, t, r, i) {
					this._bufferService = e, this._coreService = t, this._logService = r, this._optionsService = i, this._data = new Uint32Array(0)
				}
				return e.prototype.hook = function (e) {
					this._data = new Uint32Array(0)
				}, e.prototype.put = function (e, t, r) {
					this._data = h.concat(this._data, e.subarray(t, r))
				}, e.prototype.unhook = function (e) {
					if (e) {
						var t = u.utf32ToString(this._data);
						switch (this._data = new Uint32Array(0), t) {
							case '"q':
								return this._coreService.triggerDataEvent(o.C0.ESC + 'P1$r0"q' + o.C0.ESC + "\\");
							case '"p':
								return this._coreService.triggerDataEvent(o.C0.ESC + 'P1$r61"p' + o.C0.ESC + "\\");
							case "r":
								var r = this._bufferService.buffer.scrollTop + 1 + ";" + (this._bufferService.buffer.scrollBottom + 1) + "r";
								return this._coreService.triggerDataEvent(o.C0.ESC + "P1$r" + r + o.C0.ESC + "\\");
							case "m":
								return this._coreService.triggerDataEvent(o.C0.ESC + "P1$r0m" + o.C0.ESC + "\\");
							case " q":
								var i = {
									block: 2,
									underline: 4,
									bar: 6
								} [this._optionsService.options.cursorStyle];
								return i -= this._optionsService.options.cursorBlink ? 1 : 0, this._coreService.triggerDataEvent(o.C0.ESC + "P1$r" + i + " q" + o.C0.ESC + "\\");
							default:
								this._logService.debug("Unknown DCS $q %s", t), this._coreService.triggerDataEvent(o.C0.ESC + "P0$r" + o.C0.ESC + "\\")
						}
					} else this._data = new Uint32Array(0)
				}, e
			}(),
			C = function (e) {
				function t(t, r, i, n, a, l, h, f) {
					void 0 === f && (f = new c.EscapeSequenceParser);
					var d = e.call(this) || this;
					d._terminal = t, d._bufferService = r, d._coreService = i, d._dirtyRowService = n, d._logService = a, d._optionsService = l, d._coreMouseService = h, d._parser = f, d._parseBuffer = new Uint32Array(4096), d._stringDecoder = new u.StringToUtf32, d._utf8Decoder = new u.Utf8ToUtf32, d._workCell = new p.CellData, d._onCursorMove = new _.EventEmitter, d._onLineFeed = new _.EventEmitter, d._onScroll = new _.EventEmitter, d.register(d._parser), d._parser.setCsiHandlerFallback(function (e, t) {
						d._logService.debug("Unknown CSI code: ", {
							identifier: d._parser.identToString(e),
							params: t.toArray()
						})
					}), d._parser.setEscHandlerFallback(function (e) {
						d._logService.debug("Unknown ESC code: ", {
							identifier: d._parser.identToString(e)
						})
					}), d._parser.setExecuteHandlerFallback(function (e) {
						d._logService.debug("Unknown EXECUTE code: ", {
							code: e
						})
					}), d._parser.setOscHandlerFallback(function (e, t, r) {
						d._logService.debug("Unknown OSC code: ", {
							identifier: e,
							action: t,
							data: r
						})
					}), d._parser.setDcsHandlerFallback(function (e, t, r) {
						"HOOK" === t && (r = r.toArray()), d._logService.debug("Unknown DCS code: ", {
							identifier: d._parser.identToString(e),
							action: t,
							payload: r
						})
					}), d._parser.setPrintHandler(function (e, t, r) {
						return d.print(e, t, r)
					}), d._parser.setCsiHandler({
						final: "@"
					}, function (e) {
						return d.insertChars(e)
					}), d._parser.setCsiHandler({
						intermediates: " ",
						final: "@"
					}, function (e) {
						return d.scrollLeft(e)
					}), d._parser.setCsiHandler({
						final: "A"
					}, function (e) {
						return d.cursorUp(e)
					}), d._parser.setCsiHandler({
						intermediates: " ",
						final: "A"
					}, function (e) {
						return d.scrollRight(e)
					}), d._parser.setCsiHandler({
						final: "B"
					}, function (e) {
						return d.cursorDown(e)
					}), d._parser.setCsiHandler({
						final: "C"
					}, function (e) {
						return d.cursorForward(e)
					}), d._parser.setCsiHandler({
						final: "D"
					}, function (e) {
						return d.cursorBackward(e)
					}), d._parser.setCsiHandler({
						final: "E"
					}, function (e) {
						return d.cursorNextLine(e)
					}), d._parser.setCsiHandler({
						final: "F"
					}, function (e) {
						return d.cursorPrecedingLine(e)
					}), d._parser.setCsiHandler({
						final: "G"
					}, function (e) {
						return d.cursorCharAbsolute(e)
					}), d._parser.setCsiHandler({
						final: "H"
					}, function (e) {
						return d.cursorPosition(e)
					}), d._parser.setCsiHandler({
						final: "I"
					}, function (e) {
						return d.cursorForwardTab(e)
					}), d._parser.setCsiHandler({
						final: "J"
					}, function (e) {
						return d.eraseInDisplay(e)
					}), d._parser.setCsiHandler({
						prefix: "?",
						final: "J"
					}, function (e) {
						return d.eraseInDisplay(e)
					}), d._parser.setCsiHandler({
						final: "K"
					}, function (e) {
						return d.eraseInLine(e)
					}), d._parser.setCsiHandler({
						prefix: "?",
						final: "K"
					}, function (e) {
						return d.eraseInLine(e)
					}), d._parser.setCsiHandler({
						final: "L"
					}, function (e) {
						return d.insertLines(e)
					}), d._parser.setCsiHandler({
						final: "M"
					}, function (e) {
						return d.deleteLines(e)
					}), d._parser.setCsiHandler({
						final: "P"
					}, function (e) {
						return d.deleteChars(e)
					}), d._parser.setCsiHandler({
						final: "S"
					}, function (e) {
						return d.scrollUp(e)
					}), d._parser.setCsiHandler({
						final: "T"
					}, function (e) {
						return d.scrollDown(e)
					}), d._parser.setCsiHandler({
						final: "X"
					}, function (e) {
						return d.eraseChars(e)
					}), d._parser.setCsiHandler({
						final: "Z"
					}, function (e) {
						return d.cursorBackwardTab(e)
					}), d._parser.setCsiHandler({
						final: "`"
					}, function (e) {
						return d.charPosAbsolute(e)
					}), d._parser.setCsiHandler({
						final: "a"
					}, function (e) {
						return d.hPositionRelative(e)
					}), d._parser.setCsiHandler({
						final: "b"
					}, function (e) {
						return d.repeatPrecedingCharacter(e)
					}), d._parser.setCsiHandler({
						final: "c"
					}, function (e) {
						return d.sendDeviceAttributesPrimary(e)
					}), d._parser.setCsiHandler({
						prefix: ">",
						final: "c"
					}, function (e) {
						return d.sendDeviceAttributesSecondary(e)
					}), d._parser.setCsiHandler({
						final: "d"
					}, function (e) {
						return d.linePosAbsolute(e)
					}), d._parser.setCsiHandler({
						final: "e"
					}, function (e) {
						return d.vPositionRelative(e)
					}), d._parser.setCsiHandler({
						final: "f"
					}, function (e) {
						return d.hVPosition(e)
					}), d._parser.setCsiHandler({
						final: "g"
					}, function (e) {
						return d.tabClear(e)
					}), d._parser.setCsiHandler({
						final: "h"
					}, function (e) {
						return d.setMode(e)
					}), d._parser.setCsiHandler({
						prefix: "?",
						final: "h"
					}, function (e) {
						return d.setModePrivate(e)
					}), d._parser.setCsiHandler({
						final: "l"
					}, function (e) {
						return d.resetMode(e)
					}), d._parser.setCsiHandler({
						prefix: "?",
						final: "l"
					}, function (e) {
						return d.resetModePrivate(e)
					}), d._parser.setCsiHandler({
						final: "m"
					}, function (e) {
						return d.charAttributes(e)
					}), d._parser.setCsiHandler({
						final: "n"
					}, function (e) {
						return d.deviceStatus(e)
					}), d._parser.setCsiHandler({
						prefix: "?",
						final: "n"
					}, function (e) {
						return d.deviceStatusPrivate(e)
					}), d._parser.setCsiHandler({
						intermediates: "!",
						final: "p"
					}, function (e) {
						return d.softReset(e)
					}), d._parser.setCsiHandler({
						intermediates: " ",
						final: "q"
					}, function (e) {
						return d.setCursorStyle(e)
					}), d._parser.setCsiHandler({
						final: "r"
					}, function (e) {
						return d.setScrollRegion(e)
					}), d._parser.setCsiHandler({
						final: "s"
					}, function (e) {
						return d.saveCursor(e)
					}), d._parser.setCsiHandler({
						final: "u"
					}, function (e) {
						return d.restoreCursor(e)
					}), d._parser.setCsiHandler({
						intermediates: "'",
						final: "}"
					}, function (e) {
						return d.insertColumns(e)
					}), d._parser.setCsiHandler({
						intermediates: "'",
						final: "~"
					}, function (e) {
						return d.deleteColumns(e)
					}), d._parser.setExecuteHandler(o.C0.BEL, function () {
						return d.bell()
					}), d._parser.setExecuteHandler(o.C0.LF, function () {
						return d.lineFeed()
					}), d._parser.setExecuteHandler(o.C0.VT, function () {
						return d.lineFeed()
					}), d._parser.setExecuteHandler(o.C0.FF, function () {
						return d.lineFeed()
					}), d._parser.setExecuteHandler(o.C0.CR, function () {
						return d.carriageReturn()
					}), d._parser.setExecuteHandler(o.C0.BS, function () {
						return d.backspace()
					}), d._parser.setExecuteHandler(o.C0.HT, function () {
						return d.tab()
					}), d._parser.setExecuteHandler(o.C0.SO, function () {
						return d.shiftOut()
					}), d._parser.setExecuteHandler(o.C0.SI, function () {
						return d.shiftIn()
					}), d._parser.setExecuteHandler(o.C1.IND, function () {
						return d.index()
					}), d._parser.setExecuteHandler(o.C1.NEL, function () {
						return d.nextLine()
					}), d._parser.setExecuteHandler(o.C1.HTS, function () {
						return d.tabSet()
					}), d._parser.setOscHandler(0, new g.OscHandler(function (e) {
						return d.setTitle(e)
					})), d._parser.setOscHandler(2, new g.OscHandler(function (e) {
						return d.setTitle(e)
					})), d._parser.setEscHandler({
						final: "7"
					}, function () {
						return d.saveCursor()
					}), d._parser.setEscHandler({
						final: "8"
					}, function () {
						return d.restoreCursor()
					}), d._parser.setEscHandler({
						final: "D"
					}, function () {
						return d.index()
					}), d._parser.setEscHandler({
						final: "E"
					}, function () {
						return d.nextLine()
					}), d._parser.setEscHandler({
						final: "H"
					}, function () {
						return d.tabSet()
					}), d._parser.setEscHandler({
						final: "M"
					}, function () {
						return d.reverseIndex()
					}), d._parser.setEscHandler({
						final: "="
					}, function () {
						return d.keypadApplicationMode()
					}), d._parser.setEscHandler({
						final: ">"
					}, function () {
						return d.keypadNumericMode()
					}), d._parser.setEscHandler({
						final: "c"
					}, function () {
						return d.reset()
					}), d._parser.setEscHandler({
						final: "n"
					}, function () {
						return d.setgLevel(2)
					}), d._parser.setEscHandler({
						final: "o"
					}, function () {
						return d.setgLevel(3)
					}), d._parser.setEscHandler({
						final: "|"
					}, function () {
						return d.setgLevel(3)
					}), d._parser.setEscHandler({
						final: "}"
					}, function () {
						return d.setgLevel(2)
					}), d._parser.setEscHandler({
						final: "~"
					}, function () {
						return d.setgLevel(1)
					}), d._parser.setEscHandler({
						intermediates: "%",
						final: "@"
					}, function () {
						return d.selectDefaultCharset()
					}), d._parser.setEscHandler({
						intermediates: "%",
						final: "G"
					}, function () {
						return d.selectDefaultCharset()
					});
					var v = function (e) {
							y._parser.setEscHandler({
								intermediates: "(",
								final: e
							}, function () {
								return d.selectCharset("(" + e)
							}), y._parser.setEscHandler({
								intermediates: ")",
								final: e
							}, function () {
								return d.selectCharset(")" + e)
							}), y._parser.setEscHandler({
								intermediates: "*",
								final: e
							}, function () {
								return d.selectCharset("*" + e)
							}), y._parser.setEscHandler({
								intermediates: "+",
								final: e
							}, function () {
								return d.selectCharset("+" + e)
							}), y._parser.setEscHandler({
								intermediates: "-",
								final: e
							}, function () {
								return d.selectCharset("-" + e)
							}), y._parser.setEscHandler({
								intermediates: ".",
								final: e
							}, function () {
								return d.selectCharset("." + e)
							}), y._parser.setEscHandler({
								intermediates: "/",
								final: e
							}, function () {
								return d.selectCharset("/" + e)
							})
						},
						y = this;
					for (var b in s.CHARSETS) v(b);
					return d._parser.setEscHandler({
						intermediates: "#",
						final: "8"
					}, function () {
						return d.screenAlignmentPattern()
					}), d._parser.setErrorHandler(function (e) {
						return d._logService.error("Parsing error: ", e), e
					}), d._parser.setDcsHandler({
						intermediates: "$",
						final: "q"
					}, new m(d._bufferService, d._coreService, d._logService, d._optionsService)), d
				}
				return n(t, e), Object.defineProperty(t.prototype, "onCursorMove", {
					get: function () {
						return this._onCursorMove.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "onLineFeed", {
					get: function () {
						return this._onLineFeed.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "onScroll", {
					get: function () {
						return this._onScroll.event
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.dispose = function () {
					e.prototype.dispose.call(this)
				}, t.prototype.parse = function (e) {
					var t = this._bufferService.buffer,
						r = t.x,
						i = t.y;
					if (this._logService.debug("parsing data", e), this._parseBuffer.length < e.length && this._parseBuffer.length < 131072 && (this._parseBuffer = new Uint32Array(Math.min(e.length, 131072))), this._dirtyRowService.clearRange(), e.length > 131072)
						for (var n = 0; n < e.length; n += 131072) {
							var o = n + 131072 < e.length ? n + 131072 : e.length,
								s = "string" == typeof e ? this._stringDecoder.decode(e.substring(n, o), this._parseBuffer) : this._utf8Decoder.decode(e.subarray(n, o), this._parseBuffer);
							this._parser.parse(this._parseBuffer, s)
						} else {
							s = "string" == typeof e ? this._stringDecoder.decode(e, this._parseBuffer) : this._utf8Decoder.decode(e, this._parseBuffer);
							this._parser.parse(this._parseBuffer, s)
						}(t = this._bufferService.buffer).x === r && t.y === i || this._onCursorMove.fire(), this._terminal.refresh(this._dirtyRowService.start, this._dirtyRowService.end)
				}, t.prototype.print = function (e, t, r) {
					var i, n, o = this._bufferService.buffer,
						s = this._terminal.charset,
						c = this._optionsService.options.screenReaderMode,
						l = this._bufferService.cols,
						h = this._terminal.wraparoundMode,
						f = this._terminal.insertMode,
						_ = this._terminal.curAttrData,
						p = o.lines.get(o.y + o.ybase);
					this._dirtyRowService.markDirty(o.y);
					for (var v = t; v < r; ++v) {
						if (i = e[v], n = a.wcwidth(i), i < 127 && s) {
							var g = s[String.fromCharCode(i)];
							g && (i = g.charCodeAt(0))
						}
						if (c && this._terminal.onA11yCharEmitter.fire(u.stringFromCodePoint(i)), n || !o.x) {
							if (o.x + n - 1 >= l)
								if (h) o.x = 0, o.y++, o.y === o.scrollBottom + 1 ? (o.y--, this._terminal.scroll(!0)) : (o.y >= this._bufferService.rows && (o.y = this._bufferService.rows - 1), o.lines.get(o.y).isWrapped = !0), p = o.lines.get(o.y + o.ybase);
								else if (o.x = l - 1, 2 === n) continue;
							if (f && (p.insertCells(o.x, n, o.getNullCell(_)), 2 === p.getWidth(l - 1) && p.setCellFromCodePoint(l - 1, d.NULL_CELL_CODE, d.NULL_CELL_WIDTH, _.fg, _.bg)), p.setCellFromCodePoint(o.x++, i, n, _.fg, _.bg), n > 0)
								for (; --n;) p.setCellFromCodePoint(o.x++, 0, 0, _.fg, _.bg)
						} else p.getWidth(o.x - 1) ? p.addCodepointToCell(o.x - 1, i) : p.addCodepointToCell(o.x - 2, i)
					}
					r && (p.loadCell(o.x - 1, this._workCell), 2 === this._workCell.getWidth() || this._workCell.getCode() > 65535 ? this._parser.precedingCodepoint = 0 : this._workCell.isCombined() ? this._parser.precedingCodepoint = this._workCell.getChars().charCodeAt(0) : this._parser.precedingCodepoint = this._workCell.content), this._dirtyRowService.markDirty(o.y)
				}, t.prototype.addCsiHandler = function (e, t) {
					return this._parser.addCsiHandler(e, t)
				}, t.prototype.addDcsHandler = function (e, t) {
					return this._parser.addDcsHandler(e, new y.DcsHandler(t))
				}, t.prototype.addEscHandler = function (e, t) {
					return this._parser.addEscHandler(e, t)
				}, t.prototype.addOscHandler = function (e, t) {
					return this._parser.addOscHandler(e, new g.OscHandler(t))
				}, t.prototype.bell = function () {
					this._terminal.bell()
				}, t.prototype.lineFeed = function () {
					var e = this._bufferService.buffer;
					this._dirtyRowService.markDirty(e.y), this._optionsService.options.convertEol && (e.x = 0), e.y++, e.y === e.scrollBottom + 1 ? (e.y--, this._terminal.scroll()) : e.y >= this._bufferService.rows && (e.y = this._bufferService.rows - 1), e.x >= this._bufferService.cols && e.x--, this._dirtyRowService.markDirty(e.y), this._onLineFeed.fire()
				}, t.prototype.carriageReturn = function () {
					this._bufferService.buffer.x = 0
				}, t.prototype.backspace = function () {
					this._restrictCursor(), this._bufferService.buffer.x > 0 && this._bufferService.buffer.x--
				}, t.prototype.tab = function () {
					if (!(this._bufferService.buffer.x >= this._bufferService.cols)) {
						var e = this._bufferService.buffer.x;
						this._bufferService.buffer.x = this._bufferService.buffer.nextStop(), this._optionsService.options.screenReaderMode && this._terminal.onA11yTabEmitter.fire(this._bufferService.buffer.x - e)
					}
				}, t.prototype.shiftOut = function () {
					this._terminal.setgLevel(1)
				}, t.prototype.shiftIn = function () {
					this._terminal.setgLevel(0)
				}, t.prototype._restrictCursor = function () {
					this._bufferService.buffer.x = Math.min(this._bufferService.cols - 1, Math.max(0, this._bufferService.buffer.x)), this._bufferService.buffer.y = this._terminal.originMode ? Math.min(this._bufferService.buffer.scrollBottom, Math.max(this._bufferService.buffer.scrollTop, this._bufferService.buffer.y)) : Math.min(this._bufferService.rows - 1, Math.max(0, this._bufferService.buffer.y)), this._dirtyRowService.markDirty(this._bufferService.buffer.y)
				}, t.prototype._setCursor = function (e, t) {
					this._dirtyRowService.markDirty(this._bufferService.buffer.y), this._terminal.originMode ? (this._bufferService.buffer.x = e, this._bufferService.buffer.y = this._bufferService.buffer.scrollTop + t) : (this._bufferService.buffer.x = e, this._bufferService.buffer.y = t), this._restrictCursor(), this._dirtyRowService.markDirty(this._bufferService.buffer.y)
				}, t.prototype._moveCursor = function (e, t) {
					this._restrictCursor(), this._setCursor(this._bufferService.buffer.x + e, this._bufferService.buffer.y + t)
				}, t.prototype.cursorUp = function (e) {
					var t = this._bufferService.buffer.y - this._bufferService.buffer.scrollTop;
					t >= 0 ? this._moveCursor(0, -Math.min(t, e.params[0] || 1)) : this._moveCursor(0, -(e.params[0] || 1))
				}, t.prototype.cursorDown = function (e) {
					var t = this._bufferService.buffer.scrollBottom - this._bufferService.buffer.y;
					t >= 0 ? this._moveCursor(0, Math.min(t, e.params[0] || 1)) : this._moveCursor(0, e.params[0] || 1)
				}, t.prototype.cursorForward = function (e) {
					this._moveCursor(e.params[0] || 1, 0)
				}, t.prototype.cursorBackward = function (e) {
					this._moveCursor(-(e.params[0] || 1), 0)
				}, t.prototype.cursorNextLine = function (e) {
					this.cursorDown(e), this._bufferService.buffer.x = 0
				}, t.prototype.cursorPrecedingLine = function (e) {
					this.cursorUp(e), this._bufferService.buffer.x = 0
				}, t.prototype.cursorCharAbsolute = function (e) {
					this._setCursor((e.params[0] || 1) - 1, this._bufferService.buffer.y)
				}, t.prototype.cursorPosition = function (e) {
					this._setCursor(e.length >= 2 ? (e.params[1] || 1) - 1 : 0, (e.params[0] || 1) - 1)
				}, t.prototype.charPosAbsolute = function (e) {
					this._setCursor((e.params[0] || 1) - 1, this._bufferService.buffer.y)
				}, t.prototype.hPositionRelative = function (e) {
					this._moveCursor(e.params[0] || 1, 0)
				}, t.prototype.linePosAbsolute = function (e) {
					this._setCursor(this._bufferService.buffer.x, (e.params[0] || 1) - 1)
				}, t.prototype.vPositionRelative = function (e) {
					this._moveCursor(0, e.params[0] || 1)
				}, t.prototype.hVPosition = function (e) {
					this.cursorPosition(e)
				}, t.prototype.tabClear = function (e) {
					var t = e.params[0];
					0 === t ? delete this._bufferService.buffer.tabs[this._bufferService.buffer.x] : 3 === t && (this._bufferService.buffer.tabs = {})
				}, t.prototype.cursorForwardTab = function (e) {
					if (!(this._bufferService.buffer.x >= this._bufferService.cols))
						for (var t = e.params[0] || 1; t--;) this._bufferService.buffer.x = this._bufferService.buffer.nextStop()
				}, t.prototype.cursorBackwardTab = function (e) {
					if (!(this._bufferService.buffer.x >= this._bufferService.cols))
						for (var t = e.params[0] || 1, r = this._bufferService.buffer; t--;) r.x = r.prevStop()
				}, t.prototype._eraseInBufferLine = function (e, t, r, i) {
					void 0 === i && (i = !1);
					var n = this._bufferService.buffer.lines.get(this._bufferService.buffer.ybase + e);
					n.replaceCells(t, r, this._bufferService.buffer.getNullCell(this._terminal.eraseAttrData())), i && (n.isWrapped = !1)
				}, t.prototype._resetBufferLine = function (e) {
					var t = this._bufferService.buffer.lines.get(this._bufferService.buffer.ybase + e);
					t.fill(this._bufferService.buffer.getNullCell(this._terminal.eraseAttrData())), t.isWrapped = !1
				}, t.prototype.eraseInDisplay = function (e) {
					var t;
					switch (this._restrictCursor(), e.params[0]) {
						case 0:
							for (t = this._bufferService.buffer.y, this._dirtyRowService.markDirty(t), this._eraseInBufferLine(t++, this._bufferService.buffer.x, this._bufferService.cols, 0 === this._bufferService.buffer.x); t < this._bufferService.rows; t++) this._resetBufferLine(t);
							this._dirtyRowService.markDirty(t);
							break;
						case 1:
							for (t = this._bufferService.buffer.y, this._dirtyRowService.markDirty(t), this._eraseInBufferLine(t, 0, this._bufferService.buffer.x + 1, !0), this._bufferService.buffer.x + 1 >= this._bufferService.cols && (this._bufferService.buffer.lines.get(t + 1).isWrapped = !1); t--;) this._resetBufferLine(t);
							this._dirtyRowService.markDirty(0);
							break;
						case 2:
							for (t = this._bufferService.rows, this._dirtyRowService.markDirty(t - 1); t--;) this._resetBufferLine(t);
							this._dirtyRowService.markDirty(0);
							break;
						case 3:
							var r = this._bufferService.buffer.lines.length - this._bufferService.rows;
							r > 0 && (this._bufferService.buffer.lines.trimStart(r), this._bufferService.buffer.ybase = Math.max(this._bufferService.buffer.ybase - r, 0), this._bufferService.buffer.ydisp = Math.max(this._bufferService.buffer.ydisp - r, 0), this._onScroll.fire(0))
					}
				}, t.prototype.eraseInLine = function (e) {
					switch (this._restrictCursor(), e.params[0]) {
						case 0:
							this._eraseInBufferLine(this._bufferService.buffer.y, this._bufferService.buffer.x, this._bufferService.cols);
							break;
						case 1:
							this._eraseInBufferLine(this._bufferService.buffer.y, 0, this._bufferService.buffer.x + 1);
							break;
						case 2:
							this._eraseInBufferLine(this._bufferService.buffer.y, 0, this._bufferService.cols)
					}
					this._dirtyRowService.markDirty(this._bufferService.buffer.y)
				}, t.prototype.insertLines = function (e) {
					this._restrictCursor();
					var t = e.params[0] || 1,
						r = this._bufferService.buffer;
					if (!(r.y > r.scrollBottom || r.y < r.scrollTop)) {
						for (var i = r.y + r.ybase, n = this._bufferService.rows - 1 - r.scrollBottom, o = this._bufferService.rows - 1 + r.ybase - n + 1; t--;) r.lines.splice(o - 1, 1), r.lines.splice(i, 0, r.getBlankLine(this._terminal.eraseAttrData()));
						this._dirtyRowService.markRangeDirty(r.y, r.scrollBottom), r.x = 0
					}
				}, t.prototype.deleteLines = function (e) {
					this._restrictCursor();
					var t = e.params[0] || 1,
						r = this._bufferService.buffer;
					if (!(r.y > r.scrollBottom || r.y < r.scrollTop)) {
						var i, n = r.y + r.ybase;
						for (i = this._bufferService.rows - 1 - r.scrollBottom, i = this._bufferService.rows - 1 + r.ybase - i; t--;) r.lines.splice(n, 1), r.lines.splice(i, 0, r.getBlankLine(this._terminal.eraseAttrData()));
						this._dirtyRowService.markRangeDirty(r.y, r.scrollBottom), r.x = 0
					}
				}, t.prototype.insertChars = function (e) {
					this._restrictCursor();
					var t = this._bufferService.buffer.lines.get(this._bufferService.buffer.y + this._bufferService.buffer.ybase);
					t && (t.insertCells(this._bufferService.buffer.x, e.params[0] || 1, this._bufferService.buffer.getNullCell(this._terminal.eraseAttrData())), this._dirtyRowService.markDirty(this._bufferService.buffer.y))
				}, t.prototype.deleteChars = function (e) {
					this._restrictCursor();
					var t = this._bufferService.buffer.lines.get(this._bufferService.buffer.y + this._bufferService.buffer.ybase);
					t && (t.deleteCells(this._bufferService.buffer.x, e.params[0] || 1, this._bufferService.buffer.getNullCell(this._terminal.eraseAttrData())), this._dirtyRowService.markDirty(this._bufferService.buffer.y))
				}, t.prototype.scrollUp = function (e) {
					for (var t = e.params[0] || 1, r = this._bufferService.buffer; t--;) r.lines.splice(r.ybase + r.scrollTop, 1), r.lines.splice(r.ybase + r.scrollBottom, 0, r.getBlankLine(this._terminal.eraseAttrData()));
					this._dirtyRowService.markRangeDirty(r.scrollTop, r.scrollBottom)
				}, t.prototype.scrollDown = function (e) {
					for (var t = e.params[0] || 1, r = this._bufferService.buffer; t--;) r.lines.splice(r.ybase + r.scrollBottom, 1), r.lines.splice(r.ybase + r.scrollTop, 0, r.getBlankLine(f.DEFAULT_ATTR_DATA));
					this._dirtyRowService.markRangeDirty(r.scrollTop, r.scrollBottom)
				}, t.prototype.scrollLeft = function (e) {
					var t = this._bufferService.buffer;
					if (!(t.y > t.scrollBottom || t.y < t.scrollTop)) {
						for (var r = e.params[0] || 1, i = t.scrollTop; i <= t.scrollBottom; ++i) {
							var n = t.lines.get(t.ybase + i);
							n.deleteCells(0, r, t.getNullCell(this._terminal.eraseAttrData())), n.isWrapped = !1
						}
						this._dirtyRowService.markRangeDirty(t.scrollTop, t.scrollBottom)
					}
				}, t.prototype.scrollRight = function (e) {
					var t = this._bufferService.buffer;
					if (!(t.y > t.scrollBottom || t.y < t.scrollTop)) {
						for (var r = e.params[0] || 1, i = t.scrollTop; i <= t.scrollBottom; ++i) {
							var n = t.lines.get(t.ybase + i);
							n.insertCells(0, r, t.getNullCell(this._terminal.eraseAttrData())), n.isWrapped = !1
						}
						this._dirtyRowService.markRangeDirty(t.scrollTop, t.scrollBottom)
					}
				}, t.prototype.insertColumns = function (e) {
					var t = this._bufferService.buffer;
					if (!(t.y > t.scrollBottom || t.y < t.scrollTop)) {
						for (var r = e.params[0] || 1, i = t.scrollTop; i <= t.scrollBottom; ++i) {
							var n = this._bufferService.buffer.lines.get(t.ybase + i);
							n.insertCells(t.x, r, t.getNullCell(this._terminal.eraseAttrData())), n.isWrapped = !1
						}
						this._dirtyRowService.markRangeDirty(t.scrollTop, t.scrollBottom)
					}
				}, t.prototype.deleteColumns = function (e) {
					var t = this._bufferService.buffer;
					if (!(t.y > t.scrollBottom || t.y < t.scrollTop)) {
						for (var r = e.params[0] || 1, i = t.scrollTop; i <= t.scrollBottom; ++i) {
							var n = t.lines.get(t.ybase + i);
							n.deleteCells(t.x, r, t.getNullCell(this._terminal.eraseAttrData())), n.isWrapped = !1
						}
						this._dirtyRowService.markRangeDirty(t.scrollTop, t.scrollBottom)
					}
				}, t.prototype.eraseChars = function (e) {
					this._restrictCursor();
					var t = this._bufferService.buffer.lines.get(this._bufferService.buffer.y + this._bufferService.buffer.ybase);
					t && (t.replaceCells(this._bufferService.buffer.x, this._bufferService.buffer.x + (e.params[0] || 1), this._bufferService.buffer.getNullCell(this._terminal.eraseAttrData())), this._dirtyRowService.markDirty(this._bufferService.buffer.y))
				}, t.prototype.repeatPrecedingCharacter = function (e) {
					if (this._parser.precedingCodepoint) {
						for (var t = e.params[0] || 1, r = new Uint32Array(t), i = 0; i < t; ++i) r[i] = this._parser.precedingCodepoint;
						this.print(r, 0, r.length)
					}
				}, t.prototype.sendDeviceAttributesPrimary = function (e) {
					e.params[0] > 0 || (this._terminal.is("xterm") || this._terminal.is("rxvt-unicode") || this._terminal.is("screen") ? this._coreService.triggerDataEvent(o.C0.ESC + "[?1;2c") : this._terminal.is("linux") && this._coreService.triggerDataEvent(o.C0.ESC + "[?6c"))
				}, t.prototype.sendDeviceAttributesSecondary = function (e) {
					e.params[0] > 0 || (this._terminal.is("xterm") ? this._coreService.triggerDataEvent(o.C0.ESC + "[>0;276;0c") : this._terminal.is("rxvt-unicode") ? this._coreService.triggerDataEvent(o.C0.ESC + "[>85;95;0c") : this._terminal.is("linux") ? this._coreService.triggerDataEvent(e.params[0] + "c") : this._terminal.is("screen") && this._coreService.triggerDataEvent(o.C0.ESC + "[>83;40003;0c"))
				}, t.prototype.setMode = function (e) {
					for (var t = 0; t < e.length; t++) switch (e.params[t]) {
						case 4:
							this._terminal.insertMode = !0
					}
				}, t.prototype.setModePrivate = function (e) {
					for (var t = 0; t < e.length; t++) switch (e.params[t]) {
						case 1:
							this._coreService.decPrivateModes.applicationCursorKeys = !0;
							break;
						case 2:
							this._terminal.setgCharset(0, s.DEFAULT_CHARSET), this._terminal.setgCharset(1, s.DEFAULT_CHARSET), this._terminal.setgCharset(2, s.DEFAULT_CHARSET), this._terminal.setgCharset(3, s.DEFAULT_CHARSET);
							break;
						case 3:
							this._terminal.savedCols = this._bufferService.cols, this._terminal.resize(132, this._bufferService.rows), this._terminal.reset();
							break;
						case 6:
							this._terminal.originMode = !0, this._setCursor(0, 0);
							break;
						case 7:
							this._terminal.wraparoundMode = !0;
							break;
						case 12:
							break;
						case 66:
							this._logService.debug("Serial port requested application keypad."), this._terminal.applicationKeypad = !0, this._terminal.viewport && this._terminal.viewport.syncScrollArea();
							break;
						case 9:
							this._coreMouseService.activeProtocol = "X10";
							break;
						case 1e3:
							this._coreMouseService.activeProtocol = "VT200";
							break;
						case 1002:
							this._coreMouseService.activeProtocol = "DRAG";
							break;
						case 1003:
							this._coreMouseService.activeProtocol = "ANY";
							break;
						case 1004:
							this._terminal.sendFocus = !0;
							break;
						case 1005:
							this._logService.debug("DECSET 1005 not supported (see #2507)");
							break;
						case 1006:
							this._coreMouseService.activeEncoding = "SGR";
							break;
						case 1015:
							this._logService.debug("DECSET 1015 not supported (see #2507)");
							break;
						case 25:
							this._coreService.isCursorHidden = !1;
							break;
						case 1048:
							this.saveCursor();
							break;
						case 1049:
							this.saveCursor();
						case 47:
						case 1047:
							this._bufferService.buffers.activateAltBuffer(this._terminal.eraseAttrData()), this._terminal.refresh(0, this._bufferService.rows - 1), this._terminal.viewport && this._terminal.viewport.syncScrollArea(), this._terminal.showCursor();
							break;
						case 2004:
							this._terminal.bracketedPasteMode = !0
					}
				}, t.prototype.resetMode = function (e) {
					for (var t = 0; t < e.length; t++) switch (e.params[t]) {
						case 4:
							this._terminal.insertMode = !1
					}
				}, t.prototype.resetModePrivate = function (e) {
					for (var t = 0; t < e.length; t++) switch (e.params[t]) {
						case 1:
							this._coreService.decPrivateModes.applicationCursorKeys = !1;
							break;
						case 3:
							132 === this._bufferService.cols && this._terminal.savedCols && this._terminal.resize(this._terminal.savedCols, this._bufferService.rows), delete this._terminal.savedCols, this._terminal.reset();
							break;
						case 6:
							this._terminal.originMode = !1, this._setCursor(0, 0);
							break;
						case 7:
							this._terminal.wraparoundMode = !1;
							break;
						case 12:
							break;
						case 66:
							this._logService.debug("Switching back to normal keypad."), this._terminal.applicationKeypad = !1, this._terminal.viewport && this._terminal.viewport.syncScrollArea();
							break;
						case 9:
						case 1e3:
						case 1002:
						case 1003:
							this._coreMouseService.activeProtocol = "NONE";
							break;
						case 1004:
							this._terminal.sendFocus = !1;
							break;
						case 1005:
							this._logService.debug("DECRST 1005 not supported (see #2507)");
							break;
						case 1006:
							this._coreMouseService.activeEncoding = "DEFAULT";
							break;
						case 1015:
							this._logService.debug("DECRST 1015 not supported (see #2507)");
							break;
						case 25:
							this._coreService.isCursorHidden = !0;
							break;
						case 1048:
							this.restoreCursor();
							break;
						case 1049:
						case 47:
						case 1047:
							this._bufferService.buffers.activateNormalBuffer(), 1049 === e.params[t] && this.restoreCursor(), this._terminal.refresh(0, this._bufferService.rows - 1), this._terminal.viewport && this._terminal.viewport.syncScrollArea(), this._terminal.showCursor();
							break;
						case 2004:
							this._terminal.bracketedPasteMode = !1
					}
				}, t.prototype._extractColor = function (e, t, r) {
					var i = [0, 0, -1, 0, 0, 0],
						n = 0,
						o = 0;
					do {
						if (i[o + n] = e.params[t + o], e.hasSubParams(t + o)) {
							var s = e.getSubParams(t + o),
								a = 0;
							do {
								5 === i[1] && (n = 1), i[o + a + 1 + n] = s[a]
							} while (++a < s.length && a + o + 1 + n < i.length);
							break
						}
						if (5 === i[1] && o + n >= 2 || 2 === i[1] && o + n >= 5) break;
						i[1] && (n = 1)
					} while (++o + t < e.length && o + n < i.length);
					for (a = 2; a < i.length; ++a) - 1 === i[a] && (i[a] = 0);
					return 38 === i[0] ? 2 === i[1] ? (r.fg |= 50331648, r.fg &= -16777216, r.fg |= v.AttributeData.fromColorRGB([i[3], i[4], i[5]])) : 5 === i[1] && (r.fg &= -50331904, r.fg |= 33554432 | 255 & i[3]) : 48 === i[0] && (2 === i[1] ? (r.bg |= 50331648, r.bg &= -16777216, r.bg |= v.AttributeData.fromColorRGB([i[3], i[4], i[5]])) : 5 === i[1] && (r.bg &= -50331904, r.bg |= 33554432 | 255 & i[3])), o
				}, t.prototype.charAttributes = function (e) {
					if (1 === e.length && 0 === e.params[0]) return this._terminal.curAttrData.fg = f.DEFAULT_ATTR_DATA.fg, void(this._terminal.curAttrData.bg = f.DEFAULT_ATTR_DATA.bg);
					for (var t, r = e.length, i = this._terminal.curAttrData, n = 0; n < r; n++)(t = e.params[n]) >= 30 && t <= 37 ? (i.fg &= -50331904, i.fg |= 16777216 | t - 30) : t >= 40 && t <= 47 ? (i.bg &= -50331904, i.bg |= 16777216 | t - 40) : t >= 90 && t <= 97 ? (i.fg &= -50331904, i.fg |= 16777224 | t - 90) : t >= 100 && t <= 107 ? (i.bg &= -50331904, i.bg |= 16777224 | t - 100) : 0 === t ? (i.fg = f.DEFAULT_ATTR_DATA.fg, i.bg = f.DEFAULT_ATTR_DATA.bg) : 1 === t ? i.fg |= 134217728 : 3 === t ? i.bg |= 67108864 : 4 === t ? i.fg |= 268435456 : 5 === t ? i.fg |= 536870912 : 7 === t ? i.fg |= 67108864 : 8 === t ? i.fg |= 1073741824 : 2 === t ? i.bg |= 134217728 : 22 === t ? (i.fg &= -134217729, i.bg &= -134217729) : 23 === t ? i.bg &= -67108865 : 24 === t ? i.fg &= -268435457 : 25 === t ? i.fg &= -536870913 : 27 === t ? i.fg &= -67108865 : 28 === t ? i.fg &= -1073741825 : 39 === t ? (i.fg &= -67108864, i.fg |= 16777215 & f.DEFAULT_ATTR_DATA.fg) : 49 === t ? (i.bg &= -67108864, i.bg |= 16777215 & f.DEFAULT_ATTR_DATA.bg) : 38 === t || 48 === t ? n += this._extractColor(e, n, i) : 100 === t ? (i.fg &= -67108864, i.fg |= 16777215 & f.DEFAULT_ATTR_DATA.fg, i.bg &= -67108864, i.bg |= 16777215 & f.DEFAULT_ATTR_DATA.bg) : this._logService.debug("Unknown SGR attribute: %d.", t)
				}, t.prototype.deviceStatus = function (e) {
					switch (e.params[0]) {
						case 5:
							this._coreService.triggerDataEvent(o.C0.ESC + "[0n");
							break;
						case 6:
							var t = this._bufferService.buffer.y + 1,
								r = this._bufferService.buffer.x + 1;
							this._coreService.triggerDataEvent(o.C0.ESC + "[" + t + ";" + r + "R")
					}
				}, t.prototype.deviceStatusPrivate = function (e) {
					switch (e.params[0]) {
						case 6:
							var t = this._bufferService.buffer.y + 1,
								r = this._bufferService.buffer.x + 1;
							this._coreService.triggerDataEvent(o.C0.ESC + "[?" + t + ";" + r + "R")
					}
				}, t.prototype.softReset = function (e) {
					this._coreService.isCursorHidden = !1, this._terminal.insertMode = !1, this._terminal.originMode = !1, this._terminal.wraparoundMode = !0, this._terminal.applicationKeypad = !1, this._terminal.viewport && this._terminal.viewport.syncScrollArea(), this._coreService.decPrivateModes.applicationCursorKeys = !1, this._bufferService.buffer.scrollTop = 0, this._bufferService.buffer.scrollBottom = this._bufferService.rows - 1, this._terminal.curAttrData = f.DEFAULT_ATTR_DATA.clone(), this._bufferService.buffer.x = this._bufferService.buffer.y = 0, this._terminal.charset = null, this._terminal.glevel = 0, this._terminal.charsets = [null]
				}, t.prototype.setCursorStyle = function (e) {
					var t = e.params[0] || 1;
					switch (t) {
						case 1:
						case 2:
							this._optionsService.options.cursorStyle = "block";
							break;
						case 3:
						case 4:
							this._optionsService.options.cursorStyle = "underline";
							break;
						case 5:
						case 6:
							this._optionsService.options.cursorStyle = "bar"
					}
					var r = t % 2 == 1;
					this._optionsService.options.cursorBlink = r
				}, t.prototype.setScrollRegion = function (e) {
					var t, r = e.params[0] || 1;
					(e.length < 2 || (t = e.params[1]) > this._bufferService.rows || 0 === t) && (t = this._bufferService.rows), t > r && (this._bufferService.buffer.scrollTop = r - 1, this._bufferService.buffer.scrollBottom = t - 1, this._setCursor(0, 0))
				}, t.prototype.saveCursor = function (e) {
					this._bufferService.buffer.savedX = this._bufferService.buffer.x, this._bufferService.buffer.savedY = this._bufferService.buffer.ybase + this._bufferService.buffer.y, this._bufferService.buffer.savedCurAttrData.fg = this._terminal.curAttrData.fg, this._bufferService.buffer.savedCurAttrData.bg = this._terminal.curAttrData.bg, this._bufferService.buffer.savedCharset = this._terminal.charset
				}, t.prototype.restoreCursor = function (e) {
					this._bufferService.buffer.x = this._bufferService.buffer.savedX || 0, this._bufferService.buffer.y = Math.max(this._bufferService.buffer.savedY - this._bufferService.buffer.ybase, 0), this._terminal.curAttrData.fg = this._bufferService.buffer.savedCurAttrData.fg, this._terminal.curAttrData.bg = this._bufferService.buffer.savedCurAttrData.bg, this._terminal.charset = this._savedCharset, this._bufferService.buffer.savedCharset && (this._terminal.charset = this._bufferService.buffer.savedCharset), this._restrictCursor()
				}, t.prototype.setTitle = function (e) {
					this._terminal.handleTitle(e)
				}, t.prototype.nextLine = function () {
					this._bufferService.buffer.x = 0, this.index()
				}, t.prototype.keypadApplicationMode = function () {
					this._logService.debug("Serial port requested application keypad."), this._terminal.applicationKeypad = !0, this._terminal.viewport && this._terminal.viewport.syncScrollArea()
				}, t.prototype.keypadNumericMode = function () {
					this._logService.debug("Switching back to normal keypad."), this._terminal.applicationKeypad = !1, this._terminal.viewport && this._terminal.viewport.syncScrollArea()
				}, t.prototype.selectDefaultCharset = function () {
					this._terminal.setgLevel(0), this._terminal.setgCharset(0, s.DEFAULT_CHARSET)
				}, t.prototype.selectCharset = function (e) {
					2 === e.length ? "/" !== e[0] && this._terminal.setgCharset(b[e[0]], s.CHARSETS[e[1]] || s.DEFAULT_CHARSET) : this.selectDefaultCharset()
				}, t.prototype.index = function () {
					this._restrictCursor();
					var e = this._bufferService.buffer;
					this._bufferService.buffer.y++, e.y === e.scrollBottom + 1 ? (e.y--, this._terminal.scroll()) : e.y >= this._bufferService.rows && (e.y = this._bufferService.rows - 1), this._restrictCursor()
				}, t.prototype.tabSet = function () {
					this._bufferService.buffer.tabs[this._bufferService.buffer.x] = !0
				}, t.prototype.reverseIndex = function () {
					this._restrictCursor();
					var e = this._bufferService.buffer;
					if (e.y === e.scrollTop) {
						var t = e.scrollBottom - e.scrollTop;
						e.lines.shiftElements(e.y + e.ybase, t, 1), e.lines.set(e.y + e.ybase, e.getBlankLine(this._terminal.eraseAttrData())), this._dirtyRowService.markRangeDirty(e.scrollTop, e.scrollBottom)
					} else e.y--, this._restrictCursor()
				}, t.prototype.reset = function () {
					this._parser.reset(), this._terminal.reset()
				}, t.prototype.setgLevel = function (e) {
					this._terminal.setgLevel(e)
				}, t.prototype.screenAlignmentPattern = function () {
					var e = new p.CellData;
					e.content = 1 << 22 | "E".charCodeAt(0), e.fg = this._terminal.curAttrData.fg, e.bg = this._terminal.curAttrData.bg;
					var t = this._bufferService.buffer;
					this._setCursor(0, 0);
					for (var r = 0; r < this._bufferService.rows; ++r) {
						var i = t.y + t.ybase + r;
						t.lines.get(i).fill(e), t.lines.get(i).isWrapped = !1
					}
					this._dirtyRowService.markAllDirty(), this._setCursor(0, 0)
				}, t
			}(l.Disposable);
		t.InputHandler = C
	}, function (e, t, r) {
		"use strict";
		var i, n = this && this.__extends || (i = function (e, t) {
			return (i = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (e, t) {
					e.__proto__ = t
				} || function (e, t) {
					for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
				})(e, t)
		}, function (e, t) {
			function r() {
				this.constructor = e
			}
			i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
		});
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(2),
			s = r(15),
			a = r(20),
			c = r(21),
			l = r(23),
			h = function () {
				function e(e) {
					this.table = new Uint8Array(e)
				}
				return e.prototype.setDefault = function (e, t) {
					s.fill(this.table, e << 4 | t)
				}, e.prototype.add = function (e, t, r, i) {
					this.table[t << 8 | e] = r << 4 | i
				}, e.prototype.addMany = function (e, t, r, i) {
					for (var n = 0; n < e.length; n++) this.table[t << 8 | e[n]] = r << 4 | i
				}, e
			}();
		t.TransitionTable = h;
		t.VT500_TRANSITION_TABLE = function () {
			var e = new h(4095),
				t = Array.apply(null, Array(256)).map(function (e, t) {
					return t
				}),
				r = function (e, r) {
					return t.slice(e, r)
				},
				i = r(32, 127),
				n = r(0, 24);
			n.push(25), n.push.apply(n, r(28, 32));
			var o, s = r(0, 14);
			for (o in e.setDefault(1, 0), e.addMany(i, 0, 2, 0), s) e.addMany([24, 26, 153, 154], o, 3, 0), e.addMany(r(128, 144), o, 3, 0), e.addMany(r(144, 152), o, 3, 0), e.add(156, o, 0, 0), e.add(27, o, 11, 1), e.add(157, o, 4, 8), e.addMany([152, 158, 159], o, 0, 7), e.add(155, o, 11, 3), e.add(144, o, 11, 9);
			return e.addMany(n, 0, 3, 0), e.addMany(n, 1, 3, 1), e.add(127, 1, 0, 1), e.addMany(n, 8, 0, 8), e.addMany(n, 3, 3, 3), e.add(127, 3, 0, 3), e.addMany(n, 4, 3, 4), e.add(127, 4, 0, 4), e.addMany(n, 6, 3, 6), e.addMany(n, 5, 3, 5), e.add(127, 5, 0, 5), e.addMany(n, 2, 3, 2), e.add(127, 2, 0, 2), e.add(93, 1, 4, 8), e.addMany(i, 8, 5, 8), e.add(127, 8, 5, 8), e.addMany([156, 27, 24, 26, 7], 8, 6, 0), e.addMany(r(28, 32), 8, 0, 8), e.addMany([88, 94, 95], 1, 0, 7), e.addMany(i, 7, 0, 7), e.addMany(n, 7, 0, 7), e.add(156, 7, 0, 0), e.add(127, 7, 0, 7), e.add(91, 1, 11, 3), e.addMany(r(64, 127), 3, 7, 0), e.addMany(r(48, 60), 3, 8, 4), e.addMany([60, 61, 62, 63], 3, 9, 4), e.addMany(r(48, 60), 4, 8, 4), e.addMany(r(64, 127), 4, 7, 0), e.addMany([60, 61, 62, 63], 4, 0, 6), e.addMany(r(32, 64), 6, 0, 6), e.add(127, 6, 0, 6), e.addMany(r(64, 127), 6, 0, 0), e.addMany(r(32, 48), 3, 9, 5), e.addMany(r(32, 48), 5, 9, 5), e.addMany(r(48, 64), 5, 0, 6), e.addMany(r(64, 127), 5, 7, 0), e.addMany(r(32, 48), 4, 9, 5), e.addMany(r(32, 48), 1, 9, 2), e.addMany(r(32, 48), 2, 9, 2), e.addMany(r(48, 127), 2, 10, 0), e.addMany(r(48, 80), 1, 10, 0), e.addMany(r(81, 88), 1, 10, 0), e.addMany([89, 90, 92], 1, 10, 0), e.addMany(r(96, 127), 1, 10, 0), e.add(80, 1, 11, 9), e.addMany(n, 9, 0, 9), e.add(127, 9, 0, 9), e.addMany(r(28, 32), 9, 0, 9), e.addMany(r(32, 48), 9, 9, 12), e.addMany(r(48, 60), 9, 8, 10), e.addMany([60, 61, 62, 63], 9, 9, 10), e.addMany(n, 11, 0, 11), e.addMany(r(32, 128), 11, 0, 11), e.addMany(r(28, 32), 11, 0, 11), e.addMany(n, 10, 0, 10), e.add(127, 10, 0, 10), e.addMany(r(28, 32), 10, 0, 10), e.addMany(r(48, 60), 10, 8, 10), e.addMany([60, 61, 62, 63], 10, 0, 11), e.addMany(r(32, 48), 10, 9, 12), e.addMany(n, 12, 0, 12), e.add(127, 12, 0, 12), e.addMany(r(28, 32), 12, 0, 12), e.addMany(r(32, 48), 12, 9, 12), e.addMany(r(48, 64), 12, 0, 11), e.addMany(r(64, 127), 12, 12, 13), e.addMany(r(64, 127), 10, 12, 13), e.addMany(r(64, 127), 9, 12, 13), e.addMany(n, 13, 13, 13), e.addMany(i, 13, 13, 13), e.add(127, 13, 0, 13), e.addMany([27, 156, 24, 26], 13, 14, 0), e.add(160, 0, 2, 0), e.add(160, 8, 5, 8), e.add(160, 6, 0, 6), e.add(160, 11, 0, 11), e.add(160, 13, 13, 13), e
		}();
		var u = function (e) {
			function r(r) {
				void 0 === r && (r = t.VT500_TRANSITION_TABLE);
				var i = e.call(this) || this;
				return i.TRANSITIONS = r, i.initialState = 0, i.currentState = i.initialState, i._params = new a.Params, i._params.addParam(0), i._collect = 0, i.precedingCodepoint = 0, i._printHandlerFb = function (e, t, r) {}, i._executeHandlerFb = function (e) {}, i._csiHandlerFb = function (e, t) {}, i._escHandlerFb = function (e) {}, i._errorHandlerFb = function (e) {
					return e
				}, i._printHandler = i._printHandlerFb, i._executeHandlers = Object.create(null), i._csiHandlers = Object.create(null), i._escHandlers = Object.create(null), i._oscParser = new c.OscParser, i._dcsParser = new l.DcsParser, i._errorHandler = i._errorHandlerFb, i.setEscHandler({
					final: "\\"
				}, function () {}), i
			}
			return n(r, e), r.prototype._identifier = function (e, t) {
				void 0 === t && (t = [64, 126]);
				var r = 0;
				if (e.prefix) {
					if (e.prefix.length > 1) throw new Error("only one byte as prefix supported");
					if ((r = e.prefix.charCodeAt(0)) && 60 > r || r > 63) throw new Error("prefix must be in range 0x3c .. 0x3f")
				}
				if (e.intermediates) {
					if (e.intermediates.length > 2) throw new Error("only two bytes as intermediates are supported");
					for (var i = 0; i < e.intermediates.length; ++i) {
						var n = e.intermediates.charCodeAt(i);
						if (32 > n || n > 47) throw new Error("intermediate must be in range 0x20 .. 0x2f");
						r <<= 8, r |= n
					}
				}
				if (1 !== e.final.length) throw new Error("final must be a single byte");
				var o = e.final.charCodeAt(0);
				if (t[0] > o || o > t[1]) throw new Error("final must be in range " + t[0] + " .. " + t[1]);
				return r <<= 8, r |= o
			}, r.prototype.identToString = function (e) {
				for (var t = []; e;) t.push(String.fromCharCode(255 & e)), e >>= 8;
				return t.reverse().join("")
			}, r.prototype.dispose = function () {
				this._csiHandlers = Object.create(null), this._executeHandlers = Object.create(null), this._escHandlers = Object.create(null), this._oscParser.dispose(), this._dcsParser.dispose()
			}, r.prototype.setPrintHandler = function (e) {
				this._printHandler = e
			}, r.prototype.clearPrintHandler = function () {
				this._printHandler = this._printHandlerFb
			}, r.prototype.addEscHandler = function (e, t) {
				var r = this._identifier(e, [48, 126]);
				void 0 === this._escHandlers[r] && (this._escHandlers[r] = []);
				var i = this._escHandlers[r];
				return i.push(t), {
					dispose: function () {
						var e = i.indexOf(t); - 1 !== e && i.splice(e, 1)
					}
				}
			}, r.prototype.setEscHandler = function (e, t) {
				this._escHandlers[this._identifier(e, [48, 126])] = [t]
			}, r.prototype.clearEscHandler = function (e) {
				this._escHandlers[this._identifier(e, [48, 126])] && delete this._escHandlers[this._identifier(e, [48, 126])]
			}, r.prototype.setEscHandlerFallback = function (e) {
				this._escHandlerFb = e
			}, r.prototype.setExecuteHandler = function (e, t) {
				this._executeHandlers[e.charCodeAt(0)] = t
			}, r.prototype.clearExecuteHandler = function (e) {
				this._executeHandlers[e.charCodeAt(0)] && delete this._executeHandlers[e.charCodeAt(0)]
			}, r.prototype.setExecuteHandlerFallback = function (e) {
				this._executeHandlerFb = e
			}, r.prototype.addCsiHandler = function (e, t) {
				var r = this._identifier(e);
				void 0 === this._csiHandlers[r] && (this._csiHandlers[r] = []);
				var i = this._csiHandlers[r];
				return i.push(t), {
					dispose: function () {
						var e = i.indexOf(t); - 1 !== e && i.splice(e, 1)
					}
				}
			}, r.prototype.setCsiHandler = function (e, t) {
				this._csiHandlers[this._identifier(e)] = [t]
			}, r.prototype.clearCsiHandler = function (e) {
				this._csiHandlers[this._identifier(e)] && delete this._csiHandlers[this._identifier(e)]
			}, r.prototype.setCsiHandlerFallback = function (e) {
				this._csiHandlerFb = e
			}, r.prototype.addDcsHandler = function (e, t) {
				return this._dcsParser.addHandler(this._identifier(e), t)
			}, r.prototype.setDcsHandler = function (e, t) {
				this._dcsParser.setHandler(this._identifier(e), t)
			}, r.prototype.clearDcsHandler = function (e) {
				this._dcsParser.clearHandler(this._identifier(e))
			}, r.prototype.setDcsHandlerFallback = function (e) {
				this._dcsParser.setHandlerFallback(e)
			}, r.prototype.addOscHandler = function (e, t) {
				return this._oscParser.addHandler(e, t)
			}, r.prototype.setOscHandler = function (e, t) {
				this._oscParser.setHandler(e, t)
			}, r.prototype.clearOscHandler = function (e) {
				this._oscParser.clearHandler(e)
			}, r.prototype.setOscHandlerFallback = function (e) {
				this._oscParser.setHandlerFallback(e)
			}, r.prototype.setErrorHandler = function (e) {
				this._errorHandler = e
			}, r.prototype.clearErrorHandler = function () {
				this._errorHandler = this._errorHandlerFb
			}, r.prototype.reset = function () {
				this.currentState = this.initialState, this._oscParser.reset(), this._dcsParser.reset(), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingCodepoint = 0
			}, r.prototype.parse = function (e, t) {
				for (var r = 0, i = 0, n = this.currentState, o = this._oscParser, s = this._dcsParser, a = this._collect, c = this._params, l = this.TRANSITIONS.table, h = 0; h < t; ++h) {
					switch ((i = l[n << 8 | ((r = e[h]) < 160 ? r : 160)]) >> 4) {
						case 2:
							for (var u = h + 1;; ++u) {
								if (u >= t || (r = e[u]) < 32 || r > 126 && r < 160) {
									this._printHandler(e, h, u), h = u - 1;
									break
								}
								if (++u >= t || (r = e[u]) < 32 || r > 126 && r < 160) {
									this._printHandler(e, h, u), h = u - 1;
									break
								}
								if (++u >= t || (r = e[u]) < 32 || r > 126 && r < 160) {
									this._printHandler(e, h, u), h = u - 1;
									break
								}
								if (++u >= t || (r = e[u]) < 32 || r > 126 && r < 160) {
									this._printHandler(e, h, u), h = u - 1;
									break
								}
							}
							break;
						case 3:
							this._executeHandlers[r] ? this._executeHandlers[r]() : this._executeHandlerFb(r), this.precedingCodepoint = 0;
							break;
						case 0:
							break;
						case 1:
							if (this._errorHandler({
									position: h,
									code: r,
									currentState: n,
									collect: a,
									params: c,
									abort: !1
								}).abort) return;
							break;
						case 7:
							for (var f = this._csiHandlers[a << 8 | r], _ = f ? f.length - 1 : -1; _ >= 0 && !1 === f[_](c); _--);
							_ < 0 && this._csiHandlerFb(a << 8 | r, c), this.precedingCodepoint = 0;
							break;
						case 8:
							do {
								switch (r) {
									case 59:
										c.addParam(0);
										break;
									case 58:
										c.addSubParam(-1);
										break;
									default:
										c.addDigit(r - 48)
								}
							} while (++h < t && (r = e[h]) > 47 && r < 60);
							h--;
							break;
						case 9:
							a <<= 8, a |= r;
							break;
						case 10:
							for (var d = this._escHandlers[a << 8 | r], p = d ? d.length - 1 : -1; p >= 0 && !1 === d[p](); p--);
							p < 0 && this._escHandlerFb(a << 8 | r), this.precedingCodepoint = 0;
							break;
						case 11:
							c.reset(), c.addParam(0), a = 0;
							break;
						case 12:
							s.hook(a << 8 | r, c);
							break;
						case 13:
							for (var v = h + 1;; ++v)
								if (v >= t || 24 === (r = e[v]) || 26 === r || 27 === r || r > 127 && r < 160) {
									s.put(e, h, v), h = v - 1;
									break
								} break;
						case 14:
							s.unhook(24 !== r && 26 !== r), 27 === r && (i |= 1), c.reset(), c.addParam(0), a = 0, this.precedingCodepoint = 0;
							break;
						case 4:
							o.start();
							break;
						case 5:
							for (var g = h + 1;; g++)
								if (g >= t || (r = e[g]) < 32 || r > 127 && r <= 159) {
									o.put(e, h, g), h = g - 1;
									break
								} break;
						case 6:
							o.end(24 !== r && 26 !== r), 27 === r && (i |= 1), c.reset(), c.addParam(0), a = 0, this.precedingCodepoint = 0
					}
					n = 15 & i
				}
				this._collect = a, this.currentState = n
			}, r
		}(o.Disposable);
		t.EscapeSequenceParser = u
	}, function (e, t, r) {
		"use strict";
		var i, n = this && this.__extends || (i = function (e, t) {
				return (i = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function (e, t) {
						e.__proto__ = t
					} || function (e, t) {
						for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
					})(e, t)
			}, function (e, t) {
				function r() {
					this.constructor = e
				}
				i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
			}),
			o = this && this.__decorate || function (e, t, r, i) {
				var n, o = arguments.length,
					s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
				return o > 3 && s && Object.defineProperty(t, r, s), s
			},
			s = this && this.__param || function (e, t) {
				return function (r, i) {
					t(r, i, e)
				}
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = r(41),
			c = r(47),
			l = r(48),
			h = r(49),
			u = r(28),
			f = r(2),
			_ = r(4),
			d = r(0),
			p = r(24),
			v = r(1),
			g = 1,
			y = function (e) {
				function t(t, r, i, n, o, s, f, _) {
					var d = e.call(this) || this;
					d._colors = t, d._screenElement = r, d._linkifier = i, d._bufferService = n, d._charSizeService = o, d._optionsService = s, d.coreService = f, d.coreBrowserService = _, d._id = g++, d._onRequestRefreshRows = new v.EventEmitter;
					var p = d._optionsService.options.allowTransparency;
					return d._characterJoinerRegistry = new u.CharacterJoinerRegistry(d._bufferService), d._renderLayers = [new a.TextRenderLayer(d._screenElement, 0, d._colors, d._characterJoinerRegistry, p, d._id, d._bufferService, s), new c.SelectionRenderLayer(d._screenElement, 1, d._colors, d._id, d._bufferService, s), new h.LinkRenderLayer(d._screenElement, 2, d._colors, d._id, d._linkifier, d._bufferService, s), new l.CursorRenderLayer(d._screenElement, 3, d._colors, d._id, d._onRequestRefreshRows, d._bufferService, s, f, _)], d.dimensions = {
						scaledCharWidth: 0,
						scaledCharHeight: 0,
						scaledCellWidth: 0,
						scaledCellHeight: 0,
						scaledCharLeft: 0,
						scaledCharTop: 0,
						scaledCanvasWidth: 0,
						scaledCanvasHeight: 0,
						canvasWidth: 0,
						canvasHeight: 0,
						actualCellWidth: 0,
						actualCellHeight: 0
					}, d._devicePixelRatio = window.devicePixelRatio, d._updateDimensions(), d.onOptionsChanged(), d
				}
				return n(t, e), Object.defineProperty(t.prototype, "onRequestRefreshRows", {
					get: function () {
						return this._onRequestRefreshRows.event
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.dispose = function () {
					e.prototype.dispose.call(this), this._renderLayers.forEach(function (e) {
						return e.dispose()
					}), p.removeTerminalFromCache(this._id)
				}, t.prototype.onDevicePixelRatioChange = function () {
					this._devicePixelRatio !== window.devicePixelRatio && (this._devicePixelRatio = window.devicePixelRatio, this.onResize(this._bufferService.cols, this._bufferService.rows))
				}, t.prototype.setColors = function (e) {
					var t = this;
					this._colors = e, this._renderLayers.forEach(function (e) {
						e.setColors(t._colors), e.reset()
					})
				}, t.prototype.onResize = function (e, t) {
					var r = this;
					this._updateDimensions(), this._renderLayers.forEach(function (e) {
						return e.resize(r.dimensions)
					}), this._screenElement.style.width = this.dimensions.canvasWidth + "px", this._screenElement.style.height = this.dimensions.canvasHeight + "px"
				}, t.prototype.onCharSizeChanged = function () {
					this.onResize(this._bufferService.cols, this._bufferService.rows)
				}, t.prototype.onBlur = function () {
					this._runOperation(function (e) {
						return e.onBlur()
					})
				}, t.prototype.onFocus = function () {
					this._runOperation(function (e) {
						return e.onFocus()
					})
				}, t.prototype.onSelectionChanged = function (e, t, r) {
					void 0 === r && (r = !1), this._runOperation(function (i) {
						return i.onSelectionChanged(e, t, r)
					})
				}, t.prototype.onCursorMove = function () {
					this._runOperation(function (e) {
						return e.onCursorMove()
					})
				}, t.prototype.onOptionsChanged = function () {
					this._runOperation(function (e) {
						return e.onOptionsChanged()
					})
				}, t.prototype.clear = function () {
					this._runOperation(function (e) {
						return e.reset()
					})
				}, t.prototype._runOperation = function (e) {
					this._renderLayers.forEach(function (t) {
						return e(t)
					})
				}, t.prototype.renderRows = function (e, t) {
					this._renderLayers.forEach(function (r) {
						return r.onGridChanged(e, t)
					})
				}, t.prototype._updateDimensions = function () {
					this._charSizeService.hasValidSize && (this.dimensions.scaledCharWidth = Math.floor(this._charSizeService.width * window.devicePixelRatio), this.dimensions.scaledCharHeight = Math.ceil(this._charSizeService.height * window.devicePixelRatio), this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._optionsService.options.lineHeight), this.dimensions.scaledCharTop = 1 === this._optionsService.options.lineHeight ? 0 : Math.round((this.dimensions.scaledCellHeight - this.dimensions.scaledCharHeight) / 2), this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._optionsService.options.letterSpacing), this.dimensions.scaledCharLeft = Math.floor(this._optionsService.options.letterSpacing / 2), this.dimensions.scaledCanvasHeight = this._bufferService.rows * this.dimensions.scaledCellHeight, this.dimensions.scaledCanvasWidth = this._bufferService.cols * this.dimensions.scaledCellWidth, this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio), this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio), this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._bufferService.rows, this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._bufferService.cols)
				}, t.prototype.registerCharacterJoiner = function (e) {
					return this._characterJoinerRegistry.registerCharacterJoiner(e)
				}, t.prototype.deregisterCharacterJoiner = function (e) {
					return this._characterJoinerRegistry.deregisterCharacterJoiner(e)
				}, t = o([s(3, d.IBufferService), s(4, _.ICharSizeService), s(5, d.IOptionsService), s(6, d.ICoreService), s(7, _.ICoreBrowserService)], t)
			}(f.Disposable);
		t.Renderer = y
	}, function (e, t, r) {
		"use strict";
		var i, n = this && this.__extends || (i = function (e, t) {
			return (i = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (e, t) {
					e.__proto__ = t
				} || function (e, t) {
					for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
				})(e, t)
		}, function (e, t) {
			function r() {
				this.constructor = e
			}
			i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
		});
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(42),
			s = r(13),
			a = r(6),
			c = r(3),
			l = r(28),
			h = r(5),
			u = function (e) {
				function t(t, r, i, n, s, a, c, l) {
					var u = e.call(this, t, "text", r, s, i, a, c, l) || this;
					return u.bufferService = c, u.optionsService = l, u._characterWidth = 0, u._characterFont = "", u._characterOverlapCache = {}, u._workCell = new h.CellData, u._state = new o.GridCache, u._characterJoinerRegistry = n, u
				}
				return n(t, e), t.prototype.resize = function (t) {
					e.prototype.resize.call(this, t);
					var r = this._getFont(!1, !1);
					this._characterWidth === t.scaledCharWidth && this._characterFont === r || (this._characterWidth = t.scaledCharWidth, this._characterFont = r, this._characterOverlapCache = {}), this._state.clear(), this._state.resize(this._bufferService.cols, this._bufferService.rows)
				}, t.prototype.reset = function () {
					this._state.clear(), this._clearAll()
				}, t.prototype._forEachCell = function (e, t, r, i) {
					for (var n = e; n <= t; n++)
						for (var o = n + this._bufferService.buffer.ydisp, s = this._bufferService.buffer.lines.get(o), a = r ? r.getJoinedCharacters(o) : [], h = 0; h < this._bufferService.cols; h++) {
							s.loadCell(h, this._workCell);
							var u = this._workCell,
								f = !1,
								_ = h;
							if (0 !== u.getWidth()) {
								if (a.length > 0 && h === a[0][0]) {
									f = !0;
									var d = a.shift();
									u = new l.JoinedCellData(this._workCell, s.translateToString(!0, d[0], d[1]), d[1] - d[0]), _ = d[1] - 1
								}!f && this._isOverlapping(u) && _ < s.length - 1 && s.getCodePoint(_ + 1) === c.NULL_CELL_CODE && (u.content &= -12582913, u.content |= 2 << 22), i(u, h, n), h = _
							}
						}
				}, t.prototype._drawBackground = function (e, t) {
					var r = this,
						i = this._ctx,
						n = this._bufferService.cols,
						o = 0,
						s = 0,
						c = null;
					i.save(), this._forEachCell(e, t, null, function (e, t, l) {
						var h = null;
						e.isInverse() ? h = e.isFgDefault() ? r._colors.foreground.css : e.isFgRGB() ? "rgb(" + a.AttributeData.toColorRGB(e.getFgColor()).join(",") + ")" : r._colors.ansi[e.getFgColor()].css : e.isBgRGB() ? h = "rgb(" + a.AttributeData.toColorRGB(e.getBgColor()).join(",") + ")" : e.isBgPalette() && (h = r._colors.ansi[e.getBgColor()].css), null === c && (o = t, s = l), l !== s ? (i.fillStyle = c || "", r._fillCells(o, s, n - o, 1), o = t, s = l) : c !== h && (i.fillStyle = c || "", r._fillCells(o, s, t - o, 1), o = t, s = l), c = h
					}), null !== c && (i.fillStyle = c, this._fillCells(o, s, n - o, 1)), i.restore()
				}, t.prototype._drawForeground = function (e, t) {
					var r = this;
					this._forEachCell(e, t, this._characterJoinerRegistry, function (e, t, i) {
						if (!e.isInvisible() && (r._drawChars(e, t, i), e.isUnderline())) {
							if (r._ctx.save(), e.isInverse())
								if (e.isBgDefault()) r._ctx.fillStyle = r._colors.background.css;
								else if (e.isBgRGB()) r._ctx.fillStyle = "rgb(" + a.AttributeData.toColorRGB(e.getBgColor()).join(",") + ")";
							else {
								var n = e.getBgColor();
								r._optionsService.options.drawBoldTextInBrightColors && e.isBold() && n < 8 && (n += 8), r._ctx.fillStyle = r._colors.ansi[n].css
							} else if (e.isFgDefault()) r._ctx.fillStyle = r._colors.foreground.css;
							else if (e.isFgRGB()) r._ctx.fillStyle = "rgb(" + a.AttributeData.toColorRGB(e.getFgColor()).join(",") + ")";
							else {
								var o = e.getFgColor();
								r._optionsService.options.drawBoldTextInBrightColors && e.isBold() && o < 8 && (o += 8), r._ctx.fillStyle = r._colors.ansi[o].css
							}
							r._fillBottomLineAtCells(t, i, e.getWidth()), r._ctx.restore()
						}
					})
				}, t.prototype.onGridChanged = function (e, t) {
					0 !== this._state.cache.length && (this._charAtlas && this._charAtlas.beginFrame(), this._clearCells(0, e, this._bufferService.cols, t - e + 1), this._drawBackground(e, t), this._drawForeground(e, t))
				}, t.prototype.onOptionsChanged = function () {
					this._setTransparency(this._optionsService.options.allowTransparency)
				}, t.prototype._isOverlapping = function (e) {
					if (1 !== e.getWidth()) return !1;
					if (e.getCode() < 256) return !1;
					var t = e.getChars();
					if (this._characterOverlapCache.hasOwnProperty(t)) return this._characterOverlapCache[t];
					this._ctx.save(), this._ctx.font = this._characterFont;
					var r = Math.floor(this._ctx.measureText(t).width) > this._characterWidth;
					return this._ctx.restore(), this._characterOverlapCache[t] = r, r
				}, t
			}(s.BaseRenderLayer);
		t.TextRenderLayer = u
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
			function e() {
				this.cache = []
			}
			return e.prototype.resize = function (e, t) {
				for (var r = 0; r < e; r++) {
					this.cache.length <= r && this.cache.push([]);
					for (var i = this.cache[r].length; i < t; i++) this.cache[r].push(void 0);
					this.cache[r].length = t
				}
				this.cache.length = e
			}, e.prototype.clear = function () {
				for (var e = 0; e < this.cache.length; e++)
					for (var t = 0; t < this.cache[e].length; t++) this.cache[e][t] = void 0
			}, e
		}();
		t.GridCache = i
	}, function (e, t, r) {
		"use strict";
		var i, n = this && this.__extends || (i = function (e, t) {
			return (i = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (e, t) {
					e.__proto__ = t
				} || function (e, t) {
					for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
				})(e, t)
		}, function (e, t) {
			function r() {
				this.constructor = e
			}
			i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
		});
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(9),
			s = r(44),
			a = r(26),
			c = r(46),
			l = r(11),
			h = r(27),
			u = r(10),
			f = 1024,
			_ = 1024,
			d = {
				css: "rgba(0, 0, 0, 0)",
				rgba: 0
			};

		function p(e) {
			return e.code << 21 | e.bg << 12 | e.fg << 3 | (e.bold ? 0 : 4) + (e.dim ? 0 : 2) + (e.italic ? 0 : 1)
		}
		t.getGlyphCacheKey = p;
		var v = function (e) {
			function t(t, r) {
				var i = e.call(this) || this;
				i._config = r, i._drawToCacheCount = 0, i._glyphsWaitingOnBitmap = [], i._bitmapCommitTimeout = null, i._bitmap = null, i._cacheCanvas = t.createElement("canvas"), i._cacheCanvas.width = f, i._cacheCanvas.height = _, i._cacheCtx = h.throwIfFalsy(i._cacheCanvas.getContext("2d", {
					alpha: !0
				}));
				var n = t.createElement("canvas");
				n.width = i._config.scaledCharWidth, n.height = i._config.scaledCharHeight, i._tmpCtx = h.throwIfFalsy(n.getContext("2d", {
					alpha: i._config.allowTransparency
				})), i._width = Math.floor(f / i._config.scaledCharWidth), i._height = Math.floor(_ / i._config.scaledCharHeight);
				var o = i._width * i._height;
				return i._cacheMap = new c.LRUMap(o), i._cacheMap.prealloc(o), i
			}
			return n(t, e), t.prototype.dispose = function () {
				null !== this._bitmapCommitTimeout && (window.clearTimeout(this._bitmapCommitTimeout), this._bitmapCommitTimeout = null)
			}, t.prototype.beginFrame = function () {
				this._drawToCacheCount = 0
			}, t.prototype.draw = function (e, t, r, i) {
				if (32 === t.code) return !0;
				if (!this._canCache(t)) return !1;
				var n = p(t),
					o = this._cacheMap.get(n);
				if (null != o) return this._drawFromCache(e, o, r, i), !0;
				if (this._drawToCacheCount < 100) {
					var s = void 0;
					s = this._cacheMap.size < this._cacheMap.capacity ? this._cacheMap.size : this._cacheMap.peek().index;
					var a = this._drawToCache(t, s);
					return this._cacheMap.set(n, a), this._drawFromCache(e, a, r, i), !0
				}
				return !1
			}, t.prototype._canCache = function (e) {
				return e.code < 256
			}, t.prototype._toCoordinateX = function (e) {
				return e % this._width * this._config.scaledCharWidth
			}, t.prototype._toCoordinateY = function (e) {
				return Math.floor(e / this._width) * this._config.scaledCharHeight
			}, t.prototype._drawFromCache = function (e, t, r, i) {
				if (!t.isEmpty) {
					var n = this._toCoordinateX(t.index),
						o = this._toCoordinateY(t.index);
					e.drawImage(t.inBitmap ? this._bitmap : this._cacheCanvas, n, o, this._config.scaledCharWidth, this._config.scaledCharHeight, r, i, this._config.scaledCharWidth, this._config.scaledCharHeight)
				}
			}, t.prototype._getColorFromAnsiIndex = function (e) {
				return e < this._config.colors.ansi.length ? this._config.colors.ansi[e] : a.DEFAULT_ANSI_COLORS[e]
			}, t.prototype._getBackgroundColor = function (e) {
				return this._config.allowTransparency ? d : e.bg === o.INVERTED_DEFAULT_COLOR ? this._config.colors.foreground : e.bg < 256 ? this._getColorFromAnsiIndex(e.bg) : this._config.colors.background
			}, t.prototype._getForegroundColor = function (e) {
				return e.fg === o.INVERTED_DEFAULT_COLOR ? u.opaque(this._config.colors.background) : e.fg < 256 ? this._getColorFromAnsiIndex(e.fg) : this._config.colors.foreground
			}, t.prototype._drawToCache = function (e, t) {
				this._drawToCacheCount++, this._tmpCtx.save();
				var r = this._getBackgroundColor(e);
				this._tmpCtx.globalCompositeOperation = "copy", this._tmpCtx.fillStyle = r.css, this._tmpCtx.fillRect(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight), this._tmpCtx.globalCompositeOperation = "source-over";
				var i = e.bold ? this._config.fontWeightBold : this._config.fontWeight,
					n = e.italic ? "italic" : "";
				this._tmpCtx.font = n + " " + i + " " + this._config.fontSize * this._config.devicePixelRatio + "px " + this._config.fontFamily, this._tmpCtx.textBaseline = "middle", this._tmpCtx.fillStyle = this._getForegroundColor(e).css, e.dim && (this._tmpCtx.globalAlpha = o.DIM_OPACITY), this._tmpCtx.fillText(e.chars, 0, this._config.scaledCharHeight / 2), this._tmpCtx.restore();
				var s = this._tmpCtx.getImageData(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight),
					a = !1;
				this._config.allowTransparency || (a = function (e, t) {
					for (var r = !0, i = t.rgba >>> 24, n = t.rgba >>> 16 & 255, o = t.rgba >>> 8 & 255, s = 0; s < e.data.length; s += 4) e.data[s] === i && e.data[s + 1] === n && e.data[s + 2] === o ? e.data[s + 3] = 0 : r = !1;
					return r
				}(s, r));
				var c = this._toCoordinateX(t),
					l = this._toCoordinateY(t);
				this._cacheCtx.putImageData(s, c, l);
				var h = {
					index: t,
					isEmpty: a,
					inBitmap: !1
				};
				return this._addGlyphToBitmap(h), h
			}, t.prototype._addGlyphToBitmap = function (e) {
				var t = this;
				"createImageBitmap" in window && !l.isFirefox && !l.isSafari && (this._glyphsWaitingOnBitmap.push(e), null === this._bitmapCommitTimeout && (this._bitmapCommitTimeout = window.setTimeout(function () {
					return t._generateBitmap()
				}, 100)))
			}, t.prototype._generateBitmap = function () {
				var e = this,
					t = this._glyphsWaitingOnBitmap;
				this._glyphsWaitingOnBitmap = [], window.createImageBitmap(this._cacheCanvas).then(function (r) {
					e._bitmap = r;
					for (var i = 0; i < t.length; i++) {
						t[i].inBitmap = !0
					}
				}), this._bitmapCommitTimeout = null
			}, t
		}(s.BaseCharAtlas);
		t.DynamicCharAtlas = v;
		var g = function (e) {
			function t(t, r) {
				return e.call(this) || this
			}
			return n(t, e), t.prototype.draw = function (e, t, r, i) {
				return !1
			}, t
		}(s.BaseCharAtlas);
		t.NoneCharAtlas = g
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
			function e() {
				this._didWarmUp = !1
			}
			return e.prototype.dispose = function () {}, e.prototype.warmUp = function () {
				this._didWarmUp || (this._doWarmUp(), this._didWarmUp = !0)
			}, e.prototype._doWarmUp = function () {}, e.prototype.beginFrame = function () {}, e
		}();
		t.BaseCharAtlas = i
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
			function e() {
				this._color = {}, this._rgba = {}
			}
			return e.prototype.clear = function () {
				this._color = {}, this._rgba = {}
			}, e.prototype.setCss = function (e, t, r) {
				this._rgba[e] || (this._rgba[e] = {}), this._rgba[e][t] = r
			}, e.prototype.getCss = function (e, t) {
				return this._rgba[e] ? this._rgba[e][t] : void 0
			}, e.prototype.setColor = function (e, t, r) {
				this._color[e] || (this._color[e] = {}), this._color[e][t] = r
			}, e.prototype.getColor = function (e, t) {
				return this._color[e] ? this._color[e][t] : void 0
			}, e
		}();
		t.ColorContrastCache = i
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
			function e(e) {
				this.capacity = e, this._map = {}, this._head = null, this._tail = null, this._nodePool = [], this.size = 0
			}
			return e.prototype._unlinkNode = function (e) {
				var t = e.prev,
					r = e.next;
				e === this._head && (this._head = r), e === this._tail && (this._tail = t), null !== t && (t.next = r), null !== r && (r.prev = t)
			}, e.prototype._appendNode = function (e) {
				var t = this._tail;
				null !== t && (t.next = e), e.prev = t, e.next = null, this._tail = e, null === this._head && (this._head = e)
			}, e.prototype.prealloc = function (e) {
				for (var t = this._nodePool, r = 0; r < e; r++) t.push({
					prev: null,
					next: null,
					key: null,
					value: null
				})
			}, e.prototype.get = function (e) {
				var t = this._map[e];
				return void 0 !== t ? (this._unlinkNode(t), this._appendNode(t), t.value) : null
			}, e.prototype.peekValue = function (e) {
				var t = this._map[e];
				return void 0 !== t ? t.value : null
			}, e.prototype.peek = function () {
				var e = this._head;
				return null === e ? null : e.value
			}, e.prototype.set = function (e, t) {
				var r = this._map[e];
				if (void 0 !== r) r = this._map[e], this._unlinkNode(r), r.value = t;
				else if (this.size >= this.capacity) r = this._head, this._unlinkNode(r), delete this._map[r.key], r.key = e, r.value = t, this._map[e] = r;
				else {
					var i = this._nodePool;
					i.length > 0 ? ((r = i.pop()).key = e, r.value = t) : r = {
						prev: null,
						next: null,
						key: e,
						value: t
					}, this._map[e] = r, this.size++
				}
				this._appendNode(r)
			}, e
		}();
		t.LRUMap = i
	}, function (e, t, r) {
		"use strict";
		var i, n = this && this.__extends || (i = function (e, t) {
			return (i = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (e, t) {
					e.__proto__ = t
				} || function (e, t) {
					for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
				})(e, t)
		}, function (e, t) {
			function r() {
				this.constructor = e
			}
			i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
		});
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = function (e) {
			function t(t, r, i, n, o, s) {
				var a = e.call(this, t, "selection", r, !0, i, n, o, s) || this;
				return a.bufferService = o, a.optionsService = s, a._clearState(), a
			}
			return n(t, e), t.prototype._clearState = function () {
				this._state = {
					start: void 0,
					end: void 0,
					columnSelectMode: void 0,
					ydisp: void 0
				}
			}, t.prototype.resize = function (t) {
				e.prototype.resize.call(this, t), this._clearState()
			}, t.prototype.reset = function () {
				this._state.start && this._state.end && (this._clearState(), this._clearAll())
			}, t.prototype.onSelectionChanged = function (e, t, r) {
				if (this._didStateChange(e, t, r, this._bufferService.buffer.ydisp))
					if (this._clearAll(), e && t) {
						var i = e[1] - this._bufferService.buffer.ydisp,
							n = t[1] - this._bufferService.buffer.ydisp,
							o = Math.max(i, 0),
							s = Math.min(n, this._bufferService.rows - 1);
						if (!(o >= this._bufferService.rows || s < 0)) {
							if (this._ctx.fillStyle = this._colors.selection.css, r) {
								var a = e[0],
									c = t[0] - a,
									l = s - o + 1;
								this._fillCells(a, o, c, l)
							} else {
								a = i === o ? e[0] : 0;
								var h = o === s ? t[0] : this._bufferService.cols;
								this._fillCells(a, o, h - a, 1);
								var u = Math.max(s - o - 1, 0);
								if (this._fillCells(0, o + 1, this._bufferService.cols, u), o !== s) {
									var f = n === s ? t[0] : this._bufferService.cols;
									this._fillCells(0, s, f, 1)
								}
							}
							this._state.start = [e[0], e[1]], this._state.end = [t[0], t[1]], this._state.columnSelectMode = r, this._state.ydisp = this._bufferService.buffer.ydisp
						}
					} else this._clearState()
			}, t.prototype._didStateChange = function (e, t, r, i) {
				return !this._areCoordinatesEqual(e, this._state.start) || !this._areCoordinatesEqual(t, this._state.end) || r !== this._state.columnSelectMode || i !== this._state.ydisp
			}, t.prototype._areCoordinatesEqual = function (e, t) {
				return !(!e || !t) && (e[0] === t[0] && e[1] === t[1])
			}, t
		}(r(13).BaseRenderLayer);
		t.SelectionRenderLayer = o
	}, function (e, t, r) {
		"use strict";
		var i, n = this && this.__extends || (i = function (e, t) {
			return (i = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (e, t) {
					e.__proto__ = t
				} || function (e, t) {
					for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
				})(e, t)
		}, function (e, t) {
			function r() {
				this.constructor = e
			}
			i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
		});
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(13),
			s = r(5),
			a = function (e) {
				function t(t, r, i, n, o, a, c, l, h) {
					var u = e.call(this, t, "cursor", r, !0, i, n, a, c) || this;
					return u._onRequestRefreshRowsEvent = o, u.bufferService = a, u.optionsService = c, u._coreService = l, u._coreBrowserService = h, u._cell = new s.CellData, u._state = {
						x: 0,
						y: 0,
						isFocused: !1,
						style: "",
						width: 0
					}, u._cursorRenderers = {
						bar: u._renderBarCursor.bind(u),
						block: u._renderBlockCursor.bind(u),
						underline: u._renderUnderlineCursor.bind(u)
					}, u
				}
				return n(t, e), t.prototype.resize = function (t) {
					e.prototype.resize.call(this, t), this._state = {
						x: 0,
						y: 0,
						isFocused: !1,
						style: "",
						width: 0
					}
				}, t.prototype.reset = function () {
					this._clearCursor(), this._cursorBlinkStateManager && (this._cursorBlinkStateManager.dispose(), this._cursorBlinkStateManager = void 0, this.onOptionsChanged())
				}, t.prototype.onBlur = function () {
					this._cursorBlinkStateManager && this._cursorBlinkStateManager.pause(), this._onRequestRefreshRowsEvent.fire({
						start: this._bufferService.buffer.y,
						end: this._bufferService.buffer.y
					})
				}, t.prototype.onFocus = function () {
					this._cursorBlinkStateManager ? this._cursorBlinkStateManager.resume() : this._onRequestRefreshRowsEvent.fire({
						start: this._bufferService.buffer.y,
						end: this._bufferService.buffer.y
					})
				}, t.prototype.onOptionsChanged = function () {
					var e, t = this;
					this._optionsService.options.cursorBlink ? this._cursorBlinkStateManager || (this._cursorBlinkStateManager = new c(this._coreBrowserService.isFocused, function () {
						t._render(!0)
					})) : (null === (e = this._cursorBlinkStateManager) || void 0 === e || e.dispose(), this._cursorBlinkStateManager = void 0), this._onRequestRefreshRowsEvent.fire({
						start: this._bufferService.buffer.y,
						end: this._bufferService.buffer.y
					})
				}, t.prototype.onCursorMove = function () {
					this._cursorBlinkStateManager && this._cursorBlinkStateManager.restartBlinkAnimation()
				}, t.prototype.onGridChanged = function (e, t) {
					!this._cursorBlinkStateManager || this._cursorBlinkStateManager.isPaused ? this._render(!1) : this._cursorBlinkStateManager.restartBlinkAnimation()
				}, t.prototype._render = function (e) {
					if (this._coreService.isCursorInitialized && !this._coreService.isCursorHidden) {
						var t = this._bufferService.buffer.ybase + this._bufferService.buffer.y,
							r = t - this._bufferService.buffer.ydisp;
						if (r < 0 || r >= this._bufferService.rows) this._clearCursor();
						else if (this._bufferService.buffer.lines.get(t).loadCell(this._bufferService.buffer.x, this._cell), void 0 !== this._cell.content) {
							if (!this._coreBrowserService.isFocused) {
								this._clearCursor(), this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css;
								var i = this._optionsService.options.cursorStyle;
								return i && "block" !== i ? this._cursorRenderers[i](this._bufferService.buffer.x, r, this._cell) : this._renderBlurCursor(this._bufferService.buffer.x, r, this._cell), this._ctx.restore(), this._state.x = this._bufferService.buffer.x, this._state.y = r, this._state.isFocused = !1, this._state.style = i, void(this._state.width = this._cell.getWidth())
							}
							if (!this._cursorBlinkStateManager || this._cursorBlinkStateManager.isCursorVisible) {
								if (this._state) {
									if (this._state.x === this._bufferService.buffer.x && this._state.y === r && this._state.isFocused === this._coreBrowserService.isFocused && this._state.style === this._optionsService.options.cursorStyle && this._state.width === this._cell.getWidth()) return;
									this._clearCursor()
								}
								this._ctx.save(), this._cursorRenderers[this._optionsService.options.cursorStyle || "block"](this._bufferService.buffer.x, r, this._cell), this._ctx.restore(), this._state.x = this._bufferService.buffer.x, this._state.y = r, this._state.isFocused = !1, this._state.style = this._optionsService.options.cursorStyle, this._state.width = this._cell.getWidth()
							} else this._clearCursor()
						}
					} else this._clearCursor()
				}, t.prototype._clearCursor = function () {
					this._state && (this._clearCells(this._state.x, this._state.y, this._state.width, 1), this._state = {
						x: 0,
						y: 0,
						isFocused: !1,
						style: "",
						width: 0
					})
				}, t.prototype._renderBarCursor = function (e, t, r) {
					this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillLeftLineAtCell(e, t), this._ctx.restore()
				}, t.prototype._renderBlockCursor = function (e, t, r) {
					this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillCells(e, t, r.getWidth(), 1), this._ctx.fillStyle = this._colors.cursorAccent.css, this._fillCharTrueColor(r, e, t), this._ctx.restore()
				}, t.prototype._renderUnderlineCursor = function (e, t, r) {
					this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillBottomLineAtCells(e, t), this._ctx.restore()
				}, t.prototype._renderBlurCursor = function (e, t, r) {
					this._ctx.save(), this._ctx.strokeStyle = this._colors.cursor.css, this._strokeRectAtCell(e, t, r.getWidth(), 1), this._ctx.restore()
				}, t
			}(o.BaseRenderLayer);
		t.CursorRenderLayer = a;
		var c = function () {
			function e(e, t) {
				this._renderCallback = t, this.isCursorVisible = !0, e && this._restartInterval()
			}
			return Object.defineProperty(e.prototype, "isPaused", {
				get: function () {
					return !(this._blinkStartTimeout || this._blinkInterval)
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.dispose = function () {
				this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0)
			}, e.prototype.restartBlinkAnimation = function () {
				var e = this;
				this.isPaused || (this._animationTimeRestarted = Date.now(), this.isCursorVisible = !0, this._animationFrame || (this._animationFrame = window.requestAnimationFrame(function () {
					e._renderCallback(), e._animationFrame = void 0
				})))
			}, e.prototype._restartInterval = function (e) {
				var t = this;
				void 0 === e && (e = 600), this._blinkInterval && window.clearInterval(this._blinkInterval), this._blinkStartTimeout = setTimeout(function () {
					if (t._animationTimeRestarted) {
						var e = 600 - (Date.now() - t._animationTimeRestarted);
						if (t._animationTimeRestarted = void 0, e > 0) return void t._restartInterval(e)
					}
					t.isCursorVisible = !1, t._animationFrame = window.requestAnimationFrame(function () {
						t._renderCallback(), t._animationFrame = void 0
					}), t._blinkInterval = setInterval(function () {
						if (t._animationTimeRestarted) {
							var e = 600 - (Date.now() - t._animationTimeRestarted);
							return t._animationTimeRestarted = void 0, void t._restartInterval(e)
						}
						t.isCursorVisible = !t.isCursorVisible, t._animationFrame = window.requestAnimationFrame(function () {
							t._renderCallback(), t._animationFrame = void 0
						})
					}, 600)
				}, e)
			}, e.prototype.pause = function () {
				this.isCursorVisible = !0, this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0)
			}, e.prototype.resume = function () {
				this._animationTimeRestarted = void 0, this._restartInterval(), this.restartBlinkAnimation()
			}, e
		}()
	}, function (e, t, r) {
		"use strict";
		var i, n = this && this.__extends || (i = function (e, t) {
			return (i = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (e, t) {
					e.__proto__ = t
				} || function (e, t) {
					for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
				})(e, t)
		}, function (e, t) {
			function r() {
				this.constructor = e
			}
			i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
		});
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(13),
			s = r(9),
			a = r(25),
			c = function (e) {
				function t(t, r, i, n, o, s, a) {
					var c = e.call(this, t, "link", r, !0, i, n, s, a) || this;
					return c.bufferService = s, c.optionsService = a, o.onLinkHover(function (e) {
						return c._onLinkHover(e)
					}), o.onLinkLeave(function (e) {
						return c._onLinkLeave(e)
					}), c
				}
				return n(t, e), t.prototype.resize = function (t) {
					e.prototype.resize.call(this, t), this._state = void 0
				}, t.prototype.reset = function () {
					this._clearCurrentLink()
				}, t.prototype._clearCurrentLink = function () {
					if (this._state) {
						this._clearCells(this._state.x1, this._state.y1, this._state.cols - this._state.x1, 1);
						var e = this._state.y2 - this._state.y1 - 1;
						e > 0 && this._clearCells(0, this._state.y1 + 1, this._state.cols, e), this._clearCells(0, this._state.y2, this._state.x2, 1), this._state = void 0
					}
				}, t.prototype._onLinkHover = function (e) {
					if (e.fg === s.INVERTED_DEFAULT_COLOR ? this._ctx.fillStyle = this._colors.background.css : e.fg && a.is256Color(e.fg) ? this._ctx.fillStyle = this._colors.ansi[e.fg].css : this._ctx.fillStyle = this._colors.foreground.css, e.y1 === e.y2) this._fillBottomLineAtCells(e.x1, e.y1, e.x2 - e.x1);
					else {
						this._fillBottomLineAtCells(e.x1, e.y1, e.cols - e.x1);
						for (var t = e.y1 + 1; t < e.y2; t++) this._fillBottomLineAtCells(0, t, e.cols);
						this._fillBottomLineAtCells(0, e.y2, e.x2)
					}
					this._state = e
				}, t.prototype._onLinkLeave = function (e) {
					this._clearCurrentLink()
				}, t
			}(o.BaseRenderLayer);
		t.LinkRenderLayer = c
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(19),
			n = r(1),
			o = function () {
				function e(e, t) {
					this._bufferService = e, this._logService = t, this._linkMatchers = [], this._nextLinkMatcherId = 0, this._onLinkHover = new n.EventEmitter, this._onLinkLeave = new n.EventEmitter, this._onLinkTooltip = new n.EventEmitter, this._rowsToLinkify = {
						start: void 0,
						end: void 0
					}
				}
				return Object.defineProperty(e.prototype, "onLinkHover", {
					get: function () {
						return this._onLinkHover.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onLinkLeave", {
					get: function () {
						return this._onLinkLeave.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onLinkTooltip", {
					get: function () {
						return this._onLinkTooltip.event
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.attachToDom = function (e, t) {
					this._element = e, this._mouseZoneManager = t
				}, e.prototype.linkifyRows = function (t, r) {
					var i = this;
					this._mouseZoneManager && (void 0 === this._rowsToLinkify.start || void 0 === this._rowsToLinkify.end ? (this._rowsToLinkify.start = t, this._rowsToLinkify.end = r) : (this._rowsToLinkify.start = Math.min(this._rowsToLinkify.start, t), this._rowsToLinkify.end = Math.max(this._rowsToLinkify.end, r)), this._mouseZoneManager.clearAll(t, r), this._rowsTimeoutId && clearTimeout(this._rowsTimeoutId), this._rowsTimeoutId = setTimeout(function () {
						return i._linkifyRows()
					}, e._timeBeforeLatency))
				}, e.prototype._linkifyRows = function () {
					this._rowsTimeoutId = void 0;
					var e = this._bufferService.buffer;
					if (void 0 !== this._rowsToLinkify.start && void 0 !== this._rowsToLinkify.end) {
						var t = e.ydisp + this._rowsToLinkify.start;
						if (!(t >= e.lines.length)) {
							for (var r = e.ydisp + Math.min(this._rowsToLinkify.end, this._bufferService.rows) + 1, i = Math.ceil(2e3 / this._bufferService.cols), n = this._bufferService.buffer.iterator(!1, t, r, i, i); n.hasNext();)
								for (var o = n.next(), s = 0; s < this._linkMatchers.length; s++) this._doLinkifyRow(o.range.first, o.content, this._linkMatchers[s]);
							this._rowsToLinkify.start = void 0, this._rowsToLinkify.end = void 0
						}
					} else this._logService.debug("_rowToLinkify was unset before _linkifyRows was called")
				}, e.prototype.registerLinkMatcher = function (e, t, r) {
					if (void 0 === r && (r = {}), !t) throw new Error("handler must be defined");
					var i = {
						id: this._nextLinkMatcherId++,
						regex: e,
						handler: t,
						matchIndex: r.matchIndex,
						validationCallback: r.validationCallback,
						hoverTooltipCallback: r.tooltipCallback,
						hoverLeaveCallback: r.leaveCallback,
						willLinkActivate: r.willLinkActivate,
						priority: r.priority || 0
					};
					return this._addLinkMatcherToList(i), i.id
				}, e.prototype._addLinkMatcherToList = function (e) {
					if (0 !== this._linkMatchers.length) {
						for (var t = this._linkMatchers.length - 1; t >= 0; t--)
							if (e.priority <= this._linkMatchers[t].priority) return void this._linkMatchers.splice(t + 1, 0, e);
						this._linkMatchers.splice(0, 0, e)
					} else this._linkMatchers.push(e)
				}, e.prototype.deregisterLinkMatcher = function (e) {
					for (var t = 0; t < this._linkMatchers.length; t++)
						if (this._linkMatchers[t].id === e) return this._linkMatchers.splice(t, 1), !0;
					return !1
				}, e.prototype._doLinkifyRow = function (e, t, r) {
					for (var i, n = this, o = new RegExp(r.regex.source, (r.regex.flags || "") + "g"), s = -1, a = function () {
							var a = i["number" != typeof r.matchIndex ? 0 : r.matchIndex];
							if (!a) return c._logService.debug("match found without corresponding matchIndex", i, r), "break";
							if (s = t.indexOf(a, s + 1), o.lastIndex = s + a.length, s < 0) return "break";
							var l = c._bufferService.buffer.stringIndexToBufferIndex(e, s);
							if (l[0] < 0) return "break";
							var h = c._bufferService.buffer.lines.get(l[0]);
							if (!h) return "break";
							var u = h.getFg(l[1]),
								f = u ? u >> 9 & 511 : void 0;
							r.validationCallback ? r.validationCallback(a, function (e) {
								n._rowsTimeoutId || e && n._addLink(l[1], l[0] - n._bufferService.buffer.ydisp, a, r, f)
							}) : c._addLink(l[1], l[0] - c._bufferService.buffer.ydisp, a, r, f)
						}, c = this; null !== (i = o.exec(t));) {
						if ("break" === a()) break
					}
				}, e.prototype._addLink = function (e, t, r, n, o) {
					var a = this;
					if (this._mouseZoneManager && this._element) {
						var c = i.getStringCellWidth(r),
							l = e % this._bufferService.cols,
							h = t + Math.floor(e / this._bufferService.cols),
							u = (l + c) % this._bufferService.cols,
							f = h + Math.floor((l + c) / this._bufferService.cols);
						0 === u && (u = this._bufferService.cols, f--), this._mouseZoneManager.add(new s(l + 1, h + 1, u + 1, f + 1, function (e) {
							if (n.handler) return n.handler(e, r);
							window.open(r, "_blank")
						}, function () {
							a._onLinkHover.fire(a._createLinkHoverEvent(l, h, u, f, o)), a._element.classList.add("xterm-cursor-pointer")
						}, function (e) {
							a._onLinkTooltip.fire(a._createLinkHoverEvent(l, h, u, f, o)), n.hoverTooltipCallback && n.hoverTooltipCallback(e, r, {
								start: {
									x: l,
									y: h
								},
								end: {
									x: u,
									y: f
								}
							})
						}, function () {
							a._onLinkLeave.fire(a._createLinkHoverEvent(l, h, u, f, o)), a._element.classList.remove("xterm-cursor-pointer"), n.hoverLeaveCallback && n.hoverLeaveCallback()
						}, function (e) {
							return !n.willLinkActivate || n.willLinkActivate(e, r)
						}))
					}
				}, e.prototype._createLinkHoverEvent = function (e, t, r, i, n) {
					return {
						x1: e,
						y1: t,
						x2: r,
						y2: i,
						cols: this._bufferService.cols,
						fg: n
					}
				}, e._timeBeforeLatency = 200, e
			}();
		t.Linkifier = o;
		var s = function (e, t, r, i, n, o, s, a, c) {
			this.x1 = e, this.y1 = t, this.x2 = r, this.y2 = i, this.clickCallback = n, this.hoverCallback = o, this.tooltipCallback = s, this.leaveCallback = a, this.willLinkActivate = c
		};
		t.MouseZone = s
	}, function (e, t, r) {
		"use strict";
		var i = this && this.__decorate || function (e, t, r, i) {
				var n, o = arguments.length,
					s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
				return o > 3 && s && Object.defineProperty(t, r, s), s
			},
			n = this && this.__param || function (e, t) {
				return function (r, i) {
					t(r, i, e)
				}
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(11),
			s = r(52),
			a = r(5),
			c = r(1),
			l = r(4),
			h = r(0),
			u = r(29),
			f = r(53),
			_ = String.fromCharCode(160),
			d = new RegExp(_, "g"),
			p = function () {
				function e(e, t, r, i, n, o, l, h) {
					var u = this;
					this._scrollLines = e, this._element = t, this._screenElement = r, this._charSizeService = i, this._bufferService = n, this._coreService = o, this._mouseService = l, this._optionsService = h, this._dragScrollAmount = 0, this._enabled = !0, this._workCell = new a.CellData, this._mouseDownTimeStamp = 0, this._onLinuxMouseSelection = new c.EventEmitter, this._onRedrawRequest = new c.EventEmitter, this._onSelectionChange = new c.EventEmitter, this._mouseMoveListener = function (e) {
						return u._onMouseMove(e)
					}, this._mouseUpListener = function (e) {
						return u._onMouseUp(e)
					}, this._coreService.onUserInput(function () {
						u.hasSelection && u.clearSelection()
					}), this._trimListener = this._bufferService.buffer.lines.onTrim(function (e) {
						return u._onTrim(e)
					}), this._bufferService.buffers.onBufferActivate(function (e) {
						return u._onBufferActivate(e)
					}), this.enable(), this._model = new s.SelectionModel(this._bufferService), this._activeSelectionMode = 0
				}
				return Object.defineProperty(e.prototype, "onLinuxMouseSelection", {
					get: function () {
						return this._onLinuxMouseSelection.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onRedrawRequest", {
					get: function () {
						return this._onRedrawRequest.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onSelectionChange", {
					get: function () {
						return this._onSelectionChange.event
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.dispose = function () {
					this._removeMouseDownListeners()
				}, e.prototype.reset = function () {
					this.clearSelection()
				}, e.prototype.disable = function () {
					this.clearSelection(), this._enabled = !1
				}, e.prototype.enable = function () {
					this._enabled = !0
				}, Object.defineProperty(e.prototype, "selectionStart", {
					get: function () {
						return this._model.finalSelectionStart
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "selectionEnd", {
					get: function () {
						return this._model.finalSelectionEnd
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "hasSelection", {
					get: function () {
						var e = this._model.finalSelectionStart,
							t = this._model.finalSelectionEnd;
						return !(!e || !t) && (e[0] !== t[0] || e[1] !== t[1])
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "selectionText", {
					get: function () {
						var e = this._model.finalSelectionStart,
							t = this._model.finalSelectionEnd;
						if (!e || !t) return "";
						var r = this._bufferService.buffer,
							i = [];
						if (3 === this._activeSelectionMode) {
							if (e[0] === t[0]) return "";
							for (var n = e[1]; n <= t[1]; n++) {
								var s = r.translateBufferLineToString(n, !0, e[0], t[0]);
								i.push(s)
							}
						} else {
							var a = e[1] === t[1] ? t[0] : void 0;
							i.push(r.translateBufferLineToString(e[1], !0, e[0], a));
							for (n = e[1] + 1; n <= t[1] - 1; n++) {
								var c = r.lines.get(n);
								s = r.translateBufferLineToString(n, !0);
								c && c.isWrapped ? i[i.length - 1] += s : i.push(s)
							}
							if (e[1] !== t[1]) {
								c = r.lines.get(t[1]), s = r.translateBufferLineToString(t[1], !0, 0, t[0]);
								c && c.isWrapped ? i[i.length - 1] += s : i.push(s)
							}
						}
						return i.map(function (e) {
							return e.replace(d, " ")
						}).join(o.isWindows ? "\r\n" : "\n")
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.clearSelection = function () {
					this._model.clearSelection(), this._removeMouseDownListeners(), this.refresh(), this._onSelectionChange.fire()
				}, e.prototype.refresh = function (e) {
					var t = this;
					(this._refreshAnimationFrame || (this._refreshAnimationFrame = window.requestAnimationFrame(function () {
						return t._refresh()
					})), o.isLinux && e) && (this.selectionText.length && this._onLinuxMouseSelection.fire(this.selectionText))
				}, e.prototype._refresh = function () {
					this._refreshAnimationFrame = void 0, this._onRedrawRequest.fire({
						start: this._model.finalSelectionStart,
						end: this._model.finalSelectionEnd,
						columnSelectMode: 3 === this._activeSelectionMode
					})
				}, e.prototype.isClickInSelection = function (e) {
					var t = this._getMouseBufferCoords(e),
						r = this._model.finalSelectionStart,
						i = this._model.finalSelectionEnd;
					return !!(r && i && t) && this._areCoordsInSelection(t, r, i)
				}, e.prototype._areCoordsInSelection = function (e, t, r) {
					return e[1] > t[1] && e[1] < r[1] || t[1] === r[1] && e[1] === t[1] && e[0] >= t[0] && e[0] < r[0] || t[1] < r[1] && e[1] === r[1] && e[0] < r[0] || t[1] < r[1] && e[1] === t[1] && e[0] >= t[0]
				}, e.prototype.selectWordAtCursor = function (e) {
					var t = this._getMouseBufferCoords(e);
					t && (this._selectWordAt(t, !1), this._model.selectionEnd = void 0, this.refresh(!0))
				}, e.prototype.selectAll = function () {
					this._model.isSelectAllActive = !0, this.refresh(), this._onSelectionChange.fire()
				}, e.prototype.selectLines = function (e, t) {
					this._model.clearSelection(), e = Math.max(e, 0), t = Math.min(t, this._bufferService.buffer.lines.length - 1), this._model.selectionStart = [0, e], this._model.selectionEnd = [this._bufferService.cols, t], this.refresh(), this._onSelectionChange.fire()
				}, e.prototype._onTrim = function (e) {
					this._model.onTrim(e) && this.refresh()
				}, e.prototype._getMouseBufferCoords = function (e) {
					var t = this._mouseService.getCoords(e, this._screenElement, this._bufferService.cols, this._bufferService.rows, !0);
					if (t) return t[0]--, t[1]--, t[1] += this._bufferService.buffer.ydisp, t
				}, e.prototype._getMouseEventScrollAmount = function (e) {
					var t = u.getCoordsRelativeToElement(e, this._screenElement)[1],
						r = this._bufferService.rows * Math.ceil(this._charSizeService.height * this._optionsService.options.lineHeight);
					return t >= 0 && t <= r ? 0 : (t > r && (t -= r), t = Math.min(Math.max(t, -50), 50), (t /= 50) / Math.abs(t) + Math.round(14 * t))
				}, e.prototype.shouldForceSelection = function (e) {
					return o.isMac ? e.altKey && this._optionsService.options.macOptionClickForcesSelection : e.shiftKey
				}, e.prototype.onMouseDown = function (e) {
					if (this._mouseDownTimeStamp = e.timeStamp, (2 !== e.button || !this.hasSelection) && 0 === e.button) {
						if (!this._enabled) {
							if (!this.shouldForceSelection(e)) return;
							e.stopPropagation()
						}
						e.preventDefault(), this._dragScrollAmount = 0, this._enabled && e.shiftKey ? this._onIncrementalClick(e) : 1 === e.detail ? this._onSingleClick(e) : 2 === e.detail ? this._onDoubleClick(e) : 3 === e.detail && this._onTripleClick(e), this._addMouseDownListeners(), this.refresh(!0)
					}
				}, e.prototype._addMouseDownListeners = function () {
					var e = this;
					this._screenElement.ownerDocument && (this._screenElement.ownerDocument.addEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.addEventListener("mouseup", this._mouseUpListener)), this._dragScrollIntervalTimer = window.setInterval(function () {
						return e._dragScroll()
					}, 50)
				}, e.prototype._removeMouseDownListeners = function () {
					this._screenElement.ownerDocument && (this._screenElement.ownerDocument.removeEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.removeEventListener("mouseup", this._mouseUpListener)), clearInterval(this._dragScrollIntervalTimer), this._dragScrollIntervalTimer = void 0
				}, e.prototype._onIncrementalClick = function (e) {
					this._model.selectionStart && (this._model.selectionEnd = this._getMouseBufferCoords(e))
				}, e.prototype._onSingleClick = function (e) {
					if (this._model.selectionStartLength = 0, this._model.isSelectAllActive = !1, this._activeSelectionMode = this.shouldColumnSelect(e) ? 3 : 0, this._model.selectionStart = this._getMouseBufferCoords(e), this._model.selectionStart) {
						this._model.selectionEnd = void 0;
						var t = this._bufferService.buffer.lines.get(this._model.selectionStart[1]);
						t && t.length !== this._model.selectionStart[0] && 0 === t.hasWidth(this._model.selectionStart[0]) && this._model.selectionStart[0]++
					}
				}, e.prototype._onDoubleClick = function (e) {
					var t = this._getMouseBufferCoords(e);
					t && (this._activeSelectionMode = 1, this._selectWordAt(t, !0))
				}, e.prototype._onTripleClick = function (e) {
					var t = this._getMouseBufferCoords(e);
					t && (this._activeSelectionMode = 2, this._selectLineAt(t[1]))
				}, e.prototype.shouldColumnSelect = function (e) {
					return e.altKey && !(o.isMac && this._optionsService.options.macOptionClickForcesSelection)
				}, e.prototype._onMouseMove = function (e) {
					if (e.stopImmediatePropagation(), this._model.selectionStart) {
						var t = this._model.selectionEnd ? [this._model.selectionEnd[0], this._model.selectionEnd[1]] : null;
						if (this._model.selectionEnd = this._getMouseBufferCoords(e), this._model.selectionEnd) {
							2 === this._activeSelectionMode ? this._model.selectionEnd[1] < this._model.selectionStart[1] ? this._model.selectionEnd[0] = 0 : this._model.selectionEnd[0] = this._bufferService.cols : 1 === this._activeSelectionMode && this._selectToWordAt(this._model.selectionEnd), this._dragScrollAmount = this._getMouseEventScrollAmount(e), 3 !== this._activeSelectionMode && (this._dragScrollAmount > 0 ? this._model.selectionEnd[0] = this._bufferService.cols : this._dragScrollAmount < 0 && (this._model.selectionEnd[0] = 0));
							var r = this._bufferService.buffer;
							if (this._model.selectionEnd[1] < r.lines.length) {
								var i = r.lines.get(this._model.selectionEnd[1]);
								i && 0 === i.hasWidth(this._model.selectionEnd[0]) && this._model.selectionEnd[0]++
							}
							t && t[0] === this._model.selectionEnd[0] && t[1] === this._model.selectionEnd[1] || this.refresh(!0)
						} else this.refresh(!0)
					}
				}, e.prototype._dragScroll = function () {
					if (this._model.selectionEnd && this._model.selectionStart && this._dragScrollAmount) {
						this._scrollLines(this._dragScrollAmount, !1);
						var e = this._bufferService.buffer;
						this._dragScrollAmount > 0 ? (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = this._bufferService.cols), this._model.selectionEnd[1] = Math.min(e.ydisp + this._bufferService.rows, e.lines.length - 1)) : (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = 0), this._model.selectionEnd[1] = e.ydisp), this.refresh()
					}
				}, e.prototype._onMouseUp = function (e) {
					var t = e.timeStamp - this._mouseDownTimeStamp;
					if (this._removeMouseDownListeners(), this.selectionText.length <= 1 && t < 500) {
						if (e.altKey && this._bufferService.buffer.ybase === this._bufferService.buffer.ydisp) {
							var r = this._mouseService.getCoords(e, this._element, this._bufferService.cols, this._bufferService.rows, !1);
							if (r && void 0 !== r[0] && void 0 !== r[1]) {
								var i = f.moveToCellSequence(r[0] - 1, r[1] - 1, this._bufferService, this._coreService.decPrivateModes.applicationCursorKeys);
								this._coreService.triggerDataEvent(i, !0)
							}
						}
					} else this.hasSelection && this._onSelectionChange.fire()
				}, e.prototype._onBufferActivate = function (e) {
					var t = this;
					this.clearSelection(), this._trimListener.dispose(), this._trimListener = e.activeBuffer.lines.onTrim(function (e) {
						return t._onTrim(e)
					})
				}, e.prototype._convertViewportColToCharacterIndex = function (e, t) {
					for (var r = t[0], i = 0; t[0] >= i; i++) {
						var n = e.loadCell(i, this._workCell).getChars().length;
						0 === this._workCell.getWidth() ? r-- : n > 1 && t[0] !== i && (r += n - 1)
					}
					return r
				}, e.prototype.setSelection = function (e, t, r) {
					this._model.clearSelection(), this._removeMouseDownListeners(), this._model.selectionStart = [e, t], this._model.selectionStartLength = r, this.refresh()
				}, e.prototype._getWordAt = function (e, t, r, i) {
					if (void 0 === r && (r = !0), void 0 === i && (i = !0), !(e[0] >= this._bufferService.cols)) {
						var n = this._bufferService.buffer,
							o = n.lines.get(e[1]);
						if (o) {
							var s = n.translateBufferLineToString(e[1], !1),
								a = this._convertViewportColToCharacterIndex(o, e),
								c = a,
								l = e[0] - a,
								h = 0,
								u = 0,
								f = 0,
								_ = 0;
							if (" " === s.charAt(a)) {
								for (; a > 0 && " " === s.charAt(a - 1);) a--;
								for (; c < s.length && " " === s.charAt(c + 1);) c++
							} else {
								var d = e[0],
									p = e[0];
								0 === o.getWidth(d) && (h++, d--), 2 === o.getWidth(p) && (u++, p++);
								var v = o.getString(p).length;
								for (v > 1 && (_ += v - 1, c += v - 1); d > 0 && a > 0 && !this._isCharWordSeparator(o.loadCell(d - 1, this._workCell));) {
									o.loadCell(d - 1, this._workCell);
									var g = this._workCell.getChars().length;
									0 === this._workCell.getWidth() ? (h++, d--) : g > 1 && (f += g - 1, a -= g - 1), a--, d--
								}
								for (; p < o.length && c + 1 < s.length && !this._isCharWordSeparator(o.loadCell(p + 1, this._workCell));) {
									o.loadCell(p + 1, this._workCell);
									var y = this._workCell.getChars().length;
									2 === this._workCell.getWidth() ? (u++, p++) : y > 1 && (_ += y - 1, c += y - 1), c++, p++
								}
							}
							c++;
							var b = a + l - h + f,
								m = Math.min(this._bufferService.cols, c - a + h + u - f - _);
							if (t || "" !== s.slice(a, c).trim()) {
								if (r && 0 === b && 32 !== o.getCodePoint(0)) {
									var C = n.lines.get(e[1] - 1);
									if (C && o.isWrapped && 32 !== C.getCodePoint(this._bufferService.cols - 1)) {
										var S = this._getWordAt([this._bufferService.cols - 1, e[1] - 1], !1, !0, !1);
										if (S) {
											var w = this._bufferService.cols - S.start;
											b -= w, m += w
										}
									}
								}
								if (i && b + m === this._bufferService.cols && 32 !== o.getCodePoint(this._bufferService.cols - 1)) {
									var E = n.lines.get(e[1] + 1);
									if (E && E.isWrapped && 32 !== E.getCodePoint(0)) {
										var L = this._getWordAt([0, e[1] + 1], !1, !1, !0);
										L && (m += L.length)
									}
								}
								return {
									start: b,
									length: m
								}
							}
						}
					}
				}, e.prototype._selectWordAt = function (e, t) {
					var r = this._getWordAt(e, t);
					if (r) {
						for (; r.start < 0;) r.start += this._bufferService.cols, e[1]--;
						this._model.selectionStart = [r.start, e[1]], this._model.selectionStartLength = r.length
					}
				}, e.prototype._selectToWordAt = function (e) {
					var t = this._getWordAt(e, !0);
					if (t) {
						for (var r = e[1]; t.start < 0;) t.start += this._bufferService.cols, r--;
						if (!this._model.areSelectionValuesReversed())
							for (; t.start + t.length > this._bufferService.cols;) t.length -= this._bufferService.cols, r++;
						this._model.selectionEnd = [this._model.areSelectionValuesReversed() ? t.start : t.start + t.length, r]
					}
				}, e.prototype._isCharWordSeparator = function (e) {
					return 0 !== e.getWidth() && this._optionsService.options.wordSeparator.indexOf(e.getChars()) >= 0
				}, e.prototype._selectLineAt = function (e) {
					var t = this._bufferService.buffer.getWrappedRangeForLine(e);
					this._model.selectionStart = [0, t.first], this._model.selectionEnd = [this._bufferService.cols, t.last], this._model.selectionStartLength = 0
				}, e = i([n(3, l.ICharSizeService), n(4, h.IBufferService), n(5, h.ICoreService), n(6, l.IMouseService), n(7, h.IOptionsService)], e)
			}();
		t.SelectionService = p
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
			function e(e) {
				this._bufferService = e, this.isSelectAllActive = !1, this.selectionStartLength = 0
			}
			return e.prototype.clearSelection = function () {
				this.selectionStart = void 0, this.selectionEnd = void 0, this.isSelectAllActive = !1, this.selectionStartLength = 0
			}, Object.defineProperty(e.prototype, "finalSelectionStart", {
				get: function () {
					return this.isSelectAllActive ? [0, 0] : this.selectionEnd && this.selectionStart && this.areSelectionValuesReversed() ? this.selectionEnd : this.selectionStart
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "finalSelectionEnd", {
				get: function () {
					if (this.isSelectAllActive) return [this._bufferService.cols, this._bufferService.buffer.ybase + this._bufferService.rows - 1];
					if (this.selectionStart) {
						if (!this.selectionEnd || this.areSelectionValuesReversed()) {
							var e = this.selectionStart[0] + this.selectionStartLength;
							return e > this._bufferService.cols ? [e % this._bufferService.cols, this.selectionStart[1] + Math.floor(e / this._bufferService.cols)] : [e, this.selectionStart[1]]
						}
						return this.selectionStartLength && this.selectionEnd[1] === this.selectionStart[1] ? [Math.max(this.selectionStart[0] + this.selectionStartLength, this.selectionEnd[0]), this.selectionEnd[1]] : this.selectionEnd
					}
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.areSelectionValuesReversed = function () {
				var e = this.selectionStart,
					t = this.selectionEnd;
				return !(!e || !t) && (e[1] > t[1] || e[1] === t[1] && e[0] > t[0])
			}, e.prototype.onTrim = function (e) {
				return this.selectionStart && (this.selectionStart[1] -= e), this.selectionEnd && (this.selectionEnd[1] -= e), this.selectionEnd && this.selectionEnd[1] < 0 ? (this.clearSelection(), !0) : (this.selectionStart && this.selectionStart[1] < 0 && (this.selectionStart[1] = 0), !1)
			}, e
		}();
		t.SelectionModel = i
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(12);

		function n(e, t, r, i) {
			var n = e - o(r, e),
				s = t - o(r, t);
			return h(Math.abs(n - s) - function (e, t, r) {
				for (var i = 0, n = e - o(r, e), s = t - o(r, t), c = 0; c < Math.abs(n - s); c++) {
					var l = "A" === a(e, t) ? -1 : 1,
						h = r.buffer.lines.get(n + l * c);
					h && h.isWrapped && i++
				}
				return i
			}(e, t, r), l(a(e, t), i))
		}

		function o(e, t) {
			for (var r = 0, i = e.buffer.lines.get(t), n = i && i.isWrapped; n && t >= 0 && t < e.rows;) r++, n = (i = e.buffer.lines.get(--t)) && i.isWrapped;
			return r
		}

		function s(e, t, r, i, s, a) {
			var c;
			return c = n(r, i, s, a).length > 0 ? i - o(s, i) : t, e < r && c <= i || e >= r && c < i ? "C" : "D"
		}

		function a(e, t) {
			return e > t ? "A" : "B"
		}

		function c(e, t, r, i, n, o) {
			for (var s = e, a = t, c = ""; s !== r || a !== i;) s += n ? 1 : -1, n && s > o.cols - 1 ? (c += o.buffer.translateBufferLineToString(a, !1, e, s), s = 0, e = 0, a++) : !n && s < 0 && (c += o.buffer.translateBufferLineToString(a, !1, 0, e + 1), e = s = o.cols - 1, a--);
			return c + o.buffer.translateBufferLineToString(a, !1, e, s)
		}

		function l(e, t) {
			var r = t ? "O" : "[";
			return i.C0.ESC + r + e
		}

		function h(e, t) {
			e = Math.floor(e);
			for (var r = "", i = 0; i < e; i++) r += t;
			return r
		}
		t.moveToCellSequence = function (e, t, r, i) {
			var a = r.buffer.x,
				u = r.buffer.y;
			return r.buffer.hasScrollback ? function (e, t, r, i, n, o) {
				var a = s(e, t, r, i, n, o);
				return h(Math.abs(e - r), l(a, o))
			}(a, u, e, t, r, i) : function (e, t, r, i, s, a) {
				if (0 === n(t, i, s, a).length) return "";
				return h(c(e, t, e, t - o(s, t), !1, s).length, l("D", a))
			}(a, u, 0, t, r, i) + n(u, t, r, i) + function (e, t, r, i, a, u) {
				var f;
				f = n(t, i, a, u).length > 0 ? i - o(a, i) : t;
				var _ = i,
					d = s(e, t, r, i, a, u);
				return h(c(e, f, r, _, "C" === d, a).length, l(d, u))
			}(a, u, e, t, r, i)
		}
	}, function (e, t, r) {
		"use strict";
		var i = this && this.__decorate || function (e, t, r, i) {
				var n, o = arguments.length,
					s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
				return o > 3 && s && Object.defineProperty(t, r, s), s
			},
			n = this && this.__param || function (e, t) {
				return function (r, i) {
					t(r, i, e)
				}
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(0),
			s = function () {
				function e(e) {
					this._optionsService = e
				}
				return Object.defineProperty(e, "audioContext", {
					get: function () {
						if (!e._audioContext) {
							var t = window.AudioContext || window.webkitAudioContext;
							if (!t) return console.warn("Web Audio API is not supported by this browser. Consider upgrading to the latest version"), null;
							e._audioContext = new t
						}
						return e._audioContext
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.playBellSound = function () {
					var t = e.audioContext;
					if (t) {
						var r = t.createBufferSource();
						t.decodeAudioData(this._base64ToArrayBuffer(this._removeMimeType(this._optionsService.options.bellSound)), function (e) {
							r.buffer = e, r.connect(t.destination), r.start(0)
						})
					}
				}, e.prototype._base64ToArrayBuffer = function (e) {
					for (var t = window.atob(e), r = t.length, i = new Uint8Array(r), n = 0; n < r; n++) i[n] = t.charCodeAt(n);
					return i.buffer
				}, e.prototype._removeMimeType = function (e) {
					return e.split(",")[1]
				}, e = i([n(0, o.IOptionsService)], e)
			}();
		t.SoundService = s
	}, function (e, t, r) {
		"use strict";
		var i, n = this && this.__extends || (i = function (e, t) {
				return (i = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function (e, t) {
						e.__proto__ = t
					} || function (e, t) {
						for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
					})(e, t)
			}, function (e, t) {
				function r() {
					this.constructor = e
				}
				i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
			}),
			o = this && this.__decorate || function (e, t, r, i) {
				var n, o = arguments.length,
					s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
				return o > 3 && s && Object.defineProperty(t, r, s), s
			},
			s = this && this.__param || function (e, t) {
				return function (r, i) {
					t(r, i, e)
				}
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = r(2),
			c = r(7),
			l = r(4),
			h = r(0),
			u = function (e) {
				function t(t, r, i, n, o) {
					var s = e.call(this) || this;
					return s._element = t, s._screenElement = r, s._bufferService = i, s._mouseService = n, s._selectionService = o, s._zones = [], s._areZonesActive = !1, s._lastHoverCoords = [void 0, void 0], s._initialSelectionLength = 0, s.register(c.addDisposableDomListener(s._element, "mousedown", function (e) {
						return s._onMouseDown(e)
					})), s._mouseMoveListener = function (e) {
						return s._onMouseMove(e)
					}, s._mouseLeaveListener = function (e) {
						return s._onMouseLeave(e)
					}, s._clickListener = function (e) {
						return s._onClick(e)
					}, s
				}
				return n(t, e), t.prototype.dispose = function () {
					e.prototype.dispose.call(this), this._deactivate()
				}, t.prototype.add = function (e) {
					this._zones.push(e), 1 === this._zones.length && this._activate()
				}, t.prototype.clearAll = function (e, t) {
					if (0 !== this._zones.length) {
						e && t || (e = 0, t = this._bufferService.rows - 1);
						for (var r = 0; r < this._zones.length; r++) {
							var i = this._zones[r];
							(i.y1 > e && i.y1 <= t + 1 || i.y2 > e && i.y2 <= t + 1 || i.y1 < e && i.y2 > t + 1) && (this._currentZone && this._currentZone === i && (this._currentZone.leaveCallback(), this._currentZone = void 0), this._zones.splice(r--, 1))
						}
						0 === this._zones.length && this._deactivate()
					}
				}, t.prototype._activate = function () {
					this._areZonesActive || (this._areZonesActive = !0, this._element.addEventListener("mousemove", this._mouseMoveListener), this._element.addEventListener("mouseleave", this._mouseLeaveListener), this._element.addEventListener("click", this._clickListener))
				}, t.prototype._deactivate = function () {
					this._areZonesActive && (this._areZonesActive = !1, this._element.removeEventListener("mousemove", this._mouseMoveListener), this._element.removeEventListener("mouseleave", this._mouseLeaveListener), this._element.removeEventListener("click", this._clickListener))
				}, t.prototype._onMouseMove = function (e) {
					this._lastHoverCoords[0] === e.pageX && this._lastHoverCoords[1] === e.pageY || (this._onHover(e), this._lastHoverCoords = [e.pageX, e.pageY])
				}, t.prototype._onHover = function (e) {
					var t = this,
						r = this._findZoneEventAt(e);
					r !== this._currentZone && (this._currentZone && (this._currentZone.leaveCallback(), this._currentZone = void 0, this._tooltipTimeout && clearTimeout(this._tooltipTimeout)), r && (this._currentZone = r, r.hoverCallback && r.hoverCallback(e), this._tooltipTimeout = setTimeout(function () {
						return t._onTooltip(e)
					}, 500)))
				}, t.prototype._onTooltip = function (e) {
					this._tooltipTimeout = void 0;
					var t = this._findZoneEventAt(e);
					t && t.tooltipCallback && t.tooltipCallback(e)
				}, t.prototype._onMouseDown = function (e) {
					var t;
					(this._initialSelectionLength = this._getSelectionLength(), this._areZonesActive) && ((null === (t = this._findZoneEventAt(e)) || void 0 === t ? void 0 : t.willLinkActivate(e)) && (e.preventDefault(), e.stopImmediatePropagation()))
				}, t.prototype._onMouseLeave = function (e) {
					this._currentZone && (this._currentZone.leaveCallback(), this._currentZone = void 0, this._tooltipTimeout && clearTimeout(this._tooltipTimeout))
				}, t.prototype._onClick = function (e) {
					var t = this._findZoneEventAt(e),
						r = this._getSelectionLength();
					t && r === this._initialSelectionLength && (t.clickCallback(e), e.preventDefault(), e.stopImmediatePropagation())
				}, t.prototype._getSelectionLength = function () {
					var e = this._selectionService.selectionText;
					return e ? e.length : 0
				}, t.prototype._findZoneEventAt = function (e) {
					var t = this._mouseService.getCoords(e, this._screenElement, this._bufferService.cols, this._bufferService.rows);
					if (t)
						for (var r = t[0], i = t[1], n = 0; n < this._zones.length; n++) {
							var o = this._zones[n];
							if (o.y1 === o.y2) {
								if (i === o.y1 && r >= o.x1 && r < o.x2) return o
							} else if (i === o.y1 && r >= o.x1 || i === o.y2 && r < o.x2 || i > o.y1 && i < o.y2) return o
						}
				}, t = o([s(2, h.IBufferService), s(3, l.IMouseService), s(4, l.ISelectionService)], t)
			}(a.Disposable);
		t.MouseZoneManager = u
	}, function (e, t, r) {
		"use strict";
		var i, n = this && this.__extends || (i = function (e, t) {
			return (i = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (e, t) {
					e.__proto__ = t
				} || function (e, t) {
					for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
				})(e, t)
		}, function (e, t) {
			function r() {
				this.constructor = e
			}
			i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
		});
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(17),
			s = r(11),
			a = r(30),
			c = r(7),
			l = r(2),
			h = r(31),
			u = function (e) {
				function t(t, r) {
					var i = e.call(this) || this;
					i._terminal = t, i._renderService = r, i._liveRegionLineCount = 0, i._charsToConsume = [], i._charsToAnnounce = "", i._accessibilityTreeRoot = document.createElement("div"), i._accessibilityTreeRoot.classList.add("xterm-accessibility"), i._rowContainer = document.createElement("div"), i._rowContainer.classList.add("xterm-accessibility-tree"), i._rowElements = [];
					for (var n = 0; n < i._terminal.rows; n++) i._rowElements[n] = i._createAccessibilityTreeNode(), i._rowContainer.appendChild(i._rowElements[n]);
					return i._topBoundaryFocusListener = function (e) {
						return i._onBoundaryFocus(e, 0)
					}, i._bottomBoundaryFocusListener = function (e) {
						return i._onBoundaryFocus(e, 1)
					}, i._rowElements[0].addEventListener("focus", i._topBoundaryFocusListener), i._rowElements[i._rowElements.length - 1].addEventListener("focus", i._bottomBoundaryFocusListener), i._refreshRowsDimensions(), i._accessibilityTreeRoot.appendChild(i._rowContainer), i._renderRowsDebouncer = new a.RenderDebouncer(i._renderRows.bind(i)), i._refreshRows(), i._liveRegion = document.createElement("div"), i._liveRegion.classList.add("live-region"), i._liveRegion.setAttribute("aria-live", "assertive"), i._accessibilityTreeRoot.appendChild(i._liveRegion), i._terminal.element.insertAdjacentElement("afterbegin", i._accessibilityTreeRoot), i.register(i._renderRowsDebouncer), i.register(i._terminal.onResize(function (e) {
						return i._onResize(e.rows)
					})), i.register(i._terminal.onRender(function (e) {
						return i._refreshRows(e.start, e.end)
					})), i.register(i._terminal.onScroll(function () {
						return i._refreshRows()
					})), i.register(i._terminal.onA11yChar(function (e) {
						return i._onChar(e)
					})), i.register(i._terminal.onLineFeed(function () {
						return i._onChar("\n")
					})), i.register(i._terminal.onA11yTab(function (e) {
						return i._onTab(e)
					})), i.register(i._terminal.onKey(function (e) {
						return i._onKey(e.key)
					})), i.register(i._terminal.onBlur(function () {
						return i._clearLiveRegion()
					})), i.register(i._renderService.onDimensionsChange(function () {
						return i._refreshRowsDimensions()
					})), i._screenDprMonitor = new h.ScreenDprMonitor, i.register(i._screenDprMonitor), i._screenDprMonitor.setListener(function () {
						return i._refreshRowsDimensions()
					}), i.register(c.addDisposableDomListener(window, "resize", function () {
						return i._refreshRowsDimensions()
					})), i
				}
				return n(t, e), t.prototype.dispose = function () {
					e.prototype.dispose.call(this), this._terminal.element.removeChild(this._accessibilityTreeRoot), this._rowElements.length = 0
				}, t.prototype._onBoundaryFocus = function (e, t) {
					var r = e.target,
						i = this._rowElements[0 === t ? 1 : this._rowElements.length - 2];
					if (r.getAttribute("aria-posinset") !== (0 === t ? "1" : "" + this._terminal.buffer.lines.length) && e.relatedTarget === i) {
						var n, o;
						if (0 === t ? (n = r, o = this._rowElements.pop(), this._rowContainer.removeChild(o)) : (n = this._rowElements.shift(), o = r, this._rowContainer.removeChild(n)), n.removeEventListener("focus", this._topBoundaryFocusListener), o.removeEventListener("focus", this._bottomBoundaryFocusListener), 0 === t) {
							var s = this._createAccessibilityTreeNode();
							this._rowElements.unshift(s), this._rowContainer.insertAdjacentElement("afterbegin", s)
						} else {
							s = this._createAccessibilityTreeNode();
							this._rowElements.push(s), this._rowContainer.appendChild(s)
						}
						this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._terminal.scrollLines(0 === t ? -1 : 1), this._rowElements[0 === t ? 1 : this._rowElements.length - 2].focus(), e.preventDefault(), e.stopImmediatePropagation()
					}
				}, t.prototype._onResize = function (e) {
					this._rowElements[this._rowElements.length - 1].removeEventListener("focus", this._bottomBoundaryFocusListener);
					for (var t = this._rowContainer.children.length; t < this._terminal.rows; t++) this._rowElements[t] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[t]);
					for (; this._rowElements.length > e;) this._rowContainer.removeChild(this._rowElements.pop());
					this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions()
				}, t.prototype._createAccessibilityTreeNode = function () {
					var e = document.createElement("div");
					return e.setAttribute("role", "listitem"), e.tabIndex = -1, this._refreshRowDimensions(e), e
				}, t.prototype._onTab = function (e) {
					for (var t = 0; t < e; t++) this._onChar(" ")
				}, t.prototype._onChar = function (e) {
					var t = this;
					if (this._liveRegionLineCount < 21) {
						if (this._charsToConsume.length > 0) this._charsToConsume.shift() !== e && (this._charsToAnnounce += e);
						else this._charsToAnnounce += e;
						"\n" === e && (this._liveRegionLineCount++, 21 === this._liveRegionLineCount && (this._liveRegion.textContent += o.tooMuchOutput)), s.isMac && this._liveRegion.textContent && this._liveRegion.textContent.length > 0 && !this._liveRegion.parentNode && setTimeout(function () {
							t._accessibilityTreeRoot.appendChild(t._liveRegion)
						}, 0)
					}
				}, t.prototype._clearLiveRegion = function () {
					this._liveRegion.textContent = "", this._liveRegionLineCount = 0, s.isMac && this._liveRegion.parentNode && this._accessibilityTreeRoot.removeChild(this._liveRegion)
				}, t.prototype._onKey = function (e) {
					this._clearLiveRegion(), this._charsToConsume.push(e)
				}, t.prototype._refreshRows = function (e, t) {
					this._renderRowsDebouncer.refresh(e, t, this._terminal.rows)
				}, t.prototype._renderRows = function (e, t) {
					for (var r = this._terminal.buffer, i = r.lines.length.toString(), n = e; n <= t; n++) {
						var o = r.translateBufferLineToString(r.ydisp + n, !0),
							s = (r.ydisp + n + 1).toString(),
							a = this._rowElements[n];
						a && (0 === o.length ? a.innerHTML = "&nbsp;" : a.textContent = o, a.setAttribute("aria-posinset", s), a.setAttribute("aria-setsize", i))
					}
					this._announceCharacters()
				}, t.prototype._refreshRowsDimensions = function () {
					if (this._renderService.dimensions.actualCellHeight) {
						this._rowElements.length !== this._terminal.rows && this._onResize(this._terminal.rows);
						for (var e = 0; e < this._terminal.rows; e++) this._refreshRowDimensions(this._rowElements[e])
					}
				}, t.prototype._refreshRowDimensions = function (e) {
					e.style.height = this._renderService.dimensions.actualCellHeight + "px"
				}, t.prototype._announceCharacters = function () {
					0 !== this._charsToAnnounce.length && (this._liveRegion.textContent += this._charsToAnnounce, this._charsToAnnounce = "")
				}, t
			}(l.Disposable);
		t.AccessibilityManager = u
	}, function (e, t, r) {
		"use strict";
		var i, n = this && this.__extends || (i = function (e, t) {
				return (i = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function (e, t) {
						e.__proto__ = t
					} || function (e, t) {
						for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
					})(e, t)
			}, function (e, t) {
				function r() {
					this.constructor = e
				}
				i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
			}),
			o = this && this.__decorate || function (e, t, r, i) {
				var n, o = arguments.length,
					s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
				return o > 3 && s && Object.defineProperty(t, r, s), s
			},
			s = this && this.__param || function (e, t) {
				return function (r, i) {
					t(r, i, e)
				}
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = r(58),
			c = r(9),
			l = r(2),
			h = r(4),
			u = r(0),
			f = r(1),
			_ = r(10),
			d = "xterm-dom-renderer-owner-",
			p = "xterm-rows",
			v = "xterm-selection",
			g = 1,
			y = function (e) {
				function t(t, r, i, n, o, s, c, l) {
					var h = e.call(this) || this;
					return h._colors = t, h._element = r, h._screenElement = i, h._viewportElement = n, h._linkifier = o, h._charSizeService = s, h._optionsService = c, h._bufferService = l, h._terminalClass = g++, h._rowElements = [], h._onRequestRefreshRows = new f.EventEmitter, h._rowContainer = document.createElement("div"), h._rowContainer.classList.add(p), h._rowContainer.style.lineHeight = "normal", h._rowContainer.setAttribute("aria-hidden", "true"), h._refreshRowElements(h._bufferService.cols, h._bufferService.rows), h._selectionContainer = document.createElement("div"), h._selectionContainer.classList.add(v), h._selectionContainer.setAttribute("aria-hidden", "true"), h.dimensions = {
						scaledCharWidth: 0,
						scaledCharHeight: 0,
						scaledCellWidth: 0,
						scaledCellHeight: 0,
						scaledCharLeft: 0,
						scaledCharTop: 0,
						scaledCanvasWidth: 0,
						scaledCanvasHeight: 0,
						canvasWidth: 0,
						canvasHeight: 0,
						actualCellWidth: 0,
						actualCellHeight: 0
					}, h._updateDimensions(), h._injectCss(), h._rowFactory = new a.DomRendererRowFactory(document, h._optionsService, h._colors), h._element.classList.add(d + h._terminalClass), h._screenElement.appendChild(h._rowContainer), h._screenElement.appendChild(h._selectionContainer), h._linkifier.onLinkHover(function (e) {
						return h._onLinkHover(e)
					}), h._linkifier.onLinkLeave(function (e) {
						return h._onLinkLeave(e)
					}), h
				}
				return n(t, e), Object.defineProperty(t.prototype, "onRequestRefreshRows", {
					get: function () {
						return this._onRequestRefreshRows.event
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.dispose = function () {
					this._element.classList.remove(d + this._terminalClass), this._screenElement.removeChild(this._rowContainer), this._screenElement.removeChild(this._selectionContainer), this._screenElement.removeChild(this._themeStyleElement), this._screenElement.removeChild(this._dimensionsStyleElement), e.prototype.dispose.call(this)
				}, t.prototype._updateDimensions = function () {
					var e = this;
					this.dimensions.scaledCharWidth = this._charSizeService.width * window.devicePixelRatio, this.dimensions.scaledCharHeight = Math.ceil(this._charSizeService.height * window.devicePixelRatio), this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._optionsService.options.letterSpacing), this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._optionsService.options.lineHeight), this.dimensions.scaledCharLeft = 0, this.dimensions.scaledCharTop = 0, this.dimensions.scaledCanvasWidth = this.dimensions.scaledCellWidth * this._bufferService.cols, this.dimensions.scaledCanvasHeight = this.dimensions.scaledCellHeight * this._bufferService.rows, this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio), this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio), this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._bufferService.cols, this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._bufferService.rows, this._rowElements.forEach(function (t) {
						t.style.width = e.dimensions.canvasWidth + "px", t.style.height = e.dimensions.actualCellHeight + "px", t.style.lineHeight = e.dimensions.actualCellHeight + "px", t.style.overflow = "hidden"
					}), this._dimensionsStyleElement || (this._dimensionsStyleElement = document.createElement("style"), this._screenElement.appendChild(this._dimensionsStyleElement));
					var t = this._terminalSelector + " ." + p + " span { display: inline-block; height: 100%; vertical-align: top; width: " + this.dimensions.actualCellWidth + "px}";
					this._dimensionsStyleElement.innerHTML = t, this._selectionContainer.style.height = this._viewportElement.style.height, this._screenElement.style.width = this.dimensions.canvasWidth + "px", this._screenElement.style.height = this.dimensions.canvasHeight + "px"
				}, t.prototype.setColors = function (e) {
					this._colors = e, this._injectCss()
				}, t.prototype._injectCss = function () {
					var e = this;
					this._themeStyleElement || (this._themeStyleElement = document.createElement("style"), this._screenElement.appendChild(this._themeStyleElement));
					var t = this._terminalSelector + " ." + p + " { color: " + this._colors.foreground.css + "; background-color: " + this._colors.background.css + "; font-family: " + this._optionsService.options.fontFamily + "; font-size: " + this._optionsService.options.fontSize + "px;}";
					t += this._terminalSelector + " span:not(." + a.BOLD_CLASS + ") { font-weight: " + this._optionsService.options.fontWeight + ";}" + this._terminalSelector + " span." + a.BOLD_CLASS + " { font-weight: " + this._optionsService.options.fontWeightBold + ";}" + this._terminalSelector + " span." + a.ITALIC_CLASS + " { font-style: italic;}", t += "@keyframes blink_box_shadow { 50% {  box-shadow: none; }}", t += "@keyframes blink_block { 0% {  background-color: " + this._colors.cursor.css + ";  color: " + this._colors.cursorAccent.css + "; } 50% {  background-color: " + this._colors.cursorAccent.css + ";  color: " + this._colors.cursor.css + "; }}", t += this._terminalSelector + " ." + p + ":not(.xterm-focus) ." + a.CURSOR_CLASS + "." + a.CURSOR_STYLE_BLOCK_CLASS + " { outline: 1px solid " + this._colors.cursor.css + "; outline-offset: -1px;}" + this._terminalSelector + " ." + p + ".xterm-focus ." + a.CURSOR_CLASS + "." + a.CURSOR_BLINK_CLASS + ":not(." + a.CURSOR_STYLE_BLOCK_CLASS + ") { animation: blink_box_shadow 1s step-end infinite;}" + this._terminalSelector + " ." + p + ".xterm-focus ." + a.CURSOR_CLASS + "." + a.CURSOR_BLINK_CLASS + "." + a.CURSOR_STYLE_BLOCK_CLASS + " { animation: blink_block 1s step-end infinite;}" + this._terminalSelector + " ." + p + ".xterm-focus ." + a.CURSOR_CLASS + "." + a.CURSOR_STYLE_BLOCK_CLASS + " { background-color: " + this._colors.cursor.css + "; color: " + this._colors.cursorAccent.css + ";}" + this._terminalSelector + " ." + p + " ." + a.CURSOR_CLASS + "." + a.CURSOR_STYLE_BAR_CLASS + " { box-shadow: 1px 0 0 " + this._colors.cursor.css + " inset;}" + this._terminalSelector + " ." + p + " ." + a.CURSOR_CLASS + "." + a.CURSOR_STYLE_UNDERLINE_CLASS + " { box-shadow: 0 -1px 0 " + this._colors.cursor.css + " inset;}", t += this._terminalSelector + " ." + v + " { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}" + this._terminalSelector + " ." + v + " div { position: absolute; background-color: " + this._colors.selection.css + ";}", this._colors.ansi.forEach(function (r, i) {
						t += e._terminalSelector + " .xterm-fg-" + i + " { color: " + r.css + "; }" + e._terminalSelector + " .xterm-bg-" + i + " { background-color: " + r.css + "; }"
					}), t += this._terminalSelector + " .xterm-fg-" + c.INVERTED_DEFAULT_COLOR + " { color: " + _.opaque(this._colors.background).css + "; }" + this._terminalSelector + " .xterm-bg-" + c.INVERTED_DEFAULT_COLOR + " { background-color: " + this._colors.foreground.css + "; }", this._themeStyleElement.innerHTML = t
				}, t.prototype.onDevicePixelRatioChange = function () {
					this._updateDimensions()
				}, t.prototype._refreshRowElements = function (e, t) {
					for (var r = this._rowElements.length; r <= t; r++) {
						var i = document.createElement("div");
						this._rowContainer.appendChild(i), this._rowElements.push(i)
					}
					for (; this._rowElements.length > t;) this._rowContainer.removeChild(this._rowElements.pop())
				}, t.prototype.onResize = function (e, t) {
					this._refreshRowElements(e, t), this._updateDimensions()
				}, t.prototype.onCharSizeChanged = function () {
					this._updateDimensions()
				}, t.prototype.onBlur = function () {
					this._rowContainer.classList.remove("xterm-focus")
				}, t.prototype.onFocus = function () {
					this._rowContainer.classList.add("xterm-focus")
				}, t.prototype.onSelectionChanged = function (e, t, r) {
					for (; this._selectionContainer.children.length;) this._selectionContainer.removeChild(this._selectionContainer.children[0]);
					if (e && t) {
						var i = e[1] - this._bufferService.buffer.ydisp,
							n = t[1] - this._bufferService.buffer.ydisp,
							o = Math.max(i, 0),
							s = Math.min(n, this._bufferService.rows - 1);
						if (!(o >= this._bufferService.rows || s < 0)) {
							var a = document.createDocumentFragment();
							if (r) a.appendChild(this._createSelectionElement(o, e[0], t[0], s - o + 1));
							else {
								var c = i === o ? e[0] : 0,
									l = o === s ? t[0] : this._bufferService.cols;
								a.appendChild(this._createSelectionElement(o, c, l));
								var h = s - o - 1;
								if (a.appendChild(this._createSelectionElement(o + 1, 0, this._bufferService.cols, h)), o !== s) {
									var u = n === s ? t[0] : this._bufferService.cols;
									a.appendChild(this._createSelectionElement(s, 0, u))
								}
							}
							this._selectionContainer.appendChild(a)
						}
					}
				}, t.prototype._createSelectionElement = function (e, t, r, i) {
					void 0 === i && (i = 1);
					var n = document.createElement("div");
					return n.style.height = i * this.dimensions.actualCellHeight + "px", n.style.top = e * this.dimensions.actualCellHeight + "px", n.style.left = t * this.dimensions.actualCellWidth + "px", n.style.width = this.dimensions.actualCellWidth * (r - t) + "px", n
				}, t.prototype.onCursorMove = function () {}, t.prototype.onOptionsChanged = function () {
					this._updateDimensions(), this._injectCss()
				}, t.prototype.clear = function () {
					this._rowElements.forEach(function (e) {
						return e.innerHTML = ""
					})
				}, t.prototype.renderRows = function (e, t) {
					for (var r = this._bufferService.buffer.ybase + this._bufferService.buffer.y, i = this._bufferService.buffer.x, n = this._optionsService.options.cursorBlink, o = e; o <= t; o++) {
						var s = this._rowElements[o];
						s.innerHTML = "";
						var a = o + this._bufferService.buffer.ydisp,
							c = this._bufferService.buffer.lines.get(a),
							l = this._optionsService.options.cursorStyle;
						s.appendChild(this._rowFactory.createRow(c, a === r, l, i, n, this.dimensions.actualCellWidth, this._bufferService.cols))
					}
				}, Object.defineProperty(t.prototype, "_terminalSelector", {
					get: function () {
						return "." + d + this._terminalClass
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.registerCharacterJoiner = function (e) {
					return -1
				}, t.prototype.deregisterCharacterJoiner = function (e) {
					return !1
				}, t.prototype._onLinkHover = function (e) {
					this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, !0)
				}, t.prototype._onLinkLeave = function (e) {
					this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, !1)
				}, t.prototype._setCellUnderline = function (e, t, r, i, n, o) {
					for (; e !== t || r !== i;) {
						var s = this._rowElements[r];
						if (!s) return;
						var a = s.children[e];
						a && (a.style.textDecoration = o ? "underline" : "none"), ++e >= n && (e = 0, r++)
					}
				}, t = o([s(5, h.ICharSizeService), s(6, u.IOptionsService), s(7, u.IBufferService)], t)
			}(l.Disposable);
		t.DomRenderer = y
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(9),
			n = r(3),
			o = r(5),
			s = r(10);
		t.BOLD_CLASS = "xterm-bold", t.DIM_CLASS = "xterm-dim", t.ITALIC_CLASS = "xterm-italic", t.UNDERLINE_CLASS = "xterm-underline", t.CURSOR_CLASS = "xterm-cursor", t.CURSOR_BLINK_CLASS = "xterm-cursor-blink", t.CURSOR_STYLE_BLOCK_CLASS = "xterm-cursor-block", t.CURSOR_STYLE_BAR_CLASS = "xterm-cursor-bar", t.CURSOR_STYLE_UNDERLINE_CLASS = "xterm-cursor-underline";
		var a = function () {
			function e(e, t, r) {
				this._document = e, this._optionsService = t, this._colors = r, this._workCell = new o.CellData
			}
			return e.prototype.setColors = function (e) {
				this._colors = e
			}, e.prototype.createRow = function (e, r, o, a, l, h, u) {
				for (var f = this._document.createDocumentFragment(), _ = 0, d = Math.min(e.length, u) - 1; d >= 0; d--)
					if (e.loadCell(d, this._workCell).getCode() !== n.NULL_CELL_CODE || r && d === a) {
						_ = d + 1;
						break
					} for (d = 0; d < _; d++) {
					e.loadCell(d, this._workCell);
					var p = this._workCell.getWidth();
					if (0 !== p) {
						var v = this._document.createElement("span");
						if (p > 1 && (v.style.width = h * p + "px"), r && d === a) switch (v.classList.add(t.CURSOR_CLASS), l && v.classList.add(t.CURSOR_BLINK_CLASS), o) {
							case "bar":
								v.classList.add(t.CURSOR_STYLE_BAR_CLASS);
								break;
							case "underline":
								v.classList.add(t.CURSOR_STYLE_UNDERLINE_CLASS);
								break;
							default:
								v.classList.add(t.CURSOR_STYLE_BLOCK_CLASS)
						}
						this._workCell.isBold() && v.classList.add(t.BOLD_CLASS), this._workCell.isItalic() && v.classList.add(t.ITALIC_CLASS), this._workCell.isDim() && v.classList.add(t.DIM_CLASS), this._workCell.isUnderline() && v.classList.add(t.UNDERLINE_CLASS), v.textContent = this._workCell.getChars() || n.WHITESPACE_CELL_CHAR;
						var g = this._workCell.getFgColor(),
							y = this._workCell.getFgColorMode(),
							b = this._workCell.getBgColor(),
							m = this._workCell.getBgColorMode(),
							C = !!this._workCell.isInverse();
						if (C) {
							var S = g;
							g = b, b = S;
							var w = y;
							y = m, m = w
						}
						switch (y) {
							case 16777216:
							case 33554432:
								this._workCell.isBold() && g < 8 && this._optionsService.options.drawBoldTextInBrightColors && (g += 8), this._applyMinimumContrast(v, this._colors.background, this._colors.ansi[g]) || v.classList.add("xterm-fg-" + g);
								break;
							case 50331648:
								var E = s.rgbaToColor(g >> 16 & 255, g >> 8 & 255, 255 & g);
								this._applyMinimumContrast(v, this._colors.background, E) || this._addStyle(v, "color:#" + c(g.toString(16), "0", 6));
								break;
							case 0:
							default:
								this._applyMinimumContrast(v, this._colors.background, this._colors.foreground) || C && v.classList.add("xterm-fg-" + i.INVERTED_DEFAULT_COLOR)
						}
						switch (m) {
							case 16777216:
							case 33554432:
								v.classList.add("xterm-bg-" + b);
								break;
							case 50331648:
								this._addStyle(v, "background-color:#" + c(b.toString(16), "0", 6));
								break;
							case 0:
							default:
								C && v.classList.add("xterm-bg-" + i.INVERTED_DEFAULT_COLOR)
						}
						f.appendChild(v)
					}
				}
				return f
			}, e.prototype._applyMinimumContrast = function (e, t, r) {
				if (1 === this._optionsService.options.minimumContrastRatio) return !1;
				var i = this._colors.contrastCache.getColor(this._workCell.bg, this._workCell.fg);
				return void 0 === i && (i = s.ensureContrastRatio(t, r, this._optionsService.options.minimumContrastRatio), this._colors.contrastCache.setColor(this._workCell.bg, this._workCell.fg, null != i ? i : null)), !!i && (this._addStyle(e, "color:" + i.css), !0)
			}, e.prototype._addStyle = function (e, t) {
				e.setAttribute("style", "" + (e.getAttribute("style") || "") + t + ";")
			}, e
		}();

		function c(e, t, r) {
			for (; e.length < r;) e = t + e;
			return e
		}
		t.DomRendererRowFactory = a
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(12),
			n = {
				48: ["0", ")"],
				49: ["1", "!"],
				50: ["2", "@"],
				51: ["3", "#"],
				52: ["4", "$"],
				53: ["5", "%"],
				54: ["6", "^"],
				55: ["7", "&"],
				56: ["8", "*"],
				57: ["9", "("],
				186: [";", ":"],
				187: ["=", "+"],
				188: [",", "<"],
				189: ["-", "_"],
				190: [".", ">"],
				191: ["/", "?"],
				192: ["`", "~"],
				219: ["[", "{"],
				220: ["\\", "|"],
				221: ["]", "}"],
				222: ["'", '"']
			};
		t.evaluateKeyboardEvent = function (e, t, r, o) {
			var s = {
					type: 0,
					cancel: !1,
					key: void 0
				},
				a = (e.shiftKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.ctrlKey ? 4 : 0) | (e.metaKey ? 8 : 0);
			switch (e.keyCode) {
				case 0:
					"UIKeyInputUpArrow" === e.key ? s.key = t ? i.C0.ESC + "OA" : i.C0.ESC + "[A" : "UIKeyInputLeftArrow" === e.key ? s.key = t ? i.C0.ESC + "OD" : i.C0.ESC + "[D" : "UIKeyInputRightArrow" === e.key ? s.key = t ? i.C0.ESC + "OC" : i.C0.ESC + "[C" : "UIKeyInputDownArrow" === e.key && (s.key = t ? i.C0.ESC + "OB" : i.C0.ESC + "[B");
					break;
				case 8:
					if (e.shiftKey) {
						s.key = i.C0.BS;
						break
					}
					if (e.altKey) {
						s.key = i.C0.ESC + i.C0.DEL;
						break
					}
					s.key = i.C0.DEL;
					break;
				case 9:
					if (e.shiftKey) {
						s.key = i.C0.ESC + "[Z";
						break
					}
					s.key = i.C0.HT, s.cancel = !0;
					break;
				case 13:
					s.key = i.C0.CR, s.cancel = !0;
					break;
				case 27:
					s.key = i.C0.ESC, s.cancel = !0;
					break;
				case 37:
					if (e.metaKey) break;
					a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "D", s.key === i.C0.ESC + "[1;3D" && (s.key = i.C0.ESC + (r ? "b" : "[1;5D"))) : s.key = t ? i.C0.ESC + "OD" : i.C0.ESC + "[D";
					break;
				case 39:
					if (e.metaKey) break;
					a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "C", s.key === i.C0.ESC + "[1;3C" && (s.key = i.C0.ESC + (r ? "f" : "[1;5C"))) : s.key = t ? i.C0.ESC + "OC" : i.C0.ESC + "[C";
					break;
				case 38:
					if (e.metaKey) break;
					a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "A", r || s.key !== i.C0.ESC + "[1;3A" || (s.key = i.C0.ESC + "[1;5A")) : s.key = t ? i.C0.ESC + "OA" : i.C0.ESC + "[A";
					break;
				case 40:
					if (e.metaKey) break;
					a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "B", r || s.key !== i.C0.ESC + "[1;3B" || (s.key = i.C0.ESC + "[1;5B")) : s.key = t ? i.C0.ESC + "OB" : i.C0.ESC + "[B";
					break;
				case 45:
					e.shiftKey || e.ctrlKey || (s.key = i.C0.ESC + "[2~");
					break;
				case 46:
					s.key = a ? i.C0.ESC + "[3;" + (a + 1) + "~" : i.C0.ESC + "[3~";
					break;
				case 36:
					s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "H" : t ? i.C0.ESC + "OH" : i.C0.ESC + "[H";
					break;
				case 35:
					s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "F" : t ? i.C0.ESC + "OF" : i.C0.ESC + "[F";
					break;
				case 33:
					e.shiftKey ? s.type = 2 : s.key = i.C0.ESC + "[5~";
					break;
				case 34:
					e.shiftKey ? s.type = 3 : s.key = i.C0.ESC + "[6~";
					break;
				case 112:
					s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "P" : i.C0.ESC + "OP";
					break;
				case 113:
					s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "Q" : i.C0.ESC + "OQ";
					break;
				case 114:
					s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "R" : i.C0.ESC + "OR";
					break;
				case 115:
					s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "S" : i.C0.ESC + "OS";
					break;
				case 116:
					s.key = a ? i.C0.ESC + "[15;" + (a + 1) + "~" : i.C0.ESC + "[15~";
					break;
				case 117:
					s.key = a ? i.C0.ESC + "[17;" + (a + 1) + "~" : i.C0.ESC + "[17~";
					break;
				case 118:
					s.key = a ? i.C0.ESC + "[18;" + (a + 1) + "~" : i.C0.ESC + "[18~";
					break;
				case 119:
					s.key = a ? i.C0.ESC + "[19;" + (a + 1) + "~" : i.C0.ESC + "[19~";
					break;
				case 120:
					s.key = a ? i.C0.ESC + "[20;" + (a + 1) + "~" : i.C0.ESC + "[20~";
					break;
				case 121:
					s.key = a ? i.C0.ESC + "[21;" + (a + 1) + "~" : i.C0.ESC + "[21~";
					break;
				case 122:
					s.key = a ? i.C0.ESC + "[23;" + (a + 1) + "~" : i.C0.ESC + "[23~";
					break;
				case 123:
					s.key = a ? i.C0.ESC + "[24;" + (a + 1) + "~" : i.C0.ESC + "[24~";
					break;
				default:
					if (!e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)
						if (r && !o || !e.altKey || e.metaKey) r && !e.altKey && !e.ctrlKey && e.metaKey ? 65 === e.keyCode && (s.type = 1) : e.key && !e.ctrlKey && !e.altKey && !e.metaKey && e.keyCode >= 48 && 1 === e.key.length ? s.key = e.key : e.key && e.ctrlKey && "_" === e.key && (s.key = i.C0.US);
						else {
							var c = n[e.keyCode],
								l = c && c[e.shiftKey ? 1 : 0];
							if (l) s.key = i.C0.ESC + l;
							else if (e.keyCode >= 65 && e.keyCode <= 90) {
								var h = e.ctrlKey ? e.keyCode - 64 : e.keyCode + 32;
								s.key = i.C0.ESC + String.fromCharCode(h)
							}
						}
					else e.keyCode >= 65 && e.keyCode <= 90 ? s.key = String.fromCharCode(e.keyCode - 64) : 32 === e.keyCode ? s.key = i.C0.NUL : e.keyCode >= 51 && e.keyCode <= 55 ? s.key = String.fromCharCode(e.keyCode - 51 + 27) : 56 === e.keyCode ? s.key = i.C0.DEL : 219 === e.keyCode ? s.key = i.C0.ESC : 220 === e.keyCode ? s.key = i.C0.FS : 221 === e.keyCode && (s.key = i.C0.GS)
			}
			return s
		}
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(3);
		t.handleWindowsModeLineFeed = function (e) {
			var t, r = null === (t = e.buffer.lines.get(e.buffer.ybase + e.buffer.y - 1)) || void 0 === t ? void 0 : t.get(e.cols - 1),
				n = e.buffer.lines.get(e.buffer.ybase + e.buffer.y);
			n && r && (n.isWrapped = r[i.CHAR_DATA_CODE_INDEX] !== i.NULL_CELL_CODE && r[i.CHAR_DATA_CODE_INDEX] !== i.WHITESPACE_CELL_CODE)
		}
	}, function (e, t, r) {
		"use strict";
		var i, n = this && this.__extends || (i = function (e, t) {
				return (i = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function (e, t) {
						e.__proto__ = t
					} || function (e, t) {
						for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
					})(e, t)
			}, function (e, t) {
				function r() {
					this.constructor = e
				}
				i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
			}),
			o = this && this.__decorate || function (e, t, r, i) {
				var n, o = arguments.length,
					s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
				return o > 3 && s && Object.defineProperty(t, r, s), s
			},
			s = this && this.__param || function (e, t) {
				return function (r, i) {
					t(r, i, e)
				}
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = r(30),
			c = r(1),
			l = r(2),
			h = r(31),
			u = r(7),
			f = r(0),
			_ = r(4),
			d = function (e) {
				function t(t, r, i, n, o) {
					var s = e.call(this) || this;
					if (s._renderer = t, s._rowCount = r, s.screenElement = i, s.optionsService = n, s.charSizeService = o, s._isPaused = !1, s._needsFullRefresh = !1, s._canvasWidth = 0, s._canvasHeight = 0, s._onDimensionsChange = new c.EventEmitter, s._onRender = new c.EventEmitter, s._onRefreshRequest = new c.EventEmitter, s._renderDebouncer = new a.RenderDebouncer(function (e, t) {
							return s._renderRows(e, t)
						}), s.register(s._renderDebouncer), s._screenDprMonitor = new h.ScreenDprMonitor, s._screenDprMonitor.setListener(function () {
							return s.onDevicePixelRatioChange()
						}), s.register(s._screenDprMonitor), s.register(n.onOptionChange(function () {
							return s._renderer.onOptionsChanged()
						})), s.register(o.onCharSizeChange(function () {
							return s.onCharSizeChanged()
						})), s._renderer.onRequestRefreshRows(function (e) {
							return s.refreshRows(e.start, e.end)
						}), s.register(u.addDisposableDomListener(window, "resize", function () {
							return s.onDevicePixelRatioChange()
						})), "IntersectionObserver" in window) {
						var l = new IntersectionObserver(function (e) {
							return s._onIntersectionChange(e[e.length - 1])
						}, {
							threshold: 0
						});
						l.observe(i), s.register({
							dispose: function () {
								return l.disconnect()
							}
						})
					}
					return s
				}
				return n(t, e), Object.defineProperty(t.prototype, "onDimensionsChange", {
					get: function () {
						return this._onDimensionsChange.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "onRender", {
					get: function () {
						return this._onRender.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "onRefreshRequest", {
					get: function () {
						return this._onRefreshRequest.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "dimensions", {
					get: function () {
						return this._renderer.dimensions
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype._onIntersectionChange = function (e) {
					this._isPaused = 0 === e.intersectionRatio, !this._isPaused && this._needsFullRefresh && (this.refreshRows(0, this._rowCount - 1), this._needsFullRefresh = !1)
				}, t.prototype.refreshRows = function (e, t) {
					this._isPaused ? this._needsFullRefresh = !0 : this._renderDebouncer.refresh(e, t, this._rowCount)
				}, t.prototype._renderRows = function (e, t) {
					this._renderer.renderRows(e, t), this._onRender.fire({
						start: e,
						end: t
					})
				}, t.prototype.resize = function (e, t) {
					this._rowCount = t, this._fireOnCanvasResize()
				}, t.prototype.changeOptions = function () {
					this._renderer.onOptionsChanged(), this.refreshRows(0, this._rowCount - 1), this._fireOnCanvasResize()
				}, t.prototype._fireOnCanvasResize = function () {
					this._renderer.dimensions.canvasWidth === this._canvasWidth && this._renderer.dimensions.canvasHeight === this._canvasHeight || this._onDimensionsChange.fire(this._renderer.dimensions)
				}, t.prototype.dispose = function () {
					this._renderer.dispose(), e.prototype.dispose.call(this)
				}, t.prototype.setRenderer = function (e) {
					var t = this;
					this._renderer.dispose(), this._renderer = e, this._renderer.onRequestRefreshRows(function (e) {
						return t.refreshRows(e.start, e.end)
					}), this.refreshRows(0, this._rowCount - 1)
				}, t.prototype._fullRefresh = function () {
					this._isPaused ? this._needsFullRefresh = !0 : this.refreshRows(0, this._rowCount - 1)
				}, t.prototype.setColors = function (e) {
					this._renderer.setColors(e), this._fullRefresh()
				}, t.prototype.onDevicePixelRatioChange = function () {
					this._renderer.onDevicePixelRatioChange(), this.refreshRows(0, this._rowCount - 1)
				}, t.prototype.onResize = function (e, t) {
					this._renderer.onResize(e, t), this._fullRefresh()
				}, t.prototype.onCharSizeChanged = function () {
					this._renderer.onCharSizeChanged()
				}, t.prototype.onBlur = function () {
					this._renderer.onBlur()
				}, t.prototype.onFocus = function () {
					this._renderer.onFocus()
				}, t.prototype.onSelectionChanged = function (e, t, r) {
					this._renderer.onSelectionChanged(e, t, r)
				}, t.prototype.onCursorMove = function () {
					this._renderer.onCursorMove()
				}, t.prototype.clear = function () {
					this._renderer.clear()
				}, t.prototype.registerCharacterJoiner = function (e) {
					return this._renderer.registerCharacterJoiner(e)
				}, t.prototype.deregisterCharacterJoiner = function (e) {
					return this._renderer.deregisterCharacterJoiner(e)
				}, t = o([s(3, f.IOptionsService), s(4, _.ICharSizeService)], t)
			}(l.Disposable);
		t.RenderService = d
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(1),
			n = r(11),
			o = r(32);
		t.DEFAULT_BELL_SOUND = "data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjMyLjEwNAAAAAAAAAAAAAAA//tQxAADB8AhSmxhIIEVCSiJrDCQBTcu3UrAIwUdkRgQbFAZC1CQEwTJ9mjRvBA4UOLD8nKVOWfh+UlK3z/177OXrfOdKl7pyn3Xf//WreyTRUoAWgBgkOAGbZHBgG1OF6zM82DWbZaUmMBptgQhGjsyYqc9ae9XFz280948NMBWInljyzsNRFLPWdnZGWrddDsjK1unuSrVN9jJsK8KuQtQCtMBjCEtImISdNKJOopIpBFpNSMbIHCSRpRR5iakjTiyzLhchUUBwCgyKiweBv/7UsQbg8isVNoMPMjAAAA0gAAABEVFGmgqK////9bP/6XCykxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", t.DEFAULT_OPTIONS = Object.freeze({
			cols: 80,
			rows: 24,
			cursorBlink: !1,
			cursorStyle: "block",
			bellSound: t.DEFAULT_BELL_SOUND,
			bellStyle: "none",
			drawBoldTextInBrightColors: !0,
			fastScrollModifier: "alt",
			fastScrollSensitivity: 5,
			fontFamily: "courier-new, courier, monospace",
			fontSize: 15,
			fontWeight: "normal",
			fontWeightBold: "bold",
			lineHeight: 1,
			letterSpacing: 0,
			logLevel: "info",
			scrollback: 1e3,
			scrollSensitivity: 1,
			screenReaderMode: !1,
			macOptionIsMeta: !1,
			macOptionClickForcesSelection: !1,
			minimumContrastRatio: 1,
			disableStdin: !1,
			allowTransparency: !1,
			tabStopWidth: 8,
			theme: {},
			rightClickSelectsWord: n.isMac,
			rendererType: "canvas",
			windowsMode: !1,
			convertEol: !1,
			termName: "xterm",
			screenKeys: !1,
			cancelEvents: !1,
			useFlowControl: !1,
			wordSeparator: " ()[]{}',:;\"`"
		});
		var s = ["cols", "rows"],
			a = function () {
				function e(e) {
					var r = this;
					this._onOptionChange = new i.EventEmitter, this.options = o.clone(t.DEFAULT_OPTIONS), Object.keys(e).forEach(function (t) {
						if (t in r.options) {
							var i = e[t];
							r.options[t] = i
						}
					})
				}
				return Object.defineProperty(e.prototype, "onOptionChange", {
					get: function () {
						return this._onOptionChange.event
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.setOption = function (e, r) {
					if (!(e in t.DEFAULT_OPTIONS)) throw new Error('No option with key "' + e + '"');
					if (-1 !== s.indexOf(e)) throw new Error('Option "' + e + '" can only be set in the constructor');
					this.options[e] !== r && (r = this._sanitizeAndValidateOption(e, r), this.options[e] !== r && (this.options[e] = r, this._onOptionChange.fire(e)))
				}, e.prototype._sanitizeAndValidateOption = function (e, r) {
					switch (e) {
						case "bellStyle":
						case "cursorStyle":
						case "fontWeight":
						case "fontWeightBold":
						case "rendererType":
						case "wordSeparator":
							r || (r = t.DEFAULT_OPTIONS[e]);
							break;
						case "lineHeight":
						case "tabStopWidth":
							if (r < 1) throw new Error(e + " cannot be less than 1, value: " + r);
							break;
						case "minimumContrastRatio":
							r = Math.max(1, Math.min(21, Math.round(10 * r) / 10));
						case "scrollback":
							if ((r = Math.min(r, 4294967295)) < 0) throw new Error(e + " cannot be less than 0, value: " + r);
							break;
						case "fastScrollSensitivity":
						case "scrollSensitivity":
							if (r <= 0) throw new Error(e + " cannot be less than or equal to 0, value: " + r)
					}
					return r
				}, e.prototype.getOption = function (e) {
					if (!(e in t.DEFAULT_OPTIONS)) throw new Error('No option with key "' + e + '"');
					return this.options[e]
				}, e
			}();
		t.OptionsService = a
	}, function (e, t, r) {
		"use strict";
		var i = this && this.__decorate || function (e, t, r, i) {
				var n, o = arguments.length,
					s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
				return o > 3 && s && Object.defineProperty(t, r, s), s
			},
			n = this && this.__param || function (e, t) {
				return function (r, i) {
					t(r, i, e)
				}
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(0),
			s = r(1),
			a = function () {
				function e(e, t, r) {
					this.document = e, this.parentElement = t, this._optionsService = r, this.width = 0, this.height = 0, this._onCharSizeChange = new s.EventEmitter, this._measureStrategy = new c(e, t, this._optionsService)
				}
				return Object.defineProperty(e.prototype, "hasValidSize", {
					get: function () {
						return this.width > 0 && this.height > 0
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onCharSizeChange", {
					get: function () {
						return this._onCharSizeChange.event
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.measure = function () {
					var e = this._measureStrategy.measure();
					e.width === this.width && e.height === this.height || (this.width = e.width, this.height = e.height, this._onCharSizeChange.fire())
				}, e = i([n(2, o.IOptionsService)], e)
			}();
		t.CharSizeService = a;
		var c = function () {
			function e(e, t, r) {
				this._document = e, this._parentElement = t, this._optionsService = r, this._result = {
					width: 0,
					height: 0
				}, this._measureElement = this._document.createElement("span"), this._measureElement.classList.add("xterm-char-measure-element"), this._measureElement.textContent = "W", this._measureElement.setAttribute("aria-hidden", "true"), this._parentElement.appendChild(this._measureElement)
			}
			return e.prototype.measure = function () {
				this._measureElement.style.fontFamily = this._optionsService.options.fontFamily, this._measureElement.style.fontSize = this._optionsService.options.fontSize + "px";
				var e = this._measureElement.getBoundingClientRect();
				return 0 !== e.width && 0 !== e.height && (this._result.width = e.width, this._result.height = Math.ceil(e.height)), this._result
			}, e
		}()
	}, function (e, t, r) {
		"use strict";
		var i = this && this.__decorate || function (e, t, r, i) {
				var n, o = arguments.length,
					s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
				return o > 3 && s && Object.defineProperty(t, r, s), s
			},
			n = this && this.__param || function (e, t) {
				return function (r, i) {
					t(r, i, e)
				}
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(0),
			s = r(65);
		t.MINIMUM_COLS = 2, t.MINIMUM_ROWS = 1;
		var a = function () {
			function e(e) {
				this._optionsService = e, this.cols = Math.max(e.options.cols, t.MINIMUM_COLS), this.rows = Math.max(e.options.rows, t.MINIMUM_ROWS), this.buffers = new s.BufferSet(e, this)
			}
			return Object.defineProperty(e.prototype, "buffer", {
				get: function () {
					return this.buffers.active
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.resize = function (e, t) {
				this.cols = e, this.rows = t
			}, e.prototype.reset = function () {
				this.buffers = new s.BufferSet(this._optionsService, this)
			}, e = i([n(0, o.IOptionsService)], e)
		}();
		t.BufferService = a
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(66),
			n = r(1),
			o = function () {
				function e(e, t) {
					this.optionsService = e, this.bufferService = t, this._onBufferActivate = new n.EventEmitter, this._normal = new i.Buffer(!0, e, t), this._normal.fillViewportRows(), this._alt = new i.Buffer(!1, e, t), this._activeBuffer = this._normal, this.setupTabStops()
				}
				return Object.defineProperty(e.prototype, "onBufferActivate", {
					get: function () {
						return this._onBufferActivate.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "alt", {
					get: function () {
						return this._alt
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "active", {
					get: function () {
						return this._activeBuffer
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "normal", {
					get: function () {
						return this._normal
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.activateNormalBuffer = function () {
					this._activeBuffer !== this._normal && (this._normal.x = this._alt.x, this._normal.y = this._alt.y, this._alt.clear(), this._activeBuffer = this._normal, this._onBufferActivate.fire({
						activeBuffer: this._normal,
						inactiveBuffer: this._alt
					}))
				}, e.prototype.activateAltBuffer = function (e) {
					this._activeBuffer !== this._alt && (this._alt.fillViewportRows(e), this._alt.x = this._normal.x, this._alt.y = this._normal.y, this._activeBuffer = this._alt, this._onBufferActivate.fire({
						activeBuffer: this._alt,
						inactiveBuffer: this._normal
					}))
				}, e.prototype.resize = function (e, t) {
					this._normal.resize(e, t), this._alt.resize(e, t)
				}, e.prototype.setupTabStops = function (e) {
					this._normal.setupTabStops(e), this._alt.setupTabStops(e)
				}, e
			}();
		t.BufferSet = o
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(67),
			n = r(16),
			o = r(5),
			s = r(3),
			a = r(68),
			c = r(69),
			l = r(18);
		t.MAX_BUFFER_SIZE = 4294967295;
		var h = function () {
			function e(e, t, r) {
				this._hasScrollback = e, this._optionsService = t, this._bufferService = r, this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.savedY = 0, this.savedX = 0, this.savedCurAttrData = n.DEFAULT_ATTR_DATA.clone(), this.savedCharset = l.DEFAULT_CHARSET, this.markers = [], this._nullCell = o.CellData.fromCharData([0, s.NULL_CELL_CHAR, s.NULL_CELL_WIDTH, s.NULL_CELL_CODE]), this._whitespaceCell = o.CellData.fromCharData([0, s.WHITESPACE_CELL_CHAR, s.WHITESPACE_CELL_WIDTH, s.WHITESPACE_CELL_CODE]), this._cols = this._bufferService.cols, this._rows = this._bufferService.rows, this.lines = new i.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops()
			}
			return e.prototype.getNullCell = function (e) {
				return e ? (this._nullCell.fg = e.fg, this._nullCell.bg = e.bg) : (this._nullCell.fg = 0, this._nullCell.bg = 0), this._nullCell
			}, e.prototype.getWhitespaceCell = function (e) {
				return e ? (this._whitespaceCell.fg = e.fg, this._whitespaceCell.bg = e.bg) : (this._whitespaceCell.fg = 0, this._whitespaceCell.bg = 0), this._whitespaceCell
			}, e.prototype.getBlankLine = function (e, t) {
				return new n.BufferLine(this._bufferService.cols, this.getNullCell(e), t)
			}, Object.defineProperty(e.prototype, "hasScrollback", {
				get: function () {
					return this._hasScrollback && this.lines.maxLength > this._rows
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "isCursorInViewport", {
				get: function () {
					var e = this.ybase + this.y - this.ydisp;
					return e >= 0 && e < this._rows
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype._getCorrectBufferLength = function (e) {
				if (!this._hasScrollback) return e;
				var r = e + this._optionsService.options.scrollback;
				return r > t.MAX_BUFFER_SIZE ? t.MAX_BUFFER_SIZE : r
			}, e.prototype.fillViewportRows = function (e) {
				if (0 === this.lines.length) {
					void 0 === e && (e = n.DEFAULT_ATTR_DATA);
					for (var t = this._rows; t--;) this.lines.push(this.getBlankLine(e))
				}
			}, e.prototype.clear = function () {
				this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.lines = new i.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops()
			}, e.prototype.resize = function (e, t) {
				var r = this.getNullCell(n.DEFAULT_ATTR_DATA),
					i = this._getCorrectBufferLength(t);
				if (i > this.lines.maxLength && (this.lines.maxLength = i), this.lines.length > 0) {
					if (this._cols < e)
						for (var o = 0; o < this.lines.length; o++) this.lines.get(o).resize(e, r);
					var s = 0;
					if (this._rows < t)
						for (var a = this._rows; a < t; a++) this.lines.length < t + this.ybase && (this._optionsService.options.windowsMode ? this.lines.push(new n.BufferLine(e, r)) : this.ybase > 0 && this.lines.length <= this.ybase + this.y + s + 1 ? (this.ybase--, s++, this.ydisp > 0 && this.ydisp--) : this.lines.push(new n.BufferLine(e, r)));
					else
						for (a = this._rows; a > t; a--) this.lines.length > t + this.ybase && (this.lines.length > this.ybase + this.y + 1 ? this.lines.pop() : (this.ybase++, this.ydisp++));
					if (i < this.lines.maxLength) {
						var c = this.lines.length - i;
						c > 0 && (this.lines.trimStart(c), this.ybase = Math.max(this.ybase - c, 0), this.ydisp = Math.max(this.ydisp - c, 0), this.savedY = Math.max(this.savedY - c, 0)), this.lines.maxLength = i
					}
					this.x = Math.min(this.x, e - 1), this.y = Math.min(this.y, t - 1), s && (this.y += s), this.savedX = Math.min(this.savedX, e - 1), this.scrollTop = 0
				}
				if (this.scrollBottom = t - 1, this._isReflowEnabled && (this._reflow(e, t), this._cols > e))
					for (o = 0; o < this.lines.length; o++) this.lines.get(o).resize(e, r);
				this._cols = e, this._rows = t
			}, Object.defineProperty(e.prototype, "_isReflowEnabled", {
				get: function () {
					return this._hasScrollback && !this._optionsService.options.windowsMode
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype._reflow = function (e, t) {
				this._cols !== e && (e > this._cols ? this._reflowLarger(e, t) : this._reflowSmaller(e, t))
			}, e.prototype._reflowLarger = function (e, t) {
				var r = a.reflowLargerGetLinesToRemove(this.lines, this._cols, e, this.ybase + this.y, this.getNullCell(n.DEFAULT_ATTR_DATA));
				if (r.length > 0) {
					var i = a.reflowLargerCreateNewLayout(this.lines, r);
					a.reflowLargerApplyNewLayout(this.lines, i.layout), this._reflowLargerAdjustViewport(e, t, i.countRemoved)
				}
			}, e.prototype._reflowLargerAdjustViewport = function (e, t, r) {
				for (var i = this.getNullCell(n.DEFAULT_ATTR_DATA), o = r; o-- > 0;) 0 === this.ybase ? (this.y > 0 && this.y--, this.lines.length < t && this.lines.push(new n.BufferLine(e, i))) : (this.ydisp === this.ybase && this.ydisp--, this.ybase--);
				this.savedY = Math.max(this.savedY - r, 0)
			}, e.prototype._reflowSmaller = function (e, t) {
				for (var r = this.getNullCell(n.DEFAULT_ATTR_DATA), i = [], o = 0, s = this.lines.length - 1; s >= 0; s--) {
					var c = this.lines.get(s);
					if (!(!c || !c.isWrapped && c.getTrimmedLength() <= e)) {
						for (var l = [c]; c.isWrapped && s > 0;) c = this.lines.get(--s), l.unshift(c);
						var h = this.ybase + this.y;
						if (!(h >= s && h < s + l.length)) {
							var u = l[l.length - 1].getTrimmedLength(),
								f = a.reflowSmallerGetNewLineLengths(l, this._cols, e),
								_ = f.length - l.length,
								d = void 0;
							d = 0 === this.ybase && this.y !== this.lines.length - 1 ? Math.max(0, this.y - this.lines.maxLength + _) : Math.max(0, this.lines.length - this.lines.maxLength + _);
							for (var p = [], v = 0; v < _; v++) {
								var g = this.getBlankLine(n.DEFAULT_ATTR_DATA, !0);
								p.push(g)
							}
							p.length > 0 && (i.push({
								start: s + l.length + o,
								newLines: p
							}), o += p.length), l.push.apply(l, p);
							var y = f.length - 1,
								b = f[y];
							0 === b && (b = f[--y]);
							for (var m = l.length - _ - 1, C = u; m >= 0;) {
								var S = Math.min(C, b);
								if (l[y].copyCellsFrom(l[m], C - S, b - S, S, !0), 0 === (b -= S) && (b = f[--y]), 0 === (C -= S)) {
									m--;
									var w = Math.max(m, 0);
									C = a.getWrappedLineTrimmedLength(l, w, this._cols)
								}
							}
							for (v = 0; v < l.length; v++) f[v] < e && l[v].setCell(f[v], r);
							for (var E = _ - d; E-- > 0;) 0 === this.ybase ? this.y < t - 1 ? (this.y++, this.lines.pop()) : (this.ybase++, this.ydisp++) : this.ybase < Math.min(this.lines.maxLength, this.lines.length + o) - t && (this.ybase === this.ydisp && this.ydisp++, this.ybase++);
							this.savedY = Math.min(this.savedY + _, this.ybase + t - 1)
						}
					}
				}
				if (i.length > 0) {
					var L = [],
						A = [];
					for (v = 0; v < this.lines.length; v++) A.push(this.lines.get(v));
					var R = this.lines.length,
						x = R - 1,
						k = 0,
						D = i[k];
					this.lines.length = Math.min(this.lines.maxLength, this.lines.length + o);
					var T = 0;
					for (v = Math.min(this.lines.maxLength - 1, R + o - 1); v >= 0; v--)
						if (D && D.start > x + T) {
							for (var M = D.newLines.length - 1; M >= 0; M--) this.lines.set(v--, D.newLines[M]);
							v++, L.push({
								index: x + 1,
								amount: D.newLines.length
							}), T += D.newLines.length, D = i[++k]
						} else this.lines.set(v, A[x--]);
					var O = 0;
					for (v = L.length - 1; v >= 0; v--) L[v].index += O, this.lines.onInsertEmitter.fire(L[v]), O += L[v].amount;
					var P = Math.max(0, R + o - this.lines.maxLength);
					P > 0 && this.lines.onTrimEmitter.fire(P)
				}
			}, e.prototype.stringIndexToBufferIndex = function (e, t, r) {
				for (void 0 === r && (r = !1); t;) {
					var i = this.lines.get(e);
					if (!i) return [-1, -1];
					for (var n = r ? i.getTrimmedLength() : i.length, o = 0; o < n; ++o)
						if (i.get(o)[s.CHAR_DATA_WIDTH_INDEX] && (t -= i.get(o)[s.CHAR_DATA_CHAR_INDEX].length || 1), t < 0) return [e, o];
					e++
				}
				return [e, 0]
			}, e.prototype.translateBufferLineToString = function (e, t, r, i) {
				void 0 === r && (r = 0);
				var n = this.lines.get(e);
				return n ? n.translateToString(t, r, i) : ""
			}, e.prototype.getWrappedRangeForLine = function (e) {
				for (var t = e, r = e; t > 0 && this.lines.get(t).isWrapped;) t--;
				for (; r + 1 < this.lines.length && this.lines.get(r + 1).isWrapped;) r++;
				return {
					first: t,
					last: r
				}
			}, e.prototype.setupTabStops = function (e) {
				for (null != e ? this.tabs[e] || (e = this.prevStop(e)) : (this.tabs = {}, e = 0); e < this._cols; e += this._optionsService.options.tabStopWidth) this.tabs[e] = !0
			}, e.prototype.prevStop = function (e) {
				for (null == e && (e = this.x); !this.tabs[--e] && e > 0;);
				return e >= this._cols ? this._cols - 1 : e < 0 ? 0 : e
			}, e.prototype.nextStop = function (e) {
				for (null == e && (e = this.x); !this.tabs[++e] && e < this._cols;);
				return e >= this._cols ? this._cols - 1 : e < 0 ? 0 : e
			}, e.prototype.addMarker = function (e) {
				var t = this,
					r = new c.Marker(e);
				return this.markers.push(r), r.register(this.lines.onTrim(function (e) {
					r.line -= e, r.line < 0 && r.dispose()
				})), r.register(this.lines.onInsert(function (e) {
					r.line >= e.index && (r.line += e.amount)
				})), r.register(this.lines.onDelete(function (e) {
					r.line >= e.index && r.line < e.index + e.amount && r.dispose(), r.line > e.index && (r.line -= e.amount)
				})), r.register(r.onDispose(function () {
					return t._removeMarker(r)
				})), r
			}, e.prototype._removeMarker = function (e) {
				this.markers.splice(this.markers.indexOf(e), 1)
			}, e.prototype.iterator = function (e, t, r, i, n) {
				return new u(this, e, t, r, i, n)
			}, e
		}();
		t.Buffer = h;
		var u = function () {
			function e(e, t, r, i, n, o) {
				void 0 === r && (r = 0), void 0 === i && (i = e.lines.length), void 0 === n && (n = 0), void 0 === o && (o = 0), this._buffer = e, this._trimRight = t, this._startIndex = r, this._endIndex = i, this._startOverscan = n, this._endOverscan = o, this._startIndex < 0 && (this._startIndex = 0), this._endIndex > this._buffer.lines.length && (this._endIndex = this._buffer.lines.length), this._current = this._startIndex
			}
			return e.prototype.hasNext = function () {
				return this._current < this._endIndex
			}, e.prototype.next = function () {
				var e = this._buffer.getWrappedRangeForLine(this._current);
				e.first < this._startIndex - this._startOverscan && (e.first = this._startIndex - this._startOverscan), e.last > this._endIndex + this._endOverscan && (e.last = this._endIndex + this._endOverscan), e.first = Math.max(e.first, 0), e.last = Math.min(e.last, this._buffer.lines.length);
				for (var t = "", r = e.first; r <= e.last; ++r) t += this._buffer.translateBufferLineToString(r, this._trimRight);
				return this._current = e.last + 1, {
					range: e,
					content: t
				}
			}, e
		}();
		t.BufferStringIterator = u
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(1),
			n = function () {
				function e(e) {
					this._maxLength = e, this.onDeleteEmitter = new i.EventEmitter, this.onInsertEmitter = new i.EventEmitter, this.onTrimEmitter = new i.EventEmitter, this._array = new Array(this._maxLength), this._startIndex = 0, this._length = 0
				}
				return Object.defineProperty(e.prototype, "onDelete", {
					get: function () {
						return this.onDeleteEmitter.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onInsert", {
					get: function () {
						return this.onInsertEmitter.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onTrim", {
					get: function () {
						return this.onTrimEmitter.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "maxLength", {
					get: function () {
						return this._maxLength
					},
					set: function (e) {
						if (this._maxLength !== e) {
							for (var t = new Array(e), r = 0; r < Math.min(e, this.length); r++) t[r] = this._array[this._getCyclicIndex(r)];
							this._array = t, this._maxLength = e, this._startIndex = 0
						}
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "length", {
					get: function () {
						return this._length
					},
					set: function (e) {
						if (e > this._length)
							for (var t = this._length; t < e; t++) this._array[t] = void 0;
						this._length = e
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.get = function (e) {
					return this._array[this._getCyclicIndex(e)]
				}, e.prototype.set = function (e, t) {
					this._array[this._getCyclicIndex(e)] = t
				}, e.prototype.push = function (e) {
					this._array[this._getCyclicIndex(this._length)] = e, this._length === this._maxLength ? (this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1)) : this._length++
				}, e.prototype.recycle = function () {
					if (this._length !== this._maxLength) throw new Error("Can only recycle when the buffer is full");
					return this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1), this._array[this._getCyclicIndex(this._length - 1)]
				}, Object.defineProperty(e.prototype, "isFull", {
					get: function () {
						return this._length === this._maxLength
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.pop = function () {
					return this._array[this._getCyclicIndex(this._length-- - 1)]
				}, e.prototype.splice = function (e, t) {
					for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
					if (t) {
						for (var n = e; n < this._length - t; n++) this._array[this._getCyclicIndex(n)] = this._array[this._getCyclicIndex(n + t)];
						this._length -= t
					}
					for (n = this._length - 1; n >= e; n--) this._array[this._getCyclicIndex(n + r.length)] = this._array[this._getCyclicIndex(n)];
					for (n = 0; n < r.length; n++) this._array[this._getCyclicIndex(e + n)] = r[n];
					if (this._length + r.length > this._maxLength) {
						var o = this._length + r.length - this._maxLength;
						this._startIndex += o, this._length = this._maxLength, this.onTrimEmitter.fire(o)
					} else this._length += r.length
				}, e.prototype.trimStart = function (e) {
					e > this._length && (e = this._length), this._startIndex += e, this._length -= e, this.onTrimEmitter.fire(e)
				}, e.prototype.shiftElements = function (e, t, r) {
					if (!(t <= 0)) {
						if (e < 0 || e >= this._length) throw new Error("start argument out of range");
						if (e + r < 0) throw new Error("Cannot shift elements in list beyond index 0");
						if (r > 0) {
							for (var i = t - 1; i >= 0; i--) this.set(e + i + r, this.get(e + i));
							var n = e + t + r - this._length;
							if (n > 0)
								for (this._length += n; this._length > this._maxLength;) this._length--, this._startIndex++, this.onTrimEmitter.fire(1)
						} else
							for (i = 0; i < t; i++) this.set(e + i + r, this.get(e + i))
					}
				}, e.prototype._getCyclicIndex = function (e) {
					return (this._startIndex + e) % this._maxLength
				}, e
			}();
		t.CircularList = n
	}, function (e, t, r) {
		"use strict";

		function i(e, t, r) {
			if (t === e.length - 1) return e[t].getTrimmedLength();
			var i = !e[t].hasContent(r - 1) && 1 === e[t].getWidth(r - 1),
				n = 2 === e[t + 1].getWidth(0);
			return i && n ? r - 1 : r
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.reflowLargerGetLinesToRemove = function (e, t, r, n, o) {
			for (var s = [], a = 0; a < e.length - 1; a++) {
				var c = a,
					l = e.get(++c);
				if (l.isWrapped) {
					for (var h = [e.get(a)]; c < e.length && l.isWrapped;) h.push(l), l = e.get(++c);
					if (n >= a && n < c) a += h.length - 1;
					else {
						for (var u = 0, f = i(h, u, t), _ = 1, d = 0; _ < h.length;) {
							var p = i(h, _, t),
								v = p - d,
								g = r - f,
								y = Math.min(v, g);
							h[u].copyCellsFrom(h[_], d, f, y, !1), (f += y) === r && (u++, f = 0), (d += y) === p && (_++, d = 0), 0 === f && 0 !== u && 2 === h[u - 1].getWidth(r - 1) && (h[u].copyCellsFrom(h[u - 1], r - 1, f++, 1, !1), h[u - 1].setCell(r - 1, o))
						}
						h[u].replaceCells(f, r, o);
						for (var b = 0, m = h.length - 1; m > 0 && (m > u || 0 === h[m].getTrimmedLength()); m--) b++;
						b > 0 && (s.push(a + h.length - b), s.push(b)), a += h.length - 1
					}
				}
			}
			return s
		}, t.reflowLargerCreateNewLayout = function (e, t) {
			for (var r = [], i = 0, n = t[i], o = 0, s = 0; s < e.length; s++)
				if (n === s) {
					var a = t[++i];
					e.onDeleteEmitter.fire({
						index: s - o,
						amount: a
					}), s += a - 1, o += a, n = t[++i]
				} else r.push(s);
			return {
				layout: r,
				countRemoved: o
			}
		}, t.reflowLargerApplyNewLayout = function (e, t) {
			for (var r = [], i = 0; i < t.length; i++) r.push(e.get(t[i]));
			for (i = 0; i < r.length; i++) e.set(i, r[i]);
			e.length = t.length
		}, t.reflowSmallerGetNewLineLengths = function (e, t, r) {
			for (var n = [], o = e.map(function (r, n) {
					return i(e, n, t)
				}).reduce(function (e, t) {
					return e + t
				}), s = 0, a = 0, c = 0; c < o;) {
				if (o - c < r) {
					n.push(o - c);
					break
				}
				s += r;
				var l = i(e, a, t);
				s > l && (s -= l, a++);
				var h = 2 === e[a].getWidth(s - 1);
				h && s--;
				var u = h ? r - 1 : r;
				n.push(u), c += u
			}
			return n
		}, t.getWrappedLineTrimmedLength = i
	}, function (e, t, r) {
		"use strict";
		var i, n = this && this.__extends || (i = function (e, t) {
			return (i = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (e, t) {
					e.__proto__ = t
				} || function (e, t) {
					for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
				})(e, t)
		}, function (e, t) {
			function r() {
				this.constructor = e
			}
			i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
		});
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(1),
			s = function (e) {
				function t(r) {
					var i = e.call(this) || this;
					return i.line = r, i._id = t._nextId++, i.isDisposed = !1, i._onDispose = new o.EventEmitter, i
				}
				return n(t, e), Object.defineProperty(t.prototype, "id", {
					get: function () {
						return this._id
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "onDispose", {
					get: function () {
						return this._onDispose.event
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.dispose = function () {
					this.isDisposed || (this.isDisposed = !0, this.line = -1, this._onDispose.fire())
				}, t._nextId = 1, t
			}(r(2).Disposable);
		t.Marker = s
	}, function (e, t, r) {
		"use strict";
		var i = this && this.__decorate || function (e, t, r, i) {
				var n, o = arguments.length,
					s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
				return o > 3 && s && Object.defineProperty(t, r, s), s
			},
			n = this && this.__param || function (e, t) {
				return function (r, i) {
					t(r, i, e)
				}
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(4),
			s = r(29),
			a = function () {
				function e(e, t) {
					this._renderService = e, this._charSizeService = t
				}
				return e.prototype.getCoords = function (e, t, r, i, n) {
					return s.getCoords(e, t, r, i, this._charSizeService.hasValidSize, this._renderService.dimensions.actualCellWidth, this._renderService.dimensions.actualCellHeight, n)
				}, e.prototype.getRawByteCoords = function (e, t, r, i) {
					var n = this.getCoords(e, t, r, i);
					return s.getRawByteCoords(n)
				}, e = i([n(0, o.IRenderService), n(1, o.ICharSizeService)], e)
			}();
		t.MouseService = a
	}, function (e, t, r) {
		"use strict";
		var i = this && this.__decorate || function (e, t, r, i) {
				var n, o = arguments.length,
					s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
				return o > 3 && s && Object.defineProperty(t, r, s), s
			},
			n = this && this.__param || function (e, t) {
				return function (r, i) {
					t(r, i, e)
				}
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(0),
			s = r(1),
			a = r(32),
			c = Object.freeze({
				applicationCursorKeys: !1
			}),
			l = function () {
				function e(e, t, r, i) {
					this._scrollToBottom = e, this._bufferService = t, this._logService = r, this._optionsService = i, this.isCursorInitialized = !1, this.isCursorHidden = !1, this._onData = new s.EventEmitter, this._onUserInput = new s.EventEmitter, this._onBinary = new s.EventEmitter, this.decPrivateModes = a.clone(c)
				}
				return Object.defineProperty(e.prototype, "onData", {
					get: function () {
						return this._onData.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onUserInput", {
					get: function () {
						return this._onUserInput.event
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "onBinary", {
					get: function () {
						return this._onBinary.event
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.reset = function () {
					this.decPrivateModes = a.clone(c)
				}, e.prototype.triggerDataEvent = function (e, t) {
					if (void 0 === t && (t = !1), !this._optionsService.options.disableStdin) {
						var r = this._bufferService.buffer;
						r.ybase !== r.ydisp && this._scrollToBottom(), t && this._onUserInput.fire(), this._logService.debug('sending data "' + e + '"', function () {
							return e.split("").map(function (e) {
								return e.charCodeAt(0)
							})
						}), this._onData.fire(e)
					}
				}, e.prototype.triggerBinaryEvent = function (e) {
					this._optionsService.options.disableStdin || (this._logService.debug('sending binary "' + e + '"', function () {
						return e.split("").map(function (e) {
							return e.charCodeAt(0)
						})
					}), this._onBinary.fire(e))
				}, e = i([n(1, o.IBufferService), n(2, o.ILogService), n(3, o.IOptionsService)], e)
			}();
		t.CoreService = l
	}, function (e, t, r) {
		"use strict";
		var i = this && this.__decorate || function (e, t, r, i) {
				var n, o = arguments.length,
					s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
				return o > 3 && s && Object.defineProperty(t, r, s), s
			},
			n = this && this.__param || function (e, t) {
				return function (r, i) {
					t(r, i, e)
				}
			},
			o = this && this.__spreadArrays || function () {
				for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
				var i = Array(e),
					n = 0;
				for (t = 0; t < r; t++)
					for (var o = arguments[t], s = 0, a = o.length; s < a; s++, n++) i[n] = o[s];
				return i
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var s, a = r(0);
		! function (e) {
			e[e.DEBUG = 0] = "DEBUG", e[e.INFO = 1] = "INFO", e[e.WARN = 2] = "WARN", e[e.ERROR = 3] = "ERROR", e[e.OFF = 4] = "OFF"
		}(s = t.LogLevel || (t.LogLevel = {}));
		var c = {
				debug: s.DEBUG,
				info: s.INFO,
				warn: s.WARN,
				error: s.ERROR,
				off: s.OFF
			},
			l = function () {
				function e(e) {
					var t = this;
					this._optionsService = e, this._updateLogLevel(), this._optionsService.onOptionChange(function (e) {
						"logLevel" === e && t._updateLogLevel()
					})
				}
				return e.prototype._updateLogLevel = function () {
					this._logLevel = c[this._optionsService.options.logLevel]
				}, e.prototype._evalLazyOptionalParams = function (e) {
					for (var t = 0; t < e.length; t++) "function" == typeof e[t] && (e[t] = e[t]())
				}, e.prototype._log = function (e, t, r) {
					this._evalLazyOptionalParams(r), e.call.apply(e, o([console, "xterm.js: " + t], r))
				}, e.prototype.debug = function (e) {
					for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
					this._logLevel <= s.DEBUG && this._log(console.log, e, t)
				}, e.prototype.info = function (e) {
					for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
					this._logLevel <= s.INFO && this._log(console.info, e, t)
				}, e.prototype.warn = function (e) {
					for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
					this._logLevel <= s.WARN && this._log(console.warn, e, t)
				}, e.prototype.error = function (e) {
					for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
					this._logLevel <= s.ERROR && this._log(console.error, e, t)
				}, e = i([n(0, a.IOptionsService)], e)
			}();
		t.LogService = l
	}, function (e, t, r) {
		"use strict";
		var i = this && this.__decorate || function (e, t, r, i) {
				var n, o = arguments.length,
					s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
				return o > 3 && s && Object.defineProperty(t, r, s), s
			},
			n = this && this.__param || function (e, t) {
				return function (r, i) {
					t(r, i, e)
				}
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(0),
			s = function () {
				function e(e) {
					this._bufferService = e, this.clearRange()
				}
				return Object.defineProperty(e.prototype, "start", {
					get: function () {
						return this._start
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "end", {
					get: function () {
						return this._end
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.clearRange = function () {
					this._start = this._bufferService.buffer.y, this._end = this._bufferService.buffer.y
				}, e.prototype.markDirty = function (e) {
					e < this._start ? this._start = e : e > this._end && (this._end = e)
				}, e.prototype.markRangeDirty = function (e, t) {
					if (e > t) {
						var r = e;
						e = t, t = r
					}
					e < this._start && (this._start = e), t > this._end && (this._end = t)
				}, e.prototype.markAllDirty = function () {
					this.markRangeDirty(0, this._bufferService.rows - 1)
				}, e = i([n(0, o.IBufferService)], e)
			}();
		t.DirtyRowService = s
	}, function (e, t, r) {
		"use strict";
		var i = this && this.__spreadArrays || function () {
			for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
			var i = Array(e),
				n = 0;
			for (t = 0; t < r; t++)
				for (var o = arguments[t], s = 0, a = o.length; s < a; s++, n++) i[n] = o[s];
			return i
		};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = r(0),
			o = r(14),
			s = function () {
				function e() {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					this._entries = new Map;
					for (var r = 0, i = e; r < i.length; r++) {
						var n = i[r],
							o = n[0],
							s = n[1];
						this.set(o, s)
					}
				}
				return e.prototype.set = function (e, t) {
					var r = this._entries.get(e);
					return this._entries.set(e, t), r
				}, e.prototype.forEach = function (e) {
					this._entries.forEach(function (t, r) {
						return e(r, t)
					})
				}, e.prototype.has = function (e) {
					return this._entries.has(e)
				}, e.prototype.get = function (e) {
					return this._entries.get(e)
				}, e
			}();
		t.ServiceCollection = s;
		var a = function () {
			function e() {
				this._services = new s, this._services.set(n.IInstantiationService, this)
			}
			return e.prototype.setService = function (e, t) {
				this._services.set(e, t)
			}, e.prototype.createInstance = function (e) {
				for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
				for (var n = o.getServiceDependencies(e).sort(function (e, t) {
						return e.index - t.index
					}), s = [], a = 0, c = n; a < c.length; a++) {
					var l = c[a],
						h = this._services.get(l.id);
					if (!h) throw new Error("[createInstance] " + e.name + " depends on UNKNOWN service " + l.id + ".");
					s.push(h)
				}
				var u = n.length > 0 ? n[0].index : t.length;
				if (t.length !== u) throw new Error("[createInstance] First service dependency of " + e.name + " at position " + (u + 1) + " conflicts with " + t.length + " static arguments");
				return new(e.bind.apply(e, i([void 0], i(t, s))))
			}, e
		}();
		t.InstantiationService = a
	}, function (e, t, r) {
		"use strict";
		var i = this && this.__decorate || function (e, t, r, i) {
				var n, o = arguments.length,
					s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
				else
					for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
				return o > 3 && s && Object.defineProperty(t, r, s), s
			},
			n = this && this.__param || function (e, t) {
				return function (r, i) {
					t(r, i, e)
				}
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(0),
			s = r(1),
			a = {
				NONE: {
					events: 0,
					restrict: function () {
						return !1
					}
				},
				X10: {
					events: 1,
					restrict: function (e) {
						return 4 !== e.button && 1 === e.action && (e.ctrl = !1, e.alt = !1, e.shift = !1, !0)
					}
				},
				VT200: {
					events: 19,
					restrict: function (e) {
						return 32 !== e.action
					}
				},
				DRAG: {
					events: 23,
					restrict: function (e) {
						return 32 !== e.action || 3 !== e.button
					}
				},
				ANY: {
					events: 31,
					restrict: function (e) {
						return !0
					}
				}
			};

		function c(e, t) {
			var r = (e.ctrl ? 16 : 0) | (e.shift ? 4 : 0) | (e.alt ? 8 : 0);
			return 4 === e.button ? (r |= 64, r |= e.action) : (r |= 3 & e.button, 4 & e.button && (r |= 64), 8 & e.button && (r |= 128), 32 === e.action ? r |= 32 : 0 !== e.action || t || (r |= 3)), r
		}
		var l = String.fromCharCode,
			h = {
				DEFAULT: function (e) {
					var t = [c(e, !1) + 32, e.col + 32, e.row + 32];
					return t[0] > 255 || t[1] > 255 || t[2] > 255 ? "" : "[M" + l(t[0]) + l(t[1]) + l(t[2])
				},
				SGR: function (e) {
					var t = 0 === e.action && 4 !== e.button ? "m" : "M";
					return "[<" + c(e, !0) + ";" + e.col + ";" + e.row + t
				}
			},
			u = function () {
				function e(e, t) {
					var r = this;
					this._bufferService = e, this._coreService = t, this._protocols = {}, this._encodings = {}, this._activeProtocol = "", this._activeEncoding = "", this._onProtocolChange = new s.EventEmitter, this._lastEvent = null, Object.keys(a).forEach(function (e) {
						return r.addProtocol(e, a[e])
					}), Object.keys(h).forEach(function (e) {
						return r.addEncoding(e, h[e])
					}), this.reset()
				}
				return e.prototype.addProtocol = function (e, t) {
					this._protocols[e] = t
				}, e.prototype.addEncoding = function (e, t) {
					this._encodings[e] = t
				}, Object.defineProperty(e.prototype, "activeProtocol", {
					get: function () {
						return this._activeProtocol
					},
					set: function (e) {
						if (!this._protocols[e]) throw new Error('unknown protocol "' + e + '"');
						this._activeProtocol = e, this._onProtocolChange.fire(this._protocols[e].events)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "activeEncoding", {
					get: function () {
						return this._activeEncoding
					},
					set: function (e) {
						if (!this._encodings[e]) throw new Error('unknown encoding "' + e + '"');
						this._activeEncoding = e
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.reset = function () {
					this.activeProtocol = "NONE", this.activeEncoding = "DEFAULT", this._lastEvent = null
				}, Object.defineProperty(e.prototype, "onProtocolChange", {
					get: function () {
						return this._onProtocolChange.event
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.triggerMouseEvent = function (e) {
					if (e.col < 0 || e.col >= this._bufferService.cols || e.row < 0 || e.row >= this._bufferService.rows) return !1;
					if (4 === e.button && 32 === e.action) return !1;
					if (3 === e.button && 32 !== e.action) return !1;
					if (4 !== e.button && (2 === e.action || 3 === e.action)) return !1;
					if (e.col++, e.row++, 32 === e.action && this._lastEvent && this._compareEvents(this._lastEvent, e)) return !1;
					if (!this._protocols[this._activeProtocol].restrict(e)) return !1;
					var t = this._encodings[this._activeEncoding](e);
					return t && ("DEFAULT" === this._activeEncoding ? this._coreService.triggerBinaryEvent(t) : this._coreService.triggerDataEvent(t, !0)), this._lastEvent = e, !0
				}, e.prototype.explainEvents = function (e) {
					return {
						DOWN: !!(1 & e),
						UP: !!(2 & e),
						DRAG: !!(4 & e),
						MOVE: !!(8 & e),
						WHEEL: !!(16 & e)
					}
				}, e.prototype._compareEvents = function (e, t) {
					return e.col === t.col && (e.row === t.row && (e.button === t.button && (e.action === t.action && (e.ctrl === t.ctrl && (e.alt === t.alt && e.shift === t.shift)))))
				}, e = i([n(0, o.IBufferService), n(1, o.ICoreService)], e)
			}();
		t.CoreMouseService = u
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
			function e(e) {
				this._action = e, this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 0
			}
			return e.prototype.writeSync = function (e) {
				if (this._writeBuffer.length) {
					for (var t = this._bufferOffset; t < this._writeBuffer.length; ++t) {
						var r = this._writeBuffer[t],
							i = this._callbacks[t];
						this._action(r), i && i()
					}
					this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 2147483647
				}
				this._action(e)
			}, e.prototype.write = function (e, t) {
				var r = this;
				if (this._pendingData > 5e7) throw new Error("write data discarded, use flow control to avoid losing data");
				this._writeBuffer.length || (this._bufferOffset = 0, setTimeout(function () {
					return r._innerWrite()
				})), this._pendingData += e.length, this._writeBuffer.push(e), this._callbacks.push(t)
			}, e.prototype._innerWrite = function () {
				for (var e = this, t = Date.now(); this._writeBuffer.length > this._bufferOffset;) {
					var r = this._writeBuffer[this._bufferOffset],
						i = this._callbacks[this._bufferOffset];
					if (this._bufferOffset++, this._action(r), this._pendingData -= r.length, i && i(), Date.now() - t >= 12) break
				}
				this._writeBuffer.length > this._bufferOffset ? (this._bufferOffset > 50 && (this._writeBuffer = this._writeBuffer.slice(this._bufferOffset), this._callbacks = this._callbacks.slice(this._bufferOffset), this._bufferOffset = 0), setTimeout(function () {
					return e._innerWrite()
				}, 0)) : (this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 0)
			}, e
		}();
		t.WriteBuffer = i
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
			function e(e) {
				this._textarea = e
			}
			return Object.defineProperty(e.prototype, "isFocused", {
				get: function () {
					return document.activeElement === this._textarea && document.hasFocus()
				},
				enumerable: !0,
				configurable: !0
			}), e
		}();
		t.CoreBrowserService = i
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = function () {
			function e() {
				this._addons = []
			}
			return e.prototype.dispose = function () {
				for (var e = this._addons.length - 1; e >= 0; e--) this._addons[e].instance.dispose()
			}, e.prototype.loadAddon = function (e, t) {
				var r = this,
					i = {
						instance: t,
						dispose: t.dispose,
						isDisposed: !1
					};
				this._addons.push(i), t.dispose = function () {
					return r._wrappedAddonDispose(i)
				}, t.activate(e)
			}, e.prototype._wrappedAddonDispose = function (e) {
				if (!e.isDisposed) {
					for (var t = -1, r = 0; r < this._addons.length; r++)
						if (this._addons[r] === e) {
							t = r;
							break
						} if (-1 === t) throw new Error("Could not dispose an addon that has not been loaded");
					e.isDisposed = !0, e.dispose.apply(e.instance), this._addons.splice(t, 1)
				}
			}, e
		}();
		t.AddonManager = i
	}])
});
//# sourceMappingURL=xterm.js.map
