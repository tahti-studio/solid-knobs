/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/solid-parameter-controls/dist/Arc.jsx":
/*!************************************************************!*\
  !*** ./node_modules/solid-parameter-controls/dist/Arc.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Arc)
/* harmony export */ });
/* harmony import */ var solid_js_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! solid-js/web */ "./node_modules/solid-js/web/dist/dev.js");
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! solid-js */ "./node_modules/solid-js/dist/dev.js");





const _tmpl$ = /*#__PURE__*/(0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.template)(`<svg><path fill="none"></path></svg>`, 4, true);



function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  if (startAngle > endAngle) {
    let tmp = startAngle;
    startAngle = endAngle;
    endAngle = tmp;
  }

  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  const d = ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(" ");
  return d;
}
/**
 * Produces an SVG path element that renders an arc segment.
 */


function Arc(allProps) {
  const [props, pathProps] = (0,solid_js__WEBPACK_IMPORTED_MODULE_1__.splitProps)(allProps, ['x', 'y', 'radius', 'startAngle', 'endAngle']);
  return (() => {
    const _el$ = _tmpl$.cloneNode(true);

    (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.spread)(_el$, pathProps, true, false);

    (0,solid_js__WEBPACK_IMPORTED_MODULE_1__.createRenderEffect)(() => (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(_el$, "d", describeArc(props.x, props.y, props.radius, props.startAngle, props.endAngle)));

    return _el$;
  })();
}
;

/***/ }),

/***/ "./node_modules/solid-parameter-controls/dist/Control.jsx":
/*!****************************************************************!*\
  !*** ./node_modules/solid-parameter-controls/dist/Control.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Control)
/* harmony export */ });
/* harmony import */ var solid_js_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! solid-js/web */ "./node_modules/solid-js/web/dist/dev.js");
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! solid-js */ "./node_modules/solid-js/dist/dev.js");
/* harmony import */ var _ParameterGestureHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParameterGestureHandler */ "./node_modules/solid-parameter-controls/dist/ParameterGestureHandler.jsx");









const _tmpl$ = /*#__PURE__*/(0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.template)(`<div tabindex="0" role="slider"></div>`, 2);



function Control(allProps) {
  const [props, otherProps] = (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.splitProps)(allProps, ['children', 'label', 'defaultValue']);
  const [gestureProps, divProps] = (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.splitProps)(otherProps, ['value', 'range', 'onStart', 'onChange']);

  const onGestureStart = e => {
    if (divProps.onGestureStart instanceof Function) {
      divProps.onGestureStart(e);
    }

    const onGestureEnd = e => {
      if (divProps.onGestureEnd instanceof Function) divProps.onGestureEnd && divProps.onGestureEnd(e);
      window.removeEventListener('mouseup', onGestureEnd);
    };

    window.addEventListener('mouseup', onGestureEnd);
  };

  const resetToDefault = () => {
    if (props.defaultValue && gestureProps.onChange) gestureProps.onChange(props.defaultValue);
  };

  return (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createComponent)(_ParameterGestureHandler__WEBPACK_IMPORTED_MODULE_1__["default"], (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.mergeProps)(gestureProps, {
    children: ref => (() => {
      const _el$ = _tmpl$.cloneNode(true);

      _el$.$$click = onGestureStart;
      _el$.$$touchstart = onGestureStart;
      _el$.$$mousedown = onGestureStart;
      _el$.$$dblclick = resetToDefault;
      const _ref$ = ref;
      typeof _ref$ === "function" ? _ref$(_el$) : ref = _el$;

      (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.spread)(_el$, divProps, false, true);

      (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.insert)(_el$, () => props.children);

      (0,solid_js__WEBPACK_IMPORTED_MODULE_2__.createRenderEffect)(_p$ => {
        const _v$ = props.label,
              _v$2 = gestureProps.range.getStart(),
              _v$3 = gestureProps.range.getEnd(),
              _v$4 = gestureProps.value,
              _v$5 = gestureProps.range.toString(gestureProps.value);

        _v$ !== _p$._v$ && (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(_el$, "aria-label", _p$._v$ = _v$);
        _v$2 !== _p$._v$2 && (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(_el$, "aria-valuemin", _p$._v$2 = _v$2);
        _v$3 !== _p$._v$3 && (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(_el$, "aria-valuemax", _p$._v$3 = _v$3);
        _v$4 !== _p$._v$4 && (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(_el$, "aria-valuenow", _p$._v$4 = _v$4);
        _v$5 !== _p$._v$5 && (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.setAttribute)(_el$, "aria-valuetext", _p$._v$5 = _v$5);
        return _p$;
      }, {
        _v$: undefined,
        _v$2: undefined,
        _v$3: undefined,
        _v$4: undefined,
        _v$5: undefined
      });

      return _el$;
    })()
  }));
}

(0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.delegateEvents)(["dblclick", "mousedown", "touchstart", "click"]);

/***/ }),

/***/ "./node_modules/solid-parameter-controls/dist/ParameterGestureHandler.jsx":
/*!********************************************************************************!*\
  !*** ./node_modules/solid-parameter-controls/dist/ParameterGestureHandler.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ParameterGestureHandler)
/* harmony export */ });
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! solid-js */ "./node_modules/solid-js/dist/dev.js");

function ParameterGestureHandler(props) {
  let element = null;
  let isDragging = false;
  let valueOnDragStart = 0;
  let dragValue = 0;
  let dragStartValue = 0;
  let value = 0;

  const change = (newValue, snap) => {
    if (props.onChange) {
      if (newValue !== value) {
        newValue = props.range.fromNormalised(newValue);

        if (snap) {
          newValue = props.range.snap(newValue);
        }

        props.onChange(newValue);
      }
    }
  };

  const onMouseMove = e => {
    if (isDragging) {
      if (props.hideCursor && document.pointerLockElement !== element) {
        element === null || element === void 0 ? void 0 : element.requestPointerLock();
      }

      dragValue -= e.movementY;
      const speedMultiplier = e.shiftKey ? 0.1 : 1;
      const delta = speedMultiplier * (props.speed || 1) * dragValue / 250;
      change(valueOnDragStart + delta, !e.shiftKey);
    }
  };

  const onMouseUp = () => {
    if (!isDragging) return;

    if (props.onEnd) {
      props.onEnd(props.value);
    }

    isDragging = false;

    if (props.hideCursor) {
      document.exitPointerLock();
    }
  };

  const mouseDown = e => {
    if (props.onStart) {
      props.onStart(props.value);
    }

    valueOnDragStart = value;
    dragValue = 0;
    dragStartValue = 0;
    isDragging = true;
  };

  const keyUp = () => {
    if (isDragging) {
      valueOnDragStart = value;
      dragValue = dragStartValue;
    }
  };

  const wheel = e => {
    e.stopPropagation();
    e.preventDefault();
    change(value - e.deltaY / 2000, false);
  };

  const touchStart = e => {
    if (props.onStart) {
      props.onStart(props.value);
    }

    valueOnDragStart = value;
    dragValue = e.touches[0].pageY;
    isDragging = true;
  };

  const touchMove = e => {
    e.preventDefault();
    e.stopPropagation();

    if (isDragging) {
      dragStartValue = e.touches[0].pageY;
      const delta = (props.speed || 1) * (dragValue - dragStartValue) / 250;
      change(valueOnDragStart + delta, !e.shiftKey);
    }
  };

  const touchEnd = e => {
    e.preventDefault();
    e.stopPropagation();
    isDragging = false;

    if (props.onEnd) {
      props.onEnd(props.value);
    }
  };

  const arrowKeyListener = e => {
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key) && props.onChange) {
      e.preventDefault();
      e.stopPropagation();
      const nudge = (['ArrowDown', 'ArrowUp'].includes(e.key) ? 1 : 10) * (['ArrowLeft', 'ArrowDown'].includes(e.key) ? -1 : 1);
      props.onChange(props.range.nudge(props.value, nudge));
    }
  };

  const focus = () => {
    element === null || element === void 0 ? void 0 : element.addEventListener('keydown', arrowKeyListener);
  };

  const blur = () => {
    element === null || element === void 0 ? void 0 : element.removeEventListener('keydown', arrowKeyListener);
  };

  const registerElement = newElement => {
    if (!element && newElement) {
      element = newElement;
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      element.addEventListener('mousedown', mouseDown);
      element.addEventListener('wheel', wheel, {
        passive: false
      });
      element.addEventListener('keyup', keyUp);
      element.addEventListener('focus', focus);
      element.addEventListener('blur', blur);
      element.addEventListener('touchstart', touchStart, {
        cancelable: true
      });
      element.addEventListener('touchmove', touchMove, {
        cancelable: true
      });
      element.addEventListener('touchend', touchEnd, {
        cancelable: true
      });
    }
  };

  (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.onCleanup)(() => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);

    if (element) {
      element.removeEventListener('mousedown', mouseDown);
      element.removeEventListener('wheel', wheel);
      element.removeEventListener('keyup', keyUp);
      element.removeEventListener('blur', blur);
      element.removeEventListener('touchstart', touchStart);
      element.removeEventListener('touchmove', touchMove);
      element.removeEventListener('touchend', touchEnd);
    }
  });
  (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => {
    value = props.range.toNormalised(props.value);
  });
  return props.children(registerElement);
}

/***/ }),

/***/ "./node_modules/solid-parameter-controls/dist/ValueInput.jsx":
/*!*******************************************************************!*\
  !*** ./node_modules/solid-parameter-controls/dist/ValueInput.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ValueInput)
/* harmony export */ });
/* harmony import */ var solid_js_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! solid-js/web */ "./node_modules/solid-js/web/dist/dev.js");
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! solid-js */ "./node_modules/solid-js/dist/dev.js");





const _tmpl$ = /*#__PURE__*/(0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.template)(`<input type="text">`, 1);


function ValueInput(allProps) {
  const [props, inputProps] = (0,solid_js__WEBPACK_IMPORTED_MODULE_1__.splitProps)(allProps, ['onChange', 'range']);
  return (() => {
    const _el$ = _tmpl$.cloneNode(true);

    _el$.$$keydown = e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        const number = e.target.value.replace(/[^0-9\.\-]/g, '');
        const unit = e.target.value.replace(number, '');
        props.onChange(props.range.fromString(+number, unit));
      }
    };

    _el$.$$click = e => e.target.select();

    (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.spread)(_el$, inputProps, false, false);

    (0,solid_js__WEBPACK_IMPORTED_MODULE_1__.createRenderEffect)(() => _el$.value = inputProps.value);

    return _el$;
  })();
}
;

(0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.delegateEvents)(["click", "keydown"]);

/***/ }),

/***/ "./node_modules/solid-parameter-controls/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/solid-parameter-controls/dist/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arc": () => (/* reexport safe */ _Arc__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "ChoiceRange": () => (/* reexport safe */ _range__WEBPACK_IMPORTED_MODULE_4__.ChoiceRange),
/* harmony export */   "ContinuousRange": () => (/* reexport safe */ _range__WEBPACK_IMPORTED_MODULE_4__.ContinuousRange),
/* harmony export */   "Control": () => (/* reexport safe */ _Control__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "ParameterGestureHandler": () => (/* reexport safe */ _ParameterGestureHandler__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Scale": () => (/* reexport safe */ _range__WEBPACK_IMPORTED_MODULE_4__.Scale),
/* harmony export */   "ToggleRange": () => (/* reexport safe */ _range__WEBPACK_IMPORTED_MODULE_4__.ToggleRange),
/* harmony export */   "ValueInput": () => (/* reexport safe */ _ValueInput__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "limit": () => (/* reexport safe */ _range__WEBPACK_IMPORTED_MODULE_4__.limit)
/* harmony export */ });
/* harmony import */ var _ParameterGestureHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParameterGestureHandler */ "./node_modules/solid-parameter-controls/dist/ParameterGestureHandler.jsx");
/* harmony import */ var _Control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Control */ "./node_modules/solid-parameter-controls/dist/Control.jsx");
/* harmony import */ var _Arc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Arc */ "./node_modules/solid-parameter-controls/dist/Arc.jsx");
/* harmony import */ var _ValueInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ValueInput */ "./node_modules/solid-parameter-controls/dist/ValueInput.jsx");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./range */ "./node_modules/solid-parameter-controls/dist/range/index.js");






/***/ }),

/***/ "./node_modules/solid-parameter-controls/dist/range/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/solid-parameter-controls/dist/range/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChoiceRange": () => (/* reexport safe */ _range__WEBPACK_IMPORTED_MODULE_0__.ChoiceRange),
/* harmony export */   "ContinuousRange": () => (/* reexport safe */ _range__WEBPACK_IMPORTED_MODULE_0__.ContinuousRange),
/* harmony export */   "Scale": () => (/* reexport safe */ _range__WEBPACK_IMPORTED_MODULE_0__.Scale),
/* harmony export */   "ToggleRange": () => (/* reexport safe */ _range__WEBPACK_IMPORTED_MODULE_0__.ToggleRange),
/* harmony export */   "limit": () => (/* reexport safe */ _range__WEBPACK_IMPORTED_MODULE_0__.limit)
/* harmony export */ });
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./range */ "./node_modules/solid-parameter-controls/dist/range/range.js");


/***/ }),

/***/ "./node_modules/solid-parameter-controls/dist/range/range.js":
/*!*******************************************************************!*\
  !*** ./node_modules/solid-parameter-controls/dist/range/range.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChoiceRange": () => (/* binding */ ChoiceRange),
/* harmony export */   "ContinuousRange": () => (/* binding */ ContinuousRange),
/* harmony export */   "Scale": () => (/* binding */ Scale),
/* harmony export */   "ToggleRange": () => (/* binding */ ToggleRange),
/* harmony export */   "limit": () => (/* binding */ limit)
/* harmony export */ });
/**
 * Clamps `value` to at least `min` and at most `max`.
 */
function limit(value, min, max) {
  return Math.min(Math.max(min, value), max);
}

function log(n, base) {
  return Math.log(n) / Math.log(base);
}
/**
 * Converts `value` from the range `valueStart`...`valueEnd` to the range `targetStart`...`targetEnd`.
 */


function toRange(value, valueStart, valueEnd, targetStart, targetEnd) {
  if (valueEnd === valueStart) {
    return targetStart;
  }

  const normalised = (value - valueStart) / (valueEnd - valueStart);
  return limit(targetStart + normalised * (targetEnd - targetStart), targetStart, targetEnd);
}

var Scale;

(function (Scale) {
  Scale[Scale["Exponential"] = 0] = "Exponential";
  Scale[Scale["Logarithmic"] = 1] = "Logarithmic";
  Scale[Scale["Linear"] = 2] = "Linear";
})(Scale || (Scale = {}));

;
class ChoiceRange {
  constructor(choices) {
    this.choices = choices;
  }

  toNormalised(value) {
    return this.choices.findIndex(c => c.value === value) / (this.choices.length - 1);
  }

  fromNormalised(value) {
    value = limit(value, 0, 1);
    return this.choices[Math.round(value * (this.choices.length - 1))].value;
  }

  fromString(value, unit) {
    return value;
  }

  toString(value) {
    var _a;

    return ((_a = this.choices.find(d => d.value === value)) === null || _a === void 0 ? void 0 : _a.label) || '???';
  }

  getRandom() {
    return this.choices[Math.floor(Math.random() * this.choices.length)].value;
  }

  snap(value) {
    return value;
  }

  limit(value) {
    value = Math.round(value);

    if (this.choices.some(c => c.value === value)) {
      return value;
    }

    return -1;
  }

  nudge(value, steps) {
    const index = limit(this.choices.findIndex(c => c.value === value) + steps, 0, this.choices.length - 1);
    return this.choices[index].value;
  }

  getStart() {
    return this.choices[0].value;
  }

  getEnd() {
    return this.choices[this.choices.length - 1].value;
  }

  setStart(value) {
    throw new Error('not applicable');
  }

  setEnd(value) {
    throw new Error('not applicable');
  }

  modulationToString(value) {
    return `${(100 * value).toPrecision(1)}%`;
  }

}
class ToggleRange {
  toNormalised(value) {
    return value > 0.5 ? 1 : 0;
  }

  fromNormalised(value) {
    return value > 0.5 ? 1 : 0;
  }

  fromString(value, unit) {
    return value;
  }

  getRandom() {
    return Math.random() > 0.5 ? 1 : 0;
  }

  snap(value) {
    return value;
  }

  limit(value) {
    return limit(Math.round(value), 0, 1);
  }

  toString(value) {
    return value > 0.5 ? 'on' : 'off';
  }

  nudge(value, steps) {
    if (value === 0 && steps > 0) {
      return 1;
    } else if (value === 1 && steps < 0) {
      return 0;
    }

    return value;
  }

  getStart() {
    return 0;
  }

  getEnd() {
    return 1;
  }

  setStart(value) {
    throw new Error('not applicable');
  }

  setEnd(value) {
    throw new Error('not applicable');
  }

  modulationToString(value) {
    return `${(100 * value).toPrecision(1)}%`;
  }

}
class ContinuousRange {
  constructor(args) {
    this.args = {
      start: 0,
      end: 1,
      fromString: (value, unit) => {
        return value;
      },
      toString: value => {
        return value.toFixed(1);
      },
      scale: {
        type: Scale.Linear
      }
    };
    this.snapMargin = 0.025;

    this.modulationToString = value => {
      return this.toString(value * (this.args.end - this.args.start));
    };

    this.args = Object.assign(Object.assign({}, this.args), args);
    this.interpolatedStart = this.interpolate(this.args.start);
    this.interpolatedEnd = this.interpolate(this.args.end);
    this.fromString = this.args.fromString;

    if (this.args.bipolar && this.args.snap && Array.isArray(this.args.snap)) {
      for (const snap of [...this.args.snap]) {
        if (snap !== 0) this.args.snap.push(-snap);
      }
    }

    if (Array.isArray(this.args.snap)) {
      this.args.snap.sort();
    }
  }

  withStart(newStart) {
    return new ContinuousRange(Object.assign(Object.assign({}, this.args), {
      start: newStart
    }));
  }

  withEnd(newEnd) {
    return new ContinuousRange(Object.assign(Object.assign({}, this.args), {
      end: newEnd
    }));
  }

  asBipolar() {
    return new ContinuousRange(Object.assign(Object.assign({}, this.args), {
      bipolar: true
    }));
  }

  withInterpolation(interpolation) {
    return new ContinuousRange(Object.assign(Object.assign({}, this.args), {
      scale: interpolation
    }));
  }

  withSnap(values) {
    return new ContinuousRange(Object.assign(Object.assign({}, this.args), {
      snap: values
    }));
  }

  limitToStep(value) {
    if (this.args.step) {
      return Math.round(value / this.args.step) * this.args.step;
    }

    return value;
  }

  snap(value) {
    value = this.toNormalised(value);

    if (Array.isArray(this.args.snap)) {
      for (const step of this.args.snap) {
        if (Math.abs(value - this.toNormalised(step)) <= this.snapMargin) return step;
      }
    } else if (this.args.snap !== undefined) {
      return Math.round(this.fromNormalised(value) / this.args.snap) * this.args.snap;
    }

    return this.fromNormalised(value);
  }

  getRandom() {
    return this.fromNormalised(Math.random());
  }

  limit(value) {
    if (this.args.bipolar) {
      return limit(value, -this.args.end, this.args.end);
    }

    return limit(value, this.args.start, this.args.end);
  }

  toNormalised(value) {
    if (this.args.bipolar) {
      const interpolatedValue = Math.sign(value) * this.interpolate(this.limitToStep(Math.abs(value)));
      return toRange(interpolatedValue, -this.interpolatedEnd, this.interpolatedEnd, 0, 1);
    }

    const interpolatedValue = this.interpolate(this.limitToStep(value));
    return toRange(interpolatedValue, this.interpolatedStart, this.interpolatedEnd, 0, 1);
  }

  fromNormalised(normalisedValue) {
    if (this.args.bipolar) {
      const denormalisedValue = toRange(normalisedValue, 0, 1, -this.interpolatedEnd, this.interpolatedEnd);
      return this.limitToStep(Math.sign(denormalisedValue) * this.inverseInterpolate(Math.abs(denormalisedValue)));
    }

    const denormalisedValue = toRange(normalisedValue, 0, 1, this.interpolatedStart, this.interpolatedEnd);
    return this.limitToStep(this.inverseInterpolate(denormalisedValue));
  }

  interpolate(value) {
    switch (this.args.scale.type) {
      case Scale.Exponential:
        return Math.pow(value, 1 / (this.args.scale.exp || 1));

      case Scale.Logarithmic:
        return log(value, this.args.scale.base);
    }

    return value;
  }

  inverseInterpolate(value) {
    switch (this.args.scale.type) {
      case Scale.Exponential:
        return Math.pow(value, this.args.scale.exp || 1);

      case Scale.Logarithmic:
        return Math.pow(this.args.scale.base, value);
    }

    return value;
  }

  asModulationRange() {
    const span = Math.abs(this.args.end - this.args.start);
    return new ContinuousRange(Object.assign(Object.assign({}, this.args), {
      start: 0,
      bipolar: true,
      end: span
    }));
  }

  toString(value) {
    return this.args.toString(value);
  }

  nudge(value, steps) {
    if (this.args.step) {
      return this.limitToStep(value + steps);
    }

    return this.fromNormalised(this.toNormalised(value) + steps * 0.01);
  }

  getStart() {
    return this.args.start;
  }

  getEnd() {
    return this.args.end;
  }

  setStart(value) {
    this.args.start = value;
    this.interpolatedStart = this.interpolate(this.args.start);
  }

  setEnd(value) {
    this.args.end = value;
    this.interpolatedEnd = this.interpolate(this.args.end);
  }

}

/***/ }),

/***/ "./node_modules/solid-js/dist/dev.js":
/*!*******************************************!*\
  !*** ./node_modules/solid-js/dist/dev.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$DEVCOMP": () => (/* binding */ $DEVCOMP),
/* harmony export */   "$PROXY": () => (/* binding */ $PROXY),
/* harmony export */   "$TRACK": () => (/* binding */ $TRACK),
/* harmony export */   "DEV": () => (/* binding */ DEV),
/* harmony export */   "ErrorBoundary": () => (/* binding */ ErrorBoundary),
/* harmony export */   "For": () => (/* binding */ For),
/* harmony export */   "Index": () => (/* binding */ Index),
/* harmony export */   "Match": () => (/* binding */ Match),
/* harmony export */   "Show": () => (/* binding */ Show),
/* harmony export */   "Suspense": () => (/* binding */ Suspense),
/* harmony export */   "SuspenseList": () => (/* binding */ SuspenseList),
/* harmony export */   "Switch": () => (/* binding */ Switch),
/* harmony export */   "batch": () => (/* binding */ batch),
/* harmony export */   "cancelCallback": () => (/* binding */ cancelCallback),
/* harmony export */   "children": () => (/* binding */ children),
/* harmony export */   "createComponent": () => (/* binding */ createComponent),
/* harmony export */   "createComputed": () => (/* binding */ createComputed),
/* harmony export */   "createContext": () => (/* binding */ createContext),
/* harmony export */   "createDeferred": () => (/* binding */ createDeferred),
/* harmony export */   "createEffect": () => (/* binding */ createEffect),
/* harmony export */   "createMemo": () => (/* binding */ createMemo),
/* harmony export */   "createReaction": () => (/* binding */ createReaction),
/* harmony export */   "createRenderEffect": () => (/* binding */ createRenderEffect),
/* harmony export */   "createResource": () => (/* binding */ createResource),
/* harmony export */   "createRoot": () => (/* binding */ createRoot),
/* harmony export */   "createSelector": () => (/* binding */ createSelector),
/* harmony export */   "createSignal": () => (/* binding */ createSignal),
/* harmony export */   "createUniqueId": () => (/* binding */ createUniqueId),
/* harmony export */   "enableExternalSource": () => (/* binding */ enableExternalSource),
/* harmony export */   "enableHydration": () => (/* binding */ enableHydration),
/* harmony export */   "enableScheduling": () => (/* binding */ enableScheduling),
/* harmony export */   "equalFn": () => (/* binding */ equalFn),
/* harmony export */   "from": () => (/* binding */ from),
/* harmony export */   "getListener": () => (/* binding */ getListener),
/* harmony export */   "getOwner": () => (/* binding */ getOwner),
/* harmony export */   "indexArray": () => (/* binding */ indexArray),
/* harmony export */   "lazy": () => (/* binding */ lazy),
/* harmony export */   "mapArray": () => (/* binding */ mapArray),
/* harmony export */   "mergeProps": () => (/* binding */ mergeProps),
/* harmony export */   "observable": () => (/* binding */ observable),
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "onCleanup": () => (/* binding */ onCleanup),
/* harmony export */   "onError": () => (/* binding */ onError),
/* harmony export */   "onMount": () => (/* binding */ onMount),
/* harmony export */   "requestCallback": () => (/* binding */ requestCallback),
/* harmony export */   "resetErrorBoundaries": () => (/* binding */ resetErrorBoundaries),
/* harmony export */   "runWithOwner": () => (/* binding */ runWithOwner),
/* harmony export */   "sharedConfig": () => (/* binding */ sharedConfig),
/* harmony export */   "splitProps": () => (/* binding */ splitProps),
/* harmony export */   "startTransition": () => (/* binding */ startTransition),
/* harmony export */   "untrack": () => (/* binding */ untrack),
/* harmony export */   "useContext": () => (/* binding */ useContext),
/* harmony export */   "useTransition": () => (/* binding */ useTransition)
/* harmony export */ });
let taskIdCounter = 1,
    isCallbackScheduled = false,
    isPerformingWork = false,
    taskQueue = [],
    currentTask = null,
    shouldYieldToHost = null,
    yieldInterval = 5,
    deadline = 0,
    maxYieldInterval = 300,
    scheduleCallback = null,
    scheduledCallback = null;
const maxSigned31BitInt = 1073741823;

function setupScheduler() {
  const channel = new MessageChannel(),
        port = channel.port2;

  scheduleCallback = () => port.postMessage(null);

  channel.port1.onmessage = () => {
    if (scheduledCallback !== null) {
      const currentTime = performance.now();
      deadline = currentTime + yieldInterval;
      const hasTimeRemaining = true;

      try {
        const hasMoreWork = scheduledCallback(hasTimeRemaining, currentTime);

        if (!hasMoreWork) {
          scheduledCallback = null;
        } else port.postMessage(null);
      } catch (error) {
        port.postMessage(null);
        throw error;
      }
    }
  };

  if (navigator && navigator.scheduling && navigator.scheduling.isInputPending) {
    const scheduling = navigator.scheduling;

    shouldYieldToHost = () => {
      const currentTime = performance.now();

      if (currentTime >= deadline) {
        if (scheduling.isInputPending()) {
          return true;
        }

        return currentTime >= maxYieldInterval;
      } else {
        return false;
      }
    };
  } else {
    shouldYieldToHost = () => performance.now() >= deadline;
  }
}

function enqueue(taskQueue, task) {
  function findIndex() {
    let m = 0;
    let n = taskQueue.length - 1;

    while (m <= n) {
      const k = n + m >> 1;
      const cmp = task.expirationTime - taskQueue[k].expirationTime;
      if (cmp > 0) m = k + 1;else if (cmp < 0) n = k - 1;else return k;
    }

    return m;
  }

  taskQueue.splice(findIndex(), 0, task);
}

function requestCallback(fn, options) {
  if (!scheduleCallback) setupScheduler();
  let startTime = performance.now(),
      timeout = maxSigned31BitInt;
  if (options && options.timeout) timeout = options.timeout;
  const newTask = {
    id: taskIdCounter++,
    fn,
    startTime,
    expirationTime: startTime + timeout
  };
  enqueue(taskQueue, newTask);

  if (!isCallbackScheduled && !isPerformingWork) {
    isCallbackScheduled = true;
    scheduledCallback = flushWork;
    scheduleCallback();
  }

  return newTask;
}

function cancelCallback(task) {
  task.fn = null;
}

function flushWork(hasTimeRemaining, initialTime) {
  isCallbackScheduled = false;
  isPerformingWork = true;

  try {
    return workLoop(hasTimeRemaining, initialTime);
  } finally {
    currentTask = null;
    isPerformingWork = false;
  }
}

function workLoop(hasTimeRemaining, initialTime) {
  let currentTime = initialTime;
  currentTask = taskQueue[0] || null;

  while (currentTask !== null) {
    if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
      break;
    }

    const callback = currentTask.fn;

    if (callback !== null) {
      currentTask.fn = null;
      const didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
      callback(didUserCallbackTimeout);
      currentTime = performance.now();

      if (currentTask === taskQueue[0]) {
        taskQueue.shift();
      }
    } else taskQueue.shift();

    currentTask = taskQueue[0] || null;
  }

  return currentTask !== null;
}

const sharedConfig = {};

function setHydrateContext(context) {
  sharedConfig.context = context;
}

function nextHydrateContext() {
  return { ...sharedConfig.context,
    id: `${sharedConfig.context.id}${sharedConfig.context.count++}-`,
    count: 0
  };
}

const equalFn = (a, b) => a === b;

const $PROXY = Symbol("solid-proxy");
const $TRACK = Symbol("solid-track");
const $DEVCOMP = Symbol("solid-dev-component");
const signalOptions = {
  equals: equalFn
};
let ERROR = null;
let runEffects = runQueue;
const NOTPENDING = {};
const STALE = 1;
const PENDING = 2;
const UNOWNED = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
const [transPending, setTransPending] = /*@__PURE__*/createSignal(false);
var Owner = null;
let Transition = null;
let Scheduler = null;
let ExternalSourceFactory = null;
let Listener = null;
let Pending = null;
let Updates = null;
let Effects = null;
let ExecCount = 0;
let rootCount = 0;

function createRoot(fn, detachedOwner) {
  const listener = Listener,
        owner = Owner,
        unowned = fn.length === 0,
        root = unowned && !"_SOLID_DEV_" ? 0 : {
    owned: null,
    cleanups: null,
    context: null,
    owner: detachedOwner || owner
  },
        updateFn = unowned ? () => fn(() => {
    throw new Error("Dispose method must be an explicit argument to createRoot function");
  }) : () => fn(() => cleanNode(root));
  if (owner) root.name = `${owner.name}-r${rootCount++}`;
  Owner = root;
  Listener = null;

  try {
    return runUpdates(updateFn, true);
  } finally {
    Listener = listener;
    Owner = owner;
  }
}

function createSignal(value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const s = {
    value,
    observers: null,
    observerSlots: null,
    pending: NOTPENDING,
    comparator: options.equals || undefined
  };
  if (!options.internal) s.name = registerGraph(options.name || hashValue(value), s);

  const setter = value => {
    if (typeof value === "function") {
      if (Transition && Transition.running && Transition.sources.has(s)) value = value(s.pending !== NOTPENDING ? s.pending : s.tValue);else value = value(s.pending !== NOTPENDING ? s.pending : s.value);
    }

    return writeSignal(s, value);
  };

  return [readSignal.bind(s), setter];
}

function createComputed(fn, value, options) {
  const c = createComputation(fn, value, true, STALE, options);
  if (Scheduler && Transition && Transition.running) Updates.push(c);else updateComputation(c);
}

function createRenderEffect(fn, value, options) {
  const c = createComputation(fn, value, false, STALE, options);
  if (Scheduler && Transition && Transition.running) Updates.push(c);else updateComputation(c);
}

function createEffect(fn, value, options) {
  runEffects = runUserEffects;
  const c = createComputation(fn, value, false, STALE, options),
        s = SuspenseContext && lookup(Owner, SuspenseContext.id);
  if (s) c.suspense = s;
  c.user = true;
  Effects ? Effects.push(c) : updateComputation(c);
}

function createReaction(onInvalidate, options) {
  let fn;
  const c = createComputation(() => {
    fn ? fn() : untrack(onInvalidate);
    fn = undefined;
  }, undefined, false, 0, options),
        s = SuspenseContext && lookup(Owner, SuspenseContext.id);
  if (s) c.suspense = s;
  c.user = true;
  return tracking => {
    fn = tracking;
    updateComputation(c);
  };
}

function createMemo(fn, value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const c = createComputation(fn, value, true, 0, options);
  c.pending = NOTPENDING;
  c.observers = null;
  c.observerSlots = null;
  c.comparator = options.equals || undefined;

  if (Scheduler && Transition && Transition.running) {
    c.tState = STALE;
    Updates.push(c);
  } else updateComputation(c);

  return readSignal.bind(c);
}

function createResource(source, fetcher, options) {
  if (arguments.length === 2) {
    if (typeof fetcher === "object") {
      options = fetcher;
      fetcher = source;
      source = true;
    }
  } else if (arguments.length === 1) {
    fetcher = source;
    source = true;
  }

  options || (options = {});
  const contexts = new Set(),
        [value, setValue] = createSignal(options.initialValue),
        [track, trigger] = createSignal(undefined, {
    equals: false
  }),
        [loading, setLoading] = createSignal(false),
        [error, setError] = createSignal();
  let err = undefined,
      pr = null,
      initP = null,
      id = null,
      loadedUnderTransition = false,
      scheduled = false,
      resolved = ("initialValue" in options),
      dynamic = typeof source === "function" && createMemo(source);

  if (sharedConfig.context) {
    id = `${sharedConfig.context.id}${sharedConfig.context.count++}`;
    if (sharedConfig.load) initP = sharedConfig.load(id);
  }

  function loadEnd(p, v, e, key) {
    if (pr === p) {
      pr = null;
      resolved = true;
      if (initP && (p === initP || v === initP) && options.onHydrated) queueMicrotask(() => options.onHydrated(key, {
        value: v
      }));
      initP = null;
      setError(err = e);

      if (Transition && p && loadedUnderTransition) {
        Transition.promises.delete(p);
        loadedUnderTransition = false;
        runUpdates(() => {
          Transition.running = true;

          if (!Transition.promises.size) {
            Effects.push.apply(Effects, Transition.effects);
            Transition.effects = [];
          }

          completeLoad(v);
        }, false);
      } else completeLoad(v);
    }

    return v;
  }

  function completeLoad(v) {
    batch(() => {
      setValue(() => v);
      setLoading(false);

      for (const c of contexts.keys()) c.decrement();

      contexts.clear();
    });
  }

  function read() {
    const c = SuspenseContext && lookup(Owner, SuspenseContext.id),
          v = value();
    if (err) throw err;

    if (Listener && !Listener.user && c) {
      createComputed(() => {
        track();

        if (pr) {
          if (c.resolved && Transition) Transition.promises.add(pr);else if (!contexts.has(c)) {
            c.increment();
            contexts.add(c);
          }
        }
      });
    }

    return v;
  }

  function load(refetching = true) {
    if (refetching && scheduled) return;
    scheduled = false;
    setError(err = undefined);
    const lookup = dynamic ? dynamic() : source;
    loadedUnderTransition = Transition && Transition.running;

    if (lookup == null || lookup === false) {
      loadEnd(pr, untrack(value));
      return;
    }

    if (Transition && pr) Transition.promises.delete(pr);
    const p = initP || untrack(() => fetcher(lookup, {
      value: value(),
      refetching
    }));

    if (typeof p !== "object" || !("then" in p)) {
      loadEnd(pr, p);
      return p;
    }

    pr = p;
    scheduled = true;
    queueMicrotask(() => scheduled = false);
    batch(() => {
      setLoading(true);
      trigger();
    });
    return p.then(v => loadEnd(p, v, undefined, lookup), e => loadEnd(p, e, e));
  }

  Object.defineProperties(read, {
    loading: {
      get() {
        return loading();
      }

    },
    error: {
      get() {
        return error();
      }

    },
    latest: {
      get() {
        if (!resolved) return read();
        if (err) throw err;
        return value();
      }

    }
  });
  if (dynamic) createComputed(() => load(false));else load(false);
  return [read, {
    refetch: load,
    mutate: setValue
  }];
}

function createDeferred(source, options) {
  let t,
      timeout = options ? options.timeoutMs : undefined;
  const node = createComputation(() => {
    if (!t || !t.fn) t = requestCallback(() => setDeferred(() => node.value), timeout !== undefined ? {
      timeout
    } : undefined);
    return source();
  }, undefined, true);
  const [deferred, setDeferred] = createSignal(node.value, options);
  updateComputation(node);
  setDeferred(() => node.value);
  return deferred;
}

function createSelector(source, fn = equalFn, options) {
  const subs = new Map();
  const node = createComputation(p => {
    const v = source();

    for (const key of subs.keys()) if (fn(key, v) !== fn(key, p)) {
      const l = subs.get(key);

      for (const c of l.values()) {
        c.state = STALE;
        if (c.pure) Updates.push(c);else Effects.push(c);
      }
    }

    return v;
  }, undefined, true, STALE, options);
  updateComputation(node);
  return key => {
    let listener;

    if (listener = Listener) {
      let l;
      if (l = subs.get(key)) l.add(listener);else subs.set(key, l = new Set([listener]));
      onCleanup(() => {
        l.delete(listener);
        !l.size && subs.delete(key);
      });
    }

    return fn(key, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value);
  };
}

function batch(fn) {
  if (Pending) return fn();
  let result;
  const q = Pending = [];

  try {
    result = fn();
  } finally {
    Pending = null;
  }

  runUpdates(() => {
    for (let i = 0; i < q.length; i += 1) {
      const data = q[i];

      if (data.pending !== NOTPENDING) {
        const pending = data.pending;
        data.pending = NOTPENDING;
        writeSignal(data, pending);
      }
    }
  }, false);
  return result;
}

function untrack(fn) {
  let result,
      listener = Listener;
  Listener = null;
  result = fn();
  Listener = listener;
  return result;
}

function on(deps, fn, options) {
  const isArray = Array.isArray(deps);
  let prevInput;
  let defer = options && options.defer;
  return prevValue => {
    let input;

    if (isArray) {
      input = Array(deps.length);

      for (let i = 0; i < deps.length; i++) input[i] = deps[i]();
    } else input = deps();

    if (defer) {
      defer = false;
      return undefined;
    }

    const result = untrack(() => fn(input, prevInput, prevValue));
    prevInput = input;
    return result;
  };
}

function onMount(fn) {
  createEffect(() => untrack(fn));
}

function onCleanup(fn) {
  if (Owner === null) console.warn("cleanups created outside a `createRoot` or `render` will never be run");else if (Owner.cleanups === null) Owner.cleanups = [fn];else Owner.cleanups.push(fn);
  return fn;
}

function onError(fn) {
  ERROR || (ERROR = Symbol("error"));
  if (Owner === null) console.warn("error handlers created outside a `createRoot` or `render` will never be run");else if (Owner.context === null) Owner.context = {
    [ERROR]: [fn]
  };else if (!Owner.context[ERROR]) Owner.context[ERROR] = [fn];else Owner.context[ERROR].push(fn);
}

function getListener() {
  return Listener;
}

function getOwner() {
  return Owner;
}

function runWithOwner(o, fn) {
  const prev = Owner;
  Owner = o;

  try {
    return runUpdates(fn, true);
  } finally {
    Owner = prev;
  }
}

function enableScheduling(scheduler = requestCallback) {
  Scheduler = scheduler;
}

function startTransition(fn) {
  if (Transition && Transition.running) {
    fn();
    return Transition.done;
  }

  const l = Listener;
  const o = Owner;
  return Promise.resolve().then(() => {
    Listener = l;
    Owner = o;
    let t;

    if (Scheduler || SuspenseContext) {
      t = Transition || (Transition = {
        sources: new Set(),
        effects: [],
        promises: new Set(),
        disposed: new Set(),
        queue: new Set(),
        running: true
      });
      t.done || (t.done = new Promise(res => t.resolve = res));
      t.running = true;
    }

    batch(fn);
    Listener = Owner = null;
    return t ? t.done : undefined;
  });
}

function useTransition() {
  return [transPending, startTransition];
}

function resumeEffects(e) {
  Effects.push.apply(Effects, e);
  e.length = 0;
}

function devComponent(Comp, props) {
  const c = createComputation(() => untrack(() => {
    Object.assign(Comp, {
      [$DEVCOMP]: true
    });
    return Comp(props);
  }), undefined, true);
  c.pending = NOTPENDING;
  c.observers = null;
  c.observerSlots = null;
  c.state = 0;
  c.componentName = Comp.name;
  updateComputation(c);
  return c.tValue !== undefined ? c.tValue : c.value;
}

function hashValue(v) {
  const s = new Set();
  return `s${typeof v === "string" ? hash(v) : hash(JSON.stringify(v, (k, v) => {
    if (typeof v === "object" && v != null) {
      if (s.has(v)) return;
      s.add(v);
      const keys = Object.keys(v);
      const desc = Object.getOwnPropertyDescriptors(v);
      const newDesc = keys.reduce((memo, key) => {
        const value = desc[key];
        if (!value.get) memo[key] = value;
        return memo;
      }, {});
      v = Object.create({}, newDesc);
    }

    if (typeof v === "bigint") {
      return `${v.toString()}n`;
    }

    return v;
  }) || "")}`;
}

function registerGraph(name, value) {
  let tryName = name;

  if (Owner) {
    let i = 0;
    Owner.sourceMap || (Owner.sourceMap = {});

    while (Owner.sourceMap[tryName]) tryName = `${name}-${++i}`;

    Owner.sourceMap[tryName] = value;
  }

  return tryName;
}

function serializeGraph(owner) {
  owner || (owner = Owner);
  if (!owner) return {};
  return { ...serializeValues(owner.sourceMap),
    ...(owner.owned ? serializeChildren(owner) : {})
  };
}

function createContext(defaultValue) {
  const id = Symbol("context");
  return {
    id,
    Provider: createProvider(id),
    defaultValue
  };
}

function useContext(context) {
  let ctx;
  return (ctx = lookup(Owner, context.id)) !== undefined ? ctx : context.defaultValue;
}

function children(fn) {
  const children = createMemo(fn);
  return createMemo(() => resolveChildren(children()));
}

let SuspenseContext;

function getSuspenseContext() {
  return SuspenseContext || (SuspenseContext = createContext({}));
}

function enableExternalSource(factory) {
  if (ExternalSourceFactory) {
    const oldFactory = ExternalSourceFactory;

    ExternalSourceFactory = (fn, trigger) => {
      const oldSource = oldFactory(fn, trigger);
      const source = factory(x => oldSource.track(x), trigger);
      return {
        track: x => source.track(x),

        dispose() {
          source.dispose();
          oldSource.dispose();
        }

      };
    };
  } else {
    ExternalSourceFactory = factory;
  }
}

function readSignal() {
  const runningTransition = Transition && Transition.running;

  if (this.sources && (!runningTransition && this.state || runningTransition && this.tState)) {
    const updates = Updates;
    Updates = null;
    !runningTransition && this.state === STALE || runningTransition && this.tState === STALE ? updateComputation(this) : lookUpstream(this);
    Updates = updates;
  }

  if (Listener) {
    const sSlot = this.observers ? this.observers.length : 0;

    if (!Listener.sources) {
      Listener.sources = [this];
      Listener.sourceSlots = [sSlot];
    } else {
      Listener.sources.push(this);
      Listener.sourceSlots.push(sSlot);
    }

    if (!this.observers) {
      this.observers = [Listener];
      this.observerSlots = [Listener.sources.length - 1];
    } else {
      this.observers.push(Listener);
      this.observerSlots.push(Listener.sources.length - 1);
    }
  }

  if (runningTransition && Transition.sources.has(this)) return this.tValue;
  return this.value;
}

function writeSignal(node, value, isComp) {
  if (Pending) {
    if (node.pending === NOTPENDING) Pending.push(node);
    node.pending = value;
    return value;
  }

  if (node.comparator) {
    if (Transition && Transition.running && Transition.sources.has(node)) {
      if (node.comparator(node.tValue, value)) return value;
    } else if (node.comparator(node.value, value)) return value;
  }

  let TransitionRunning = false;

  if (Transition) {
    TransitionRunning = Transition.running;

    if (TransitionRunning || !isComp && Transition.sources.has(node)) {
      Transition.sources.add(node);
      node.tValue = value;
    }

    if (!TransitionRunning) node.value = value;
  } else node.value = value;

  if (node.observers && node.observers.length) {
    runUpdates(() => {
      for (let i = 0; i < node.observers.length; i += 1) {
        const o = node.observers[i];
        if (TransitionRunning && Transition.disposed.has(o)) continue;

        if (TransitionRunning && !o.tState || !TransitionRunning && !o.state) {
          if (o.pure) Updates.push(o);else Effects.push(o);
          if (o.observers) markDownstream(o);
        }

        if (TransitionRunning) o.tState = STALE;else o.state = STALE;
      }

      if (Updates.length > 10e5) {
        Updates = [];
        if (true) throw new Error("Potential Infinite Loop Detected.");
        throw new Error();
      }
    }, false);
  }

  return value;
}

function updateComputation(node) {
  if (!node.fn) return;
  cleanNode(node);
  const owner = Owner,
        listener = Listener,
        time = ExecCount;
  Listener = Owner = node;
  runComputation(node, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value, time);

  if (Transition && !Transition.running && Transition.sources.has(node)) {
    queueMicrotask(() => {
      runUpdates(() => {
        Transition && (Transition.running = true);
        runComputation(node, node.tValue, time);
      }, false);
    });
  }

  Listener = listener;
  Owner = owner;
}

function runComputation(node, value, time) {
  let nextValue;

  try {
    nextValue = node.fn(value);
  } catch (err) {
    handleError(err);
  }

  if (!node.updatedAt || node.updatedAt <= time) {
    if (node.observers && node.observers.length) {
      writeSignal(node, nextValue, true);
    } else if (Transition && Transition.running && node.pure) {
      Transition.sources.add(node);
      node.tValue = nextValue;
    } else node.value = nextValue;

    node.updatedAt = time;
  }
}

function createComputation(fn, init, pure, state = STALE, options) {
  const c = {
    fn,
    state: state,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: init,
    owner: Owner,
    context: null,
    pure
  };

  if (Transition && Transition.running) {
    c.state = 0;
    c.tState = state;
  }

  if (Owner === null) console.warn("computations created outside a `createRoot` or `render` will never be disposed");else if (Owner !== UNOWNED) {
    if (Transition && Transition.running && Owner.pure) {
      if (!Owner.tOwned) Owner.tOwned = [c];else Owner.tOwned.push(c);
    } else {
      if (!Owner.owned) Owner.owned = [c];else Owner.owned.push(c);
    }

    c.name = options && options.name || `${Owner.name || "c"}-${(Owner.owned || Owner.tOwned).length}`;
  }

  if (ExternalSourceFactory) {
    const [track, trigger] = createSignal(undefined, {
      equals: false
    });
    const ordinary = ExternalSourceFactory(c.fn, trigger);
    onCleanup(() => ordinary.dispose());

    const triggerInTransition = () => startTransition(trigger).then(() => inTransition.dispose());

    const inTransition = ExternalSourceFactory(c.fn, triggerInTransition);

    c.fn = x => {
      track();
      return Transition && Transition.running ? inTransition.track(x) : ordinary.track(x);
    };
  }

  return c;
}

function runTop(node) {
  const runningTransition = Transition && Transition.running;
  if (!runningTransition && node.state === 0 || runningTransition && node.tState === 0) return;
  if (!runningTransition && node.state === PENDING || runningTransition && node.tState === PENDING) return lookUpstream(node);
  if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
  const ancestors = [node];

  while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
    if (runningTransition && Transition.disposed.has(node)) return;
    if (!runningTransition && node.state || runningTransition && node.tState) ancestors.push(node);
  }

  for (let i = ancestors.length - 1; i >= 0; i--) {
    node = ancestors[i];

    if (runningTransition) {
      let top = node,
          prev = ancestors[i + 1];

      while ((top = top.owner) && top !== prev) {
        if (Transition.disposed.has(top)) return;
      }
    }

    if (!runningTransition && node.state === STALE || runningTransition && node.tState === STALE) {
      updateComputation(node);
    } else if (!runningTransition && node.state === PENDING || runningTransition && node.tState === PENDING) {
      const updates = Updates;
      Updates = null;
      lookUpstream(node, ancestors[0]);
      Updates = updates;
    }
  }
}

function runUpdates(fn, init) {
  if (Updates) return fn();
  let wait = false;
  if (!init) Updates = [];
  if (Effects) wait = true;else Effects = [];
  ExecCount++;

  try {
    const res = fn();
    completeUpdates(wait);
    return res;
  } catch (err) {
    handleError(err);
  } finally {
    Updates = null;
    if (!wait) Effects = null;
  }
}

function completeUpdates(wait) {
  if (Updates) {
    if (Scheduler && Transition && Transition.running) scheduleQueue(Updates);else runQueue(Updates);
    Updates = null;
  }

  if (wait) return;
  let res;

  if (Transition && Transition.running) {
    if (Transition.promises.size || Transition.queue.size) {
      Transition.running = false;
      Transition.effects.push.apply(Transition.effects, Effects);
      Effects = null;
      setTransPending(true);
      return;
    }

    const sources = Transition.sources;
    res = Transition.resolve;
    Effects.forEach(e => {
      "tState" in e && (e.state = e.tState);
      delete e.tState;
    });
    Transition = null;
    batch(() => {
      sources.forEach(v => {
        v.value = v.tValue;

        if (v.owned) {
          for (let i = 0, len = v.owned.length; i < len; i++) cleanNode(v.owned[i]);
        }

        if (v.tOwned) v.owned = v.tOwned;
        delete v.tValue;
        delete v.tOwned;
        v.tState = 0;
      });
      setTransPending(false);
    });
  }

  if (Effects.length) batch(() => {
    runEffects(Effects);
    Effects = null;
  });else {
    Effects = null;
    globalThis._$afterUpdate && globalThis._$afterUpdate();
  }
  if (res) res();
}

function runQueue(queue) {
  for (let i = 0; i < queue.length; i++) runTop(queue[i]);
}

function scheduleQueue(queue) {
  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    const tasks = Transition.queue;

    if (!tasks.has(item)) {
      tasks.add(item);
      Scheduler(() => {
        tasks.delete(item);
        runUpdates(() => {
          Transition.running = true;
          runTop(item);

          if (!tasks.size) {
            Effects.push.apply(Effects, Transition.effects);
            Transition.effects = [];
          }
        }, false);
        Transition && (Transition.running = false);
      });
    }
  }
}

function runUserEffects(queue) {
  let i,
      userLength = 0;

  for (i = 0; i < queue.length; i++) {
    const e = queue[i];
    if (!e.user) runTop(e);else queue[userLength++] = e;
  }

  if (sharedConfig.context) setHydrateContext();
  const resume = queue.length;

  for (i = 0; i < userLength; i++) runTop(queue[i]);

  for (i = resume; i < queue.length; i++) runTop(queue[i]);
}

function lookUpstream(node, ignore) {
  const runningTransition = Transition && Transition.running;
  if (runningTransition) node.tState = 0;else node.state = 0;

  for (let i = 0; i < node.sources.length; i += 1) {
    const source = node.sources[i];

    if (source.sources) {
      if (!runningTransition && source.state === STALE || runningTransition && source.tState === STALE) {
        if (source !== ignore) runTop(source);
      } else if (!runningTransition && source.state === PENDING || runningTransition && source.tState === PENDING) lookUpstream(source, ignore);
    }
  }
}

function markDownstream(node) {
  const runningTransition = Transition && Transition.running;

  for (let i = 0; i < node.observers.length; i += 1) {
    const o = node.observers[i];

    if (!runningTransition && !o.state || runningTransition && !o.tState) {
      if (runningTransition) o.tState = PENDING;else o.state = PENDING;
      if (o.pure) Updates.push(o);else Effects.push(o);
      o.observers && markDownstream(o);
    }
  }
}

function cleanNode(node) {
  let i;

  if (node.sources) {
    while (node.sources.length) {
      const source = node.sources.pop(),
            index = node.sourceSlots.pop(),
            obs = source.observers;

      if (obs && obs.length) {
        const n = obs.pop(),
              s = source.observerSlots.pop();

        if (index < obs.length) {
          n.sourceSlots[s] = index;
          obs[index] = n;
          source.observerSlots[index] = s;
        }
      }
    }
  }

  if (Transition && Transition.running && node.pure) {
    if (node.tOwned) {
      for (i = 0; i < node.tOwned.length; i++) cleanNode(node.tOwned[i]);

      delete node.tOwned;
    }

    reset(node, true);
  } else if (node.owned) {
    for (i = 0; i < node.owned.length; i++) cleanNode(node.owned[i]);

    node.owned = null;
  }

  if (node.cleanups) {
    for (i = 0; i < node.cleanups.length; i++) node.cleanups[i]();

    node.cleanups = null;
  }

  if (Transition && Transition.running) node.tState = 0;else node.state = 0;
  node.context = null;
  delete node.sourceMap;
}

function reset(node, top) {
  if (!top) {
    node.tState = 0;
    Transition.disposed.add(node);
  }

  if (node.owned) {
    for (let i = 0; i < node.owned.length; i++) reset(node.owned[i]);
  }
}

function handleError(err) {
  const fns = ERROR && lookup(Owner, ERROR);
  if (!fns) throw err;
  fns.forEach(f => f(err));
}

function lookup(owner, key) {
  return owner ? owner.context && owner.context[key] !== undefined ? owner.context[key] : lookup(owner.owner, key) : undefined;
}

function resolveChildren(children) {
  if (typeof children === "function" && !children.length) return resolveChildren(children());

  if (Array.isArray(children)) {
    const results = [];

    for (let i = 0; i < children.length; i++) {
      const result = resolveChildren(children[i]);
      Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
    }

    return results;
  }

  return children;
}

function createProvider(id) {
  return function provider(props) {
    let res;
    createComputed(() => res = untrack(() => {
      Owner.context = {
        [id]: props.value
      };
      return children(() => props.children);
    }));
    return res;
  };
}

function hash(s) {
  for (var i = 0, h = 9; i < s.length;) h = Math.imul(h ^ s.charCodeAt(i++), 9 ** 9);

  return `${h ^ h >>> 9}`;
}

function serializeValues(sources = {}) {
  const k = Object.keys(sources);
  const result = {};

  for (let i = 0; i < k.length; i++) {
    const key = k[i];
    result[key] = sources[key].value;
  }

  return result;
}

function serializeChildren(root) {
  const result = {};

  for (let i = 0, len = root.owned.length; i < len; i++) {
    const node = root.owned[i];
    result[node.componentName ? `${node.componentName}:${node.name}` : node.name] = { ...serializeValues(node.sourceMap),
      ...(node.owned ? serializeChildren(node) : {})
    };
  }

  return result;
}

function getSymbol() {
  const SymbolCopy = Symbol;
  return SymbolCopy.observable || "@@observable";
}

function observable(input) {
  const $$observable = getSymbol();
  return {
    subscribe(observer) {
      if (!(observer instanceof Object) || observer == null) {
        throw new TypeError("Expected the observer to be an object.");
      }

      const handler = "next" in observer ? observer.next.bind(observer) : observer;
      let complete = false;
      createComputed(() => {
        if (complete) return;
        const v = input();
        untrack(() => handler(v));
      });
      return {
        unsubscribe() {
          complete = true;
        }

      };
    },

    [$$observable]() {
      return this;
    }

  };
}

function from(producer) {
  const [s, set] = createSignal(undefined, {
    equals: false
  });

  if ("subscribe" in producer) {
    const unsub = producer.subscribe(v => set(() => v));
    onCleanup(() => "unsubscribe" in unsub ? unsub.unsubscribe() : unsub());
  } else {
    const clean = producer(set);
    onCleanup(clean);
  }

  return s;
}

const FALLBACK = Symbol("fallback");

function dispose(d) {
  for (let i = 0; i < d.length; i++) d[i]();
}

function mapArray(list, mapFn, options = {}) {
  let items = [],
      mapped = [],
      disposers = [],
      len = 0,
      indexes = mapFn.length > 1 ? [] : null;
  onCleanup(() => dispose(disposers));
  return () => {
    let newItems = list() || [],
        i,
        j;
    newItems[$TRACK];
    return untrack(() => {
      let newLen = newItems.length,
          newIndices,
          newIndicesNext,
          temp,
          tempdisposers,
          tempIndexes,
          start,
          end,
          newEnd,
          item;

      if (newLen === 0) {
        if (len !== 0) {
          dispose(disposers);
          disposers = [];
          items = [];
          mapped = [];
          len = 0;
          indexes && (indexes = []);
        }

        if (options.fallback) {
          items = [FALLBACK];
          mapped[0] = createRoot(disposer => {
            disposers[0] = disposer;
            return options.fallback();
          });
          len = 1;
        }
      } else if (len === 0) {
        mapped = new Array(newLen);

        for (j = 0; j < newLen; j++) {
          items[j] = newItems[j];
          mapped[j] = createRoot(mapper);
        }

        len = newLen;
      } else {
        temp = new Array(newLen);
        tempdisposers = new Array(newLen);
        indexes && (tempIndexes = new Array(newLen));

        for (start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++);

        for (end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, newEnd--) {
          temp[newEnd] = mapped[end];
          tempdisposers[newEnd] = disposers[end];
          indexes && (tempIndexes[newEnd] = indexes[end]);
        }

        newIndices = new Map();
        newIndicesNext = new Array(newEnd + 1);

        for (j = newEnd; j >= start; j--) {
          item = newItems[j];
          i = newIndices.get(item);
          newIndicesNext[j] = i === undefined ? -1 : i;
          newIndices.set(item, j);
        }

        for (i = start; i <= end; i++) {
          item = items[i];
          j = newIndices.get(item);

          if (j !== undefined && j !== -1) {
            temp[j] = mapped[i];
            tempdisposers[j] = disposers[i];
            indexes && (tempIndexes[j] = indexes[i]);
            j = newIndicesNext[j];
            newIndices.set(item, j);
          } else disposers[i]();
        }

        for (j = start; j < newLen; j++) {
          if (j in temp) {
            mapped[j] = temp[j];
            disposers[j] = tempdisposers[j];

            if (indexes) {
              indexes[j] = tempIndexes[j];
              indexes[j](j);
            }
          } else mapped[j] = createRoot(mapper);
        }

        mapped = mapped.slice(0, len = newLen);
        items = newItems.slice(0);
      }

      return mapped;
    });

    function mapper(disposer) {
      disposers[j] = disposer;

      if (indexes) {
        const [s, set] = createSignal(j);
        indexes[j] = set;
        return mapFn(newItems[j], s);
      }

      return mapFn(newItems[j]);
    }
  };
}

function indexArray(list, mapFn, options = {}) {
  let items = [],
      mapped = [],
      disposers = [],
      signals = [],
      len = 0,
      i;
  onCleanup(() => dispose(disposers));
  return () => {
    const newItems = list() || [];
    newItems[$TRACK];
    return untrack(() => {
      if (newItems.length === 0) {
        if (len !== 0) {
          dispose(disposers);
          disposers = [];
          items = [];
          mapped = [];
          len = 0;
          signals = [];
        }

        if (options.fallback) {
          items = [FALLBACK];
          mapped[0] = createRoot(disposer => {
            disposers[0] = disposer;
            return options.fallback();
          });
          len = 1;
        }

        return mapped;
      }

      if (items[0] === FALLBACK) {
        disposers[0]();
        disposers = [];
        items = [];
        mapped = [];
        len = 0;
      }

      for (i = 0; i < newItems.length; i++) {
        if (i < items.length && items[i] !== newItems[i]) {
          signals[i](() => newItems[i]);
        } else if (i >= items.length) {
          mapped[i] = createRoot(mapper);
        }
      }

      for (; i < items.length; i++) {
        disposers[i]();
      }

      len = signals.length = disposers.length = newItems.length;
      items = newItems.slice(0);
      return mapped = mapped.slice(0, len);
    });

    function mapper(disposer) {
      disposers[i] = disposer;
      const [s, set] = createSignal(newItems[i]);
      signals[i] = set;
      return mapFn(s, i);
    }
  };
}

let hydrationEnabled = false;

function enableHydration() {
  hydrationEnabled = true;
}

function createComponent(Comp, props) {
  if (hydrationEnabled) {
    if (sharedConfig.context) {
      const c = sharedConfig.context;
      setHydrateContext(nextHydrateContext());
      const r = devComponent(Comp, props || {});
      setHydrateContext(c);
      return r;
    }
  }

  return devComponent(Comp, props || {});
}

function trueFn() {
  return true;
}

const propTraps = {
  get(_, property, receiver) {
    if (property === $PROXY) return receiver;
    return _.get(property);
  },

  has(_, property) {
    return _.has(property);
  },

  set: trueFn,
  deleteProperty: trueFn,

  getOwnPropertyDescriptor(_, property) {
    return {
      configurable: true,
      enumerable: true,

      get() {
        return _.get(property);
      },

      set: trueFn,
      deleteProperty: trueFn
    };
  },

  ownKeys(_) {
    return _.keys();
  }

};

function resolveSource(s) {
  return (s = typeof s === "function" ? s() : s) == null ? {} : s;
}

function mergeProps(...sources) {
  return new Proxy({
    get(property) {
      for (let i = sources.length - 1; i >= 0; i--) {
        const v = resolveSource(sources[i])[property];
        if (v !== undefined) return v;
      }
    },

    has(property) {
      for (let i = sources.length - 1; i >= 0; i--) {
        if (property in resolveSource(sources[i])) return true;
      }

      return false;
    },

    keys() {
      const keys = [];

      for (let i = 0; i < sources.length; i++) keys.push(...Object.keys(resolveSource(sources[i])));

      return [...new Set(keys)];
    }

  }, propTraps);
}

function splitProps(props, ...keys) {
  const blocked = new Set(keys.flat());
  const descriptors = Object.getOwnPropertyDescriptors(props);
  const res = keys.map(k => {
    const clone = {};

    for (let i = 0; i < k.length; i++) {
      const key = k[i];
      Object.defineProperty(clone, key, descriptors[key] ? descriptors[key] : {
        get() {
          return props[key];
        },

        set() {
          return true;
        }

      });
    }

    return clone;
  });
  res.push(new Proxy({
    get(property) {
      return blocked.has(property) ? undefined : props[property];
    },

    has(property) {
      return blocked.has(property) ? false : property in props;
    },

    keys() {
      return Object.keys(props).filter(k => !blocked.has(k));
    }

  }, propTraps));
  return res;
}

function lazy(fn) {
  let comp;
  let p;

  const wrap = props => {
    const ctx = sharedConfig.context;

    if (ctx) {
      const [s, set] = createSignal();
      (p || (p = fn())).then(mod => {
        setHydrateContext(ctx);
        set(() => mod.default);
        setHydrateContext();
      });
      comp = s;
    } else if (!comp) {
      const [s] = createResource(() => (p || (p = fn())).then(mod => mod.default));
      comp = s;
    } else {
      const c = comp();
      if (c) return c(props);
    }

    let Comp;
    return createMemo(() => (Comp = comp()) && untrack(() => {
      Object.assign(Comp, {
        [$DEVCOMP]: true
      });
      if (!ctx) return Comp(props);
      const c = sharedConfig.context;
      setHydrateContext(ctx);
      const r = Comp(props);
      setHydrateContext(c);
      return r;
    }));
  };

  wrap.preload = () => p || ((p = fn()).then(mod => comp = () => mod.default), p);

  return wrap;
}

let counter = 0;

function createUniqueId() {
  const ctx = sharedConfig.context;
  return ctx ? `${ctx.id}${ctx.count++}` : `cl-${counter++}`;
}

function For(props) {
  const fallback = "fallback" in props && {
    fallback: () => props.fallback
  };
  return createMemo(mapArray(() => props.each, props.children, fallback ? fallback : undefined));
}

function Index(props) {
  const fallback = "fallback" in props && {
    fallback: () => props.fallback
  };
  return createMemo(indexArray(() => props.each, props.children, fallback ? fallback : undefined));
}

function Show(props) {
  let strictEqual = false;
  const condition = createMemo(() => props.when, undefined, {
    equals: (a, b) => strictEqual ? a === b : !a === !b
  });
  return createMemo(() => {
    const c = condition();

    if (c) {
      const child = props.children;
      return (strictEqual = typeof child === "function" && child.length > 0) ? untrack(() => child(c)) : child;
    }

    return props.fallback;
  });
}

function Switch(props) {
  let strictEqual = false;
  const conditions = children(() => props.children),
        evalConditions = createMemo(() => {
    let conds = conditions();
    if (!Array.isArray(conds)) conds = [conds];

    for (let i = 0; i < conds.length; i++) {
      const c = conds[i].when;
      if (c) return [i, c, conds[i]];
    }

    return [-1];
  }, undefined, {
    equals: (a, b) => a[0] === b[0] && (strictEqual ? a[1] === b[1] : !a[1] === !b[1]) && a[2] === b[2]
  });
  return createMemo(() => {
    const [index, when, cond] = evalConditions();
    if (index < 0) return props.fallback;
    const c = cond.children;
    return (strictEqual = typeof c === "function" && c.length > 0) ? untrack(() => c(when)) : c;
  });
}

function Match(props) {
  return props;
}

let Errors;
const NoErrors = {};

function resetErrorBoundaries() {
  Errors && [...Errors].forEach(fn => fn(NoErrors));
}

function ErrorBoundary(props) {
  let err = NoErrors;

  if (sharedConfig.context && sharedConfig.load) {
    err = sharedConfig.load(sharedConfig.context.id + sharedConfig.context.count) || NoErrors;
  }

  const [errored, setErrored] = createSignal(err);
  Errors || (Errors = new Set());
  Errors.add(setErrored);
  onCleanup(() => Errors.delete(setErrored));
  return createMemo(() => {
    let e;

    if ((e = errored()) !== NoErrors) {
      const f = props.fallback;
      if (typeof f !== "function" || f.length == 0) console.error(e);
      return typeof f === "function" && f.length ? untrack(() => f(e, () => setErrored(NoErrors))) : f;
    }

    onError(setErrored);
    return props.children;
  });
}

const SuspenseListContext = createContext();

function SuspenseList(props) {
  let index = 0,
      suspenseSetter,
      showContent,
      showFallback;
  const listContext = useContext(SuspenseListContext);

  if (listContext) {
    const [inFallback, setFallback] = createSignal(false);
    suspenseSetter = setFallback;
    [showContent, showFallback] = listContext.register(inFallback);
  }

  const registry = [],
        comp = createComponent(SuspenseListContext.Provider, {
    value: {
      register: inFallback => {
        const [showingContent, showContent] = createSignal(false),
              [showingFallback, showFallback] = createSignal(false);
        registry[index++] = {
          inFallback,
          showContent,
          showFallback
        };
        return [showingContent, showingFallback];
      }
    },

    get children() {
      return props.children;
    }

  });
  createComputed(() => {
    const reveal = props.revealOrder,
          tail = props.tail,
          visibleContent = showContent ? showContent() : true,
          visibleFallback = showFallback ? showFallback() : true,
          reverse = reveal === "backwards";

    if (reveal === "together") {
      const all = registry.every(i => !i.inFallback());
      suspenseSetter && suspenseSetter(!all);
      registry.forEach(i => {
        i.showContent(all && visibleContent);
        i.showFallback(visibleFallback);
      });
      return;
    }

    let stop = false;

    for (let i = 0, len = registry.length; i < len; i++) {
      const n = reverse ? len - i - 1 : i,
            s = registry[n].inFallback();

      if (!stop && !s) {
        registry[n].showContent(visibleContent);
        registry[n].showFallback(visibleFallback);
      } else {
        const next = !stop;
        if (next && suspenseSetter) suspenseSetter(true);

        if (!tail || next && tail === "collapsed") {
          registry[n].showFallback(visibleFallback);
        } else registry[n].showFallback(false);

        stop = true;
        registry[n].showContent(next);
      }
    }

    if (!stop && suspenseSetter) suspenseSetter(false);
  });
  return comp;
}

function Suspense(props) {
  let counter = 0,
      showContent,
      showFallback,
      ctx,
      p,
      flicker,
      error;
  const [inFallback, setFallback] = createSignal(false),
        SuspenseContext = getSuspenseContext(),
        store = {
    increment: () => {
      if (++counter === 1) setFallback(true);
    },
    decrement: () => {
      if (--counter === 0) setFallback(false);
    },
    inFallback,
    effects: [],
    resolved: false
  },
        owner = getOwner();

  if (sharedConfig.context && sharedConfig.load) {
    const key = sharedConfig.context.id + sharedConfig.context.count;
    p = sharedConfig.load(key);

    if (p) {
      if (typeof p !== "object" || !("then" in p)) p = Promise.resolve(p);
      const [s, set] = createSignal(undefined, {
        equals: false
      });
      flicker = s;
      p.then(err => {
        if ((error = err) || sharedConfig.done) return set();
        sharedConfig.gather(key);
        setHydrateContext(ctx);
        set();
        setHydrateContext();
      });
    }
  }

  const listContext = useContext(SuspenseListContext);
  if (listContext) [showContent, showFallback] = listContext.register(store.inFallback);
  let dispose;
  onCleanup(() => dispose && dispose());
  return createComponent(SuspenseContext.Provider, {
    value: store,

    get children() {
      return createMemo(() => {
        if (error) throw error;
        ctx = sharedConfig.context;

        if (flicker) {
          flicker();
          return flicker = undefined;
        }

        if (ctx && p === undefined) setHydrateContext();
        const rendered = createMemo(() => props.children);
        return createMemo(() => {
          const inFallback = store.inFallback(),
                visibleContent = showContent ? showContent() : true,
                visibleFallback = showFallback ? showFallback() : true;
          dispose && dispose();

          if ((!inFallback || p !== undefined) && visibleContent) {
            store.resolved = true;
            ctx = p = undefined;
            resumeEffects(store.effects);
            return rendered();
          }

          if (!visibleFallback) return;
          return createRoot(disposer => {
            dispose = disposer;

            if (ctx) {
              setHydrateContext({
                id: ctx.id + "f",
                count: 0
              });
              ctx = undefined;
            }

            return props.fallback;
          }, owner);
        });
      });
    }

  });
}

let DEV;
{
  DEV = {
    writeSignal,
    serializeGraph,
    registerGraph,
    hashValue
  };
}

if (globalThis) {
  if (!globalThis.Solid$$) globalThis.Solid$$ = true;else console.warn("You appear to have multiple instances of Solid. This can lead to unexpected behavior.");
}



/***/ }),

/***/ "./node_modules/solid-js/web/dist/dev.js":
/*!***********************************************!*\
  !*** ./node_modules/solid-js/web/dist/dev.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Aliases": () => (/* binding */ Aliases),
/* harmony export */   "Assets": () => (/* binding */ Assets),
/* harmony export */   "ChildProperties": () => (/* binding */ ChildProperties),
/* harmony export */   "DOMElements": () => (/* binding */ DOMElements),
/* harmony export */   "DelegatedEvents": () => (/* binding */ DelegatedEvents),
/* harmony export */   "Dynamic": () => (/* binding */ Dynamic),
/* harmony export */   "ErrorBoundary": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.ErrorBoundary),
/* harmony export */   "For": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.For),
/* harmony export */   "HydrationScript": () => (/* binding */ Assets),
/* harmony export */   "Index": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.Index),
/* harmony export */   "Match": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.Match),
/* harmony export */   "NoHydration": () => (/* binding */ NoHydration),
/* harmony export */   "Portal": () => (/* binding */ Portal),
/* harmony export */   "PropAliases": () => (/* binding */ PropAliases),
/* harmony export */   "Properties": () => (/* binding */ Properties),
/* harmony export */   "SVGElements": () => (/* binding */ SVGElements),
/* harmony export */   "SVGNamespace": () => (/* binding */ SVGNamespace),
/* harmony export */   "Show": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.Show),
/* harmony export */   "Suspense": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   "SuspenseList": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.SuspenseList),
/* harmony export */   "Switch": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.Switch),
/* harmony export */   "addEventListener": () => (/* binding */ addEventListener),
/* harmony export */   "assign": () => (/* binding */ assign),
/* harmony export */   "classList": () => (/* binding */ classList),
/* harmony export */   "className": () => (/* binding */ className),
/* harmony export */   "clearDelegatedEvents": () => (/* binding */ clearDelegatedEvents),
/* harmony export */   "createComponent": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.createComponent),
/* harmony export */   "delegateEvents": () => (/* binding */ delegateEvents),
/* harmony export */   "dynamicProperty": () => (/* binding */ dynamicProperty),
/* harmony export */   "effect": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect),
/* harmony export */   "escape": () => (/* binding */ escape),
/* harmony export */   "generateHydrationScript": () => (/* binding */ generateHydrationScript),
/* harmony export */   "getHydrationKey": () => (/* binding */ getHydrationKey),
/* harmony export */   "getNextElement": () => (/* binding */ getNextElement),
/* harmony export */   "getNextMarker": () => (/* binding */ getNextMarker),
/* harmony export */   "getNextMatch": () => (/* binding */ getNextMatch),
/* harmony export */   "getOwner": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.getOwner),
/* harmony export */   "hydrate": () => (/* binding */ hydrate),
/* harmony export */   "innerHTML": () => (/* binding */ innerHTML),
/* harmony export */   "insert": () => (/* binding */ insert),
/* harmony export */   "isServer": () => (/* binding */ isServer),
/* harmony export */   "memo": () => (/* binding */ memo),
/* harmony export */   "mergeProps": () => (/* reexport safe */ solid_js__WEBPACK_IMPORTED_MODULE_0__.mergeProps),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderToStream": () => (/* binding */ renderToStream),
/* harmony export */   "renderToString": () => (/* binding */ renderToString),
/* harmony export */   "renderToStringAsync": () => (/* binding */ renderToStringAsync),
/* harmony export */   "resolveSSRNode": () => (/* binding */ resolveSSRNode),
/* harmony export */   "runHydrationEvents": () => (/* binding */ runHydrationEvents),
/* harmony export */   "setAttribute": () => (/* binding */ setAttribute),
/* harmony export */   "setAttributeNS": () => (/* binding */ setAttributeNS),
/* harmony export */   "spread": () => (/* binding */ spread),
/* harmony export */   "ssr": () => (/* binding */ ssr),
/* harmony export */   "ssrAttribute": () => (/* binding */ ssrAttribute),
/* harmony export */   "ssrClassList": () => (/* binding */ ssrClassList),
/* harmony export */   "ssrHydrationKey": () => (/* binding */ ssrHydrationKey),
/* harmony export */   "ssrSpread": () => (/* binding */ ssrSpread),
/* harmony export */   "ssrStyle": () => (/* binding */ ssrStyle),
/* harmony export */   "style": () => (/* binding */ style),
/* harmony export */   "template": () => (/* binding */ template)
/* harmony export */ });
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! solid-js */ "./node_modules/solid-js/dist/dev.js");


const booleans = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"];
const Properties = /*#__PURE__*/new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...booleans]);
const ChildProperties = /*#__PURE__*/new Set(["innerHTML", "textContent", "innerText", "children"]);
const Aliases = {
  className: "class",
  htmlFor: "for"
};
const PropAliases = {
  class: "className",
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly"
};
const DelegatedEvents = /*#__PURE__*/new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
const SVGElements = /*#__PURE__*/new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use", "view", "vkern"]);
const SVGNamespace = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
const DOMElements = /*#__PURE__*/new Set(["html", "base", "head", "link", "meta", "style", "title", "body", "address", "article", "aside", "footer", "header", "main", "nav", "section", "body", "blockquote", "dd", "div", "dl", "dt", "figcaption", "figure", "hr", "li", "ol", "p", "pre", "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "rp", "rt", "ruby", "s", "samp", "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "area", "audio", "img", "map", "track", "video", "embed", "iframe", "object", "param", "picture", "portal", "source", "svg", "math", "canvas", "noscript", "script", "del", "ins", "caption", "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "button", "datalist", "fieldset", "form", "input", "label", "legend", "meter", "optgroup", "option", "output", "progress", "select", "textarea", "details", "dialog", "menu", "summary", "details", "slot", "template", "acronym", "applet", "basefont", "bgsound", "big", "blink", "center", "content", "dir", "font", "frame", "frameset", "hgroup", "image", "keygen", "marquee", "menuitem", "nobr", "noembed", "noframes", "plaintext", "rb", "rtc", "shadow", "spacer", "strike", "tt", "xmp", "a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "portal", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp", "input"]);

function memo(fn, equals) {
  return (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createMemo)(fn, undefined, !equals ? {
    equals
  } : undefined);
}

function reconcileArrays(parentNode, a, b) {
  let bLength = b.length,
      aEnd = a.length,
      bEnd = bLength,
      aStart = 0,
      bStart = 0,
      after = a[aEnd - 1].nextSibling,
      map = null;

  while (aStart < aEnd || bStart < bEnd) {
    if (a[aStart] === b[bStart]) {
      aStart++;
      bStart++;
      continue;
    }

    while (a[aEnd - 1] === b[bEnd - 1]) {
      aEnd--;
      bEnd--;
    }

    if (aEnd === aStart) {
      const node = bEnd < bLength ? bStart ? b[bStart - 1].nextSibling : b[bEnd - bStart] : after;

      while (bStart < bEnd) parentNode.insertBefore(b[bStart++], node);
    } else if (bEnd === bStart) {
      while (aStart < aEnd) {
        if (!map || !map.has(a[aStart])) a[aStart].remove();
        aStart++;
      }
    } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
      const node = a[--aEnd].nextSibling;
      parentNode.insertBefore(b[bStart++], a[aStart++].nextSibling);
      parentNode.insertBefore(b[--bEnd], node);
      a[aEnd] = b[bEnd];
    } else {
      if (!map) {
        map = new Map();
        let i = bStart;

        while (i < bEnd) map.set(b[i], i++);
      }

      const index = map.get(a[aStart]);

      if (index != null) {
        if (bStart < index && index < bEnd) {
          let i = aStart,
              sequence = 1,
              t;

          while (++i < aEnd && i < bEnd) {
            if ((t = map.get(a[i])) == null || t !== index + sequence) break;
            sequence++;
          }

          if (sequence > index - bStart) {
            const node = a[aStart];

            while (bStart < index) parentNode.insertBefore(b[bStart++], node);
          } else parentNode.replaceChild(b[bStart++], a[aStart++]);
        } else aStart++;
      } else a[aStart++].remove();
    }
  }
}

const $$EVENTS = "_$DX_DELEGATE";

function render(code, element, init) {
  let disposer;
  (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRoot)(dispose => {
    disposer = dispose;
    element === document ? code() : insert(element, code(), element.firstChild ? null : undefined, init);
  });
  return () => {
    disposer();
    element.textContent = "";
  };
}

function template(html, check, isSVG) {
  const t = document.createElement("template");
  t.innerHTML = html;
  if (check && t.innerHTML.split("<").length - 1 !== check) throw `The browser resolved template HTML does not match JSX input:\n${t.innerHTML}\n\n${html}. Is your HTML properly formed?`;
  let node = t.content.firstChild;
  if (isSVG) node = node.firstChild;
  return node;
}

function delegateEvents(eventNames, document = window.document) {
  const e = document[$$EVENTS] || (document[$$EVENTS] = new Set());

  for (let i = 0, l = eventNames.length; i < l; i++) {
    const name = eventNames[i];

    if (!e.has(name)) {
      e.add(name);
      document.addEventListener(name, eventHandler);
    }
  }
}

function clearDelegatedEvents(document = window.document) {
  if (document[$$EVENTS]) {
    for (let name of document[$$EVENTS].keys()) document.removeEventListener(name, eventHandler);

    delete document[$$EVENTS];
  }
}

function setAttribute(node, name, value) {
  if (value == null) node.removeAttribute(name);else node.setAttribute(name, value);
}

function setAttributeNS(node, namespace, name, value) {
  if (value == null) node.removeAttributeNS(namespace, name);else node.setAttributeNS(namespace, name, value);
}

function className(node, value) {
  if (value == null) node.removeAttribute("class");else node.className = value;
}

function addEventListener(node, name, handler, delegate) {
  if (delegate) {
    if (Array.isArray(handler)) {
      node[`$$${name}`] = handler[0];
      node[`$$${name}Data`] = handler[1];
    } else node[`$$${name}`] = handler;
  } else if (Array.isArray(handler)) {
    const handlerFn = handler[0];
    node.addEventListener(name, handler[0] = e => handlerFn.call(node, handler[1], e));
  } else node.addEventListener(name, handler);
}

function classList(node, value, prev = {}) {
  const classKeys = Object.keys(value || {}),
        prevKeys = Object.keys(prev);
  let i, len;

  for (i = 0, len = prevKeys.length; i < len; i++) {
    const key = prevKeys[i];
    if (!key || key === "undefined" || value[key]) continue;
    toggleClassKey(node, key, false);
    delete prev[key];
  }

  for (i = 0, len = classKeys.length; i < len; i++) {
    const key = classKeys[i],
          classValue = !!value[key];
    if (!key || key === "undefined" || prev[key] === classValue || !classValue) continue;
    toggleClassKey(node, key, true);
    prev[key] = classValue;
  }

  return prev;
}

function style(node, value, prev = {}) {
  const nodeStyle = node.style;
  const prevString = typeof prev === "string";
  if (value == null && prevString || typeof value === "string") return nodeStyle.cssText = value;
  prevString && (nodeStyle.cssText = undefined, prev = {});
  value || (value = {});
  let v, s;

  for (s in prev) {
    value[s] == null && nodeStyle.removeProperty(s);
    delete prev[s];
  }

  for (s in value) {
    v = value[s];

    if (v !== prev[s]) {
      nodeStyle.setProperty(s, v);
      prev[s] = v;
    }
  }

  return prev;
}

function spread(node, accessor, isSVG, skipChildren) {
  if (typeof accessor === "function") {
    (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect)(current => spreadExpression(node, accessor(), current, isSVG, skipChildren));
  } else spreadExpression(node, accessor, undefined, isSVG, skipChildren);
}

function dynamicProperty(props, key) {
  const src = props[key];
  Object.defineProperty(props, key, {
    get() {
      return src();
    },

    enumerable: true
  });
  return props;
}

function innerHTML(parent, content) {
  !solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context && (parent.innerHTML = content);
}

function insert(parent, accessor, marker, initial) {
  if (marker !== undefined && !initial) initial = [];
  if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
  (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect)(current => insertExpression(parent, accessor(), current, marker), initial);
}

function assign(node, props, isSVG, skipChildren, prevProps = {}, skipRef = false) {
  props || (props = {});

  for (const prop in prevProps) {
    if (!(prop in props)) {
      if (prop === "children") continue;
      assignProp(node, prop, null, prevProps[prop], isSVG, skipRef);
    }
  }

  for (const prop in props) {
    if (prop === "children") {
      if (!skipChildren) insertExpression(node, props.children);
      continue;
    }

    const value = props[prop];
    prevProps[prop] = assignProp(node, prop, value, prevProps[prop], isSVG, skipRef);
  }
}

function hydrate$1(code, element, options = {}) {
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.completed = globalThis._$HY.completed;
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.events = globalThis._$HY.events;
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.load = globalThis._$HY.load;

  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.gather = root => gatherHydratable(element, root);

  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.registry = new Map();
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context = {
    id: options.renderId || "",
    count: 0
  };
  gatherHydratable(element, options.renderId);
  const dispose = render(code, element, [...element.childNodes]);
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context = null;
  return dispose;
}

function getNextElement(template) {
  let node, key;

  if (!solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context || !(node = solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.registry.get(key = getHydrationKey()))) {
    return template.cloneNode(true);
  }

  if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.completed) solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.completed.add(node);
  solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.registry["delete"](key);
  return node;
}

function getNextMatch(el, nodeName) {
  while (el && el.localName !== nodeName) el = el.nextSibling;

  return el;
}

function getNextMarker(start) {
  let end = start,
      count = 0,
      current = [];

  if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context) {
    while (end) {
      if (end.nodeType === 8) {
        const v = end.nodeValue;
        if (v === "#") count++;else if (v === "/") {
          if (count === 0) return [end, current];
          count--;
        }
      }

      current.push(end);
      end = end.nextSibling;
    }
  }

  return [end, current];
}

function runHydrationEvents() {
  if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.events && !solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.events.queued) {
    queueMicrotask(() => {
      const {
        completed,
        events
      } = solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig;
      events.queued = false;

      while (events.length) {
        const [el, e] = events[0];
        if (!completed.has(el)) return;
        eventHandler(e);
        events.shift();
      }
    });
    solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.events.queued = true;
  }
}

function toPropertyName(name) {
  return name.toLowerCase().replace(/-([a-z])/g, (_, w) => w.toUpperCase());
}

function toggleClassKey(node, key, value) {
  const classNames = key.trim().split(/\s+/);

  for (let i = 0, nameLen = classNames.length; i < nameLen; i++) node.classList.toggle(classNames[i], value);
}

function assignProp(node, prop, value, prev, isSVG, skipRef) {
  let isCE, isProp, isChildProp;
  if (prop === "style") return style(node, value, prev);
  if (prop === "classList") return classList(node, value, prev);
  if (value === prev) return prev;

  if (prop === "ref") {
    if (!skipRef) {
      value(node);
    }
  } else if (prop.slice(0, 3) === "on:") {
    const e = prop.slice(3);
    prev && node.removeEventListener(e, prev);
    value && node.addEventListener(e, value);
  } else if (prop.slice(0, 10) === "oncapture:") {
    const e = prop.slice(10);
    prev && node.removeEventListener(e, prev, true);
    value && node.addEventListener(e, value, true);
  } else if (prop.slice(0, 2) === "on") {
    const name = prop.slice(2).toLowerCase();
    const delegate = DelegatedEvents.has(name);

    if (!delegate && prev) {
      const h = Array.isArray(prev) ? prev[0] : prev;
      node.removeEventListener(name, h);
    }

    if (delegate || value) {
      addEventListener(node, name, value, delegate);
      delegate && delegateEvents([name]);
    }
  } else if ((isChildProp = ChildProperties.has(prop)) || !isSVG && (PropAliases[prop] || (isProp = Properties.has(prop))) || (isCE = node.nodeName.includes("-"))) {
    if (prop === "class" || prop === "className") className(node, value);else if (isCE && !isProp && !isChildProp) node[toPropertyName(prop)] = value;else node[PropAliases[prop] || prop] = value;
  } else {
    const ns = isSVG && prop.indexOf(":") > -1 && SVGNamespace[prop.split(":")[0]];
    if (ns) setAttributeNS(node, ns, prop, value);else setAttribute(node, Aliases[prop] || prop, value);
  }

  return value;
}

function eventHandler(e) {
  const key = `$$${e.type}`;
  let node = e.composedPath && e.composedPath()[0] || e.target;

  if (e.target !== node) {
    Object.defineProperty(e, "target", {
      configurable: true,
      value: node
    });
  }

  Object.defineProperty(e, "currentTarget", {
    configurable: true,

    get() {
      return node || document;
    }

  });

  if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.registry && !solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.done) {
    solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.done = true;
    document.querySelectorAll("[id^=pl-]").forEach(elem => elem.remove());
  }

  while (node !== null) {
    const handler = node[key];

    if (handler && !node.disabled) {
      const data = node[`${key}Data`];
      data !== undefined ? handler.call(node, data, e) : handler.call(node, e);
      if (e.cancelBubble) return;
    }

    node = node.host && node.host !== node && node.host instanceof Node ? node.host : node.parentNode;
  }
}

function spreadExpression(node, props, prevProps = {}, isSVG, skipChildren) {
  props || (props = {});

  if (!skipChildren && "children" in props) {
    (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect)(() => prevProps.children = insertExpression(node, props.children, prevProps.children));
  }

  props.ref && props.ref(node);
  (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect)(() => assign(node, props, isSVG, true, prevProps, true));
  return prevProps;
}

function insertExpression(parent, value, current, marker, unwrapArray) {
  if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context && !current) current = [...parent.childNodes];

  while (typeof current === "function") current = current();

  if (value === current) return current;
  const t = typeof value,
        multi = marker !== undefined;
  parent = multi && current[0] && current[0].parentNode || parent;

  if (t === "string" || t === "number") {
    if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context) return current;
    if (t === "number") value = value.toString();

    if (multi) {
      let node = current[0];

      if (node && node.nodeType === 3) {
        node.data = value;
      } else node = document.createTextNode(value);

      current = cleanChildren(parent, current, marker, node);
    } else {
      if (current !== "" && typeof current === "string") {
        current = parent.firstChild.data = value;
      } else current = parent.textContent = value;
    }
  } else if (value == null || t === "boolean") {
    if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context) return current;
    current = cleanChildren(parent, current, marker);
  } else if (t === "function") {
    (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect)(() => {
      let v = value();

      while (typeof v === "function") v = v();

      current = insertExpression(parent, v, current, marker);
    });
    return () => current;
  } else if (Array.isArray(value)) {
    const array = [];

    if (normalizeIncomingArray(array, value, unwrapArray)) {
      (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRenderEffect)(() => current = insertExpression(parent, array, current, marker, true));
      return () => current;
    }

    if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].parentNode) return current = array;
      }
    }

    if (array.length === 0) {
      current = cleanChildren(parent, current, marker);
      if (multi) return current;
    } else if (Array.isArray(current)) {
      if (current.length === 0) {
        appendNodes(parent, array, marker);
      } else reconcileArrays(parent, current, array);
    } else {
      current && cleanChildren(parent);
      appendNodes(parent, array);
    }

    current = array;
  } else if (value instanceof Node) {
    if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context && value.parentNode) return current = multi ? [value] : value;

    if (Array.isArray(current)) {
      if (multi) return current = cleanChildren(parent, current, marker, value);
      cleanChildren(parent, current, null, value);
    } else if (current == null || current === "" || !parent.firstChild) {
      parent.appendChild(value);
    } else parent.replaceChild(value, parent.firstChild);

    current = value;
  } else console.warn(`Unrecognized value. Skipped inserting`, value);

  return current;
}

function normalizeIncomingArray(normalized, array, unwrap) {
  let dynamic = false;

  for (let i = 0, len = array.length; i < len; i++) {
    let item = array[i],
        t;

    if (item instanceof Node) {
      normalized.push(item);
    } else if (item == null || item === true || item === false) ;else if (Array.isArray(item)) {
      dynamic = normalizeIncomingArray(normalized, item) || dynamic;
    } else if ((t = typeof item) === "string") {
      normalized.push(document.createTextNode(item));
    } else if (t === "function") {
      if (unwrap) {
        while (typeof item === "function") item = item();

        dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [item]) || dynamic;
      } else {
        normalized.push(item);
        dynamic = true;
      }
    } else normalized.push(document.createTextNode(item.toString()));
  }

  return dynamic;
}

function appendNodes(parent, array, marker) {
  for (let i = 0, len = array.length; i < len; i++) parent.insertBefore(array[i], marker);
}

function cleanChildren(parent, current, marker, replacement) {
  if (marker === undefined) return parent.textContent = "";
  const node = replacement || document.createTextNode("");

  if (current.length) {
    let inserted = false;

    for (let i = current.length - 1; i >= 0; i--) {
      const el = current[i];

      if (node !== el) {
        const isParent = el.parentNode === parent;
        if (!inserted && !i) isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);else isParent && el.remove();
      } else inserted = true;
    }
  } else parent.insertBefore(node, marker);

  return [node];
}

function gatherHydratable(element, root) {
  const templates = element.querySelectorAll(`*[data-hk]`);

  for (let i = 0; i < templates.length; i++) {
    const node = templates[i];
    const key = node.getAttribute("data-hk");
    if ((!root || key.startsWith(root)) && !solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.registry.has(key)) solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.registry.set(key, node);
  }
}

function getHydrationKey() {
  const hydrate = solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context;
  return `${hydrate.id}${hydrate.count++}`;
}

function Assets() {
  return;
}

function NoHydration(props) {
  return solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context ? undefined : props.children;
}

function throwInBrowser(func) {
  const err = new Error(`${func.name} is not supported in the browser, returning undefined`);
  console.error(err);
}

function renderToString(fn, options) {
  throwInBrowser(renderToString);
}

function renderToStringAsync(fn, options) {
  throwInBrowser(renderToStringAsync);
}

function renderToStream(fn, options) {
  throwInBrowser(renderToStream);
}

function ssr(template, ...nodes) {}

function resolveSSRNode(node) {}

function ssrClassList(value) {}

function ssrStyle(value) {}

function ssrSpread(accessor) {}

function ssrAttribute(key, value) {}

function ssrHydrationKey() {}

function escape(html) {}

function generateHydrationScript() {}

const isServer = false;
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

function createElement(tagName, isSVG = false) {
  return isSVG ? document.createElementNS(SVG_NAMESPACE, tagName) : document.createElement(tagName);
}

const hydrate = (...args) => {
  (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.enableHydration)();
  return hydrate$1(...args);
};

function Portal(props) {
  const {
    useShadow
  } = props,
        marker = document.createTextNode(""),
        mount = props.mount || document.body;

  function renderPortal() {
    if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context) {
      const [s, set] = (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createSignal)(false);
      queueMicrotask(() => set(true));
      return () => s() && props.children;
    } else return () => props.children;
  }

  if (mount instanceof HTMLHeadElement) {
    const [clean, setClean] = (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createSignal)(false);

    const cleanup = () => setClean(true);

    (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createRoot)(dispose => insert(mount, () => !clean() ? renderPortal()() : dispose(), null));
    (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.onCleanup)(() => {
      if (solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context) queueMicrotask(cleanup);else cleanup();
    });
  } else {
    const container = createElement(props.isSVG ? "g" : "div", props.isSVG),
          renderRoot = useShadow && container.attachShadow ? container.attachShadow({
      mode: "open"
    }) : container;
    Object.defineProperty(container, "host", {
      get() {
        return marker.parentNode;
      }

    });
    insert(renderRoot, renderPortal());
    mount.appendChild(container);
    props.ref && props.ref(container);
    (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.onCleanup)(() => mount.removeChild(container));
  }

  return marker;
}

function Dynamic(props) {
  const [p, others] = (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.splitProps)(props, ["component"]);
  const cached = (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createMemo)(() => p.component);
  return (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.createMemo)(() => {
    const component = cached();

    switch (typeof component) {
      case "function":
        Object.assign(component, {
          [solid_js__WEBPACK_IMPORTED_MODULE_0__.$DEVCOMP]: true
        });
        return (0,solid_js__WEBPACK_IMPORTED_MODULE_0__.untrack)(() => component(others));

      case "string":
        const isSvg = SVGElements.has(component);
        const el = solid_js__WEBPACK_IMPORTED_MODULE_0__.sharedConfig.context ? getNextElement() : createElement(component, isSvg);
        spread(el, others, isSvg);
        return el;
    }
  });
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var solid_js_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! solid-js/web */ "./node_modules/solid-js/web/dist/dev.js");
/* harmony import */ var solid_js_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! solid-js */ "./node_modules/solid-js/dist/dev.js");
/* harmony import */ var solid_parameter_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! solid-parameter-controls */ "./node_modules/solid-parameter-controls/dist/index.js");





const _tmpl$ = /*#__PURE__*/(0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.template)(`<svg viewBox="0 0 100 100"></svg>`, 2),
      _tmpl$2 = /*#__PURE__*/(0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.template)(`<h1>solid-parameter-controls examples</h1>`, 2);





function Knob(props) {
  return (0,solid_js_web__WEBPACK_IMPORTED_MODULE_2__.createComponent)(solid_parameter_controls__WEBPACK_IMPORTED_MODULE_1__.Control, (0,solid_js_web__WEBPACK_IMPORTED_MODULE_2__.mergeProps)(props, {
    get children() {
      const _el$ = _tmpl$.cloneNode(true);

      (0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.insert)(_el$, (0,solid_js_web__WEBPACK_IMPORTED_MODULE_2__.createComponent)(solid_parameter_controls__WEBPACK_IMPORTED_MODULE_1__.Arc, {
        x: 0,
        y: 0,
        radius: 50,
        startAngle: 180,
        endAngle: 250
      }));

      return _el$;
    }

  }));
}

const range = new solid_parameter_controls__WEBPACK_IMPORTED_MODULE_1__.ContinuousRange({
  start: 0,
  end: 1
});

function ExampleApp() {
  const [value, setValue] = (0,solid_js_web__WEBPACK_IMPORTED_MODULE_2__.createSignal)(0.25);
  return [_tmpl$2.cloneNode(true), (0,solid_js_web__WEBPACK_IMPORTED_MODULE_2__.createComponent)(Knob, {
    get value() {
      return value();
    },

    onChange: setValue,
    range: range
  })];
}

(0,solid_js_web__WEBPACK_IMPORTED_MODULE_0__.render)(ExampleApp, document.getElementById('container'));
})();

/******/ })()
;
//# sourceMappingURL=examples.js.map