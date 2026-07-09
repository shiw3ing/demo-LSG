/* @ds-bundle: {"format":3,"namespace":"LifeSGDesignSystem_15079f","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Pill","sourcePath":"components/data-display/Pill.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"NotificationBanner","sourcePath":"components/feedback/NotificationBanner.jsx"},{"name":"ProgressIndicator","sourcePath":"components/feedback/ProgressIndicator.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioButton","sourcePath":"components/forms/RadioButton.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"b5152cee2da6","components/data-display/Avatar.jsx":"09f7c5eb5fb0","components/data-display/Badge.jsx":"4f14037df88b","components/data-display/Card.jsx":"36b7c5b01489","components/data-display/Pill.jsx":"401c71b098b7","components/data-display/Tag.jsx":"0f632effff28","components/feedback/Alert.jsx":"d34747cc8ead","components/feedback/NotificationBanner.jsx":"cdabaa467263","components/feedback/ProgressIndicator.jsx":"6b659687a3bc","components/forms/Checkbox.jsx":"45159dae27ae","components/forms/Input.jsx":"0d85d235ad14","components/forms/RadioButton.jsx":"4a659311e74e","components/forms/Select.jsx":"7d5543a71022","components/forms/Textarea.jsx":"e92dc8c088cc","components/forms/Toggle.jsx":"19a608d0ef02","components/navigation/Accordion.jsx":"eba5bf245251","components/navigation/Breadcrumb.jsx":"2cfd00357627","components/navigation/Pagination.jsx":"460200b28688","components/navigation/Tabs.jsx":"d367026200ce","ui_kits/lifesg-app/chrome.jsx":"6f69fbc4e5c1","ui_kits/lifesg-app/screens.jsx":"7a97de71c2da"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LifeSGDesignSystem_15079f = window.LifeSGDesignSystem_15079f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LifeSG Button.
 * styleType: "default" (filled blue) | "secondary" (outline) | "light" (subtle) | "link"
 * size: "small" (40px) | "default" (48px) | "large" (64px)
 */
function Button({
  children,
  styleType = "default",
  size = "default",
  danger = false,
  disabled = false,
  loading = false,
  icon = null,
  iconPosition = "left",
  style = {},
  ...rest
}) {
  const heights = {
    small: "2.5rem",
    default: "3rem",
    large: "4rem"
  };
  const fontSizes = {
    small: "1rem",
    default: "1.125rem",
    large: "1.625rem"
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    minWidth: "4rem",
    height: heights[size],
    padding: "var(--spacing-8) var(--spacing-16)",
    border: "1px solid transparent",
    borderRadius: "var(--radius-sm)",
    fontFamily: "var(--font-family)",
    fontSize: fontSizes[size],
    fontWeight: "var(--weight-semibold)",
    lineHeight: 1.2,
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all var(--duration-250) var(--ease-default)",
    whiteSpace: "nowrap"
  };
  const variants = {
    default: {
      background: danger ? "var(--bg-error-strong)" : "var(--bg-primary)",
      color: "var(--text-inverse)"
    },
    secondary: {
      background: "var(--bg)",
      borderColor: danger ? "var(--border-error-strong)" : "var(--border-primary)",
      color: danger ? "var(--text-error)" : "var(--text-primary)"
    },
    light: {
      background: "var(--bg)",
      borderColor: "var(--border)",
      color: danger ? "var(--text-error)" : "var(--text-primary)"
    },
    link: {
      background: "transparent",
      color: danger ? "var(--text-error)" : "var(--text-primary)"
    }
  };
  const disabledStyle = {
    background: "var(--bg-disabled)",
    color: "var(--text-disabled)",
    borderColor: "transparent"
  };
  const css = {
    ...base,
    ...(disabled ? disabledStyle : variants[styleType]),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: css,
    disabled: disabled,
    "aria-busy": loading || undefined
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, null), !loading && icon && iconPosition === "left" && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, icon), children, !loading && icon && iconPosition === "right" && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, icon));
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "1.125rem",
      height: "1.125rem",
      border: "2px solid currentColor",
      borderTopColor: "transparent",
      borderRadius: "50%",
      display: "inline-block",
      animation: "ds-spin 0.7s linear infinite"
    }
  });
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
/** LifeSG Avatar — circular initials or image. */
function Avatar({
  name = "",
  src,
  size = 40,
  color = "primary",
  style = {}
}) {
  const initials = name.split(" ").map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  const bg = {
    primary: "var(--bg-primary-subtler)",
    brand: "var(--brand-95)",
    secondary: "var(--bg-secondary-subtler)",
    grey: "var(--bg-strongest)"
  }[color];
  const fg = {
    primary: "var(--text-primary-strong)",
    brand: "var(--text-brand)",
    secondary: "var(--text-secondary)",
    grey: "var(--text-subtle)"
  }[color];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "var(--radius-full)",
      background: src ? "transparent" : bg,
      color: fg,
      fontFamily: "var(--font-family)",
      fontWeight: "var(--weight-semibold)",
      fontSize: size * 0.4,
      overflow: "hidden",
      flexShrink: 0,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
/** LifeSG numeric/dot Badge — typically overlaid on an icon. */
function Badge({
  count,
  dot = false,
  max = 99,
  color = "red",
  children,
  style = {}
}) {
  const bg = {
    red: "var(--bg-error-strong)",
    primary: "var(--bg-primary)",
    green: "var(--bg-success-strong)",
    grey: "var(--bg-inverse-subtler)"
  }[color];
  const label = typeof count === "number" && count > max ? `${max}+` : count;
  const badge = /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: bg,
      color: "var(--text-inverse)",
      fontFamily: "var(--font-family)",
      fontSize: "0.6875rem",
      fontWeight: "var(--weight-bold)",
      lineHeight: 1,
      minWidth: dot ? "0.625rem" : "1.125rem",
      height: dot ? "0.625rem" : "1.125rem",
      padding: dot ? 0 : "0 0.3125rem",
      borderRadius: "var(--radius-full)",
      boxSizing: "border-box"
    }
  }, !dot && label);
  if (!children) return badge;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: dot ? 0 : "-6px",
      right: dot ? 0 : "-8px"
    }
  }, badge));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
/**
 * LifeSG Card — elevated content surface. 8px radius, subtle shadow.
 * Set interactive for hover lift + pointer.
 */
function Card({
  children,
  interactive = false,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--bg)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-md)",
      padding: "var(--spacing-24)",
      boxShadow: interactive && hover ? "var(--shadow-md-subtle)" : "var(--shadow-sm-subtle)",
      transform: interactive && hover ? "translateY(-2px)" : "none",
      transition: "all var(--duration-250) var(--ease-default)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Pill.jsx
try { (() => {
/** LifeSG Pill — fully rounded selectable chip, e.g. filters. */
function Pill({
  children,
  selected = false,
  disabled = false,
  onClick,
  icon = null,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.375rem",
      padding: "0.5rem 1rem",
      borderRadius: "var(--radius-full)",
      border: `1px solid ${selected ? "var(--border-selected)" : "var(--border-strong)"}`,
      background: selected ? "var(--bg-selected)" : "var(--bg)",
      color: selected ? "var(--text-primary)" : "var(--text)",
      fontFamily: "var(--font-family)",
      fontSize: "var(--body-size-sm)",
      fontWeight: "var(--weight-semibold)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "all var(--duration-150) var(--ease-default)",
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Pill.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
/**
 * LifeSG Tag — small status label.
 * type: "default" (outline) | "solid". color: grey|green|yellow|red|blue|primary|default
 */
function Tag({
  children,
  type = "default",
  color = "default",
  icon = null,
  style = {}
}) {
  const outline = {
    default: {
      background: "var(--bg)",
      border: "var(--border)",
      color: "var(--text)"
    },
    grey: {
      background: "var(--bg-strong)",
      border: "var(--border-strong)",
      color: "var(--text-subtle)"
    },
    green: {
      background: "var(--bg-success)",
      border: "var(--border-success)",
      color: "var(--text-success)"
    },
    yellow: {
      background: "var(--bg-warning)",
      border: "var(--border-warning)",
      color: "var(--text-warning)"
    },
    red: {
      background: "var(--bg-error)",
      border: "var(--border-error)",
      color: "var(--text-error)"
    },
    blue: {
      background: "var(--bg-info)",
      border: "var(--border-info)",
      color: "var(--text-info)"
    },
    primary: {
      background: "var(--bg-primary-subtlest)",
      border: "var(--border-primary)",
      color: "var(--text-primary)"
    }
  };
  const solid = {
    default: {
      background: "var(--bg-inverse)",
      color: "var(--text-inverse)"
    },
    grey: {
      background: "var(--bg-inverse-subtler)",
      color: "var(--text-inverse)"
    },
    green: {
      background: "var(--bg-success-strong)",
      color: "var(--text-inverse)"
    },
    yellow: {
      background: "var(--bg-warning-strong)",
      color: "var(--text-inverse)"
    },
    red: {
      background: "var(--bg-error-strong)",
      color: "var(--text-inverse)"
    },
    blue: {
      background: "var(--bg-info-strong)",
      color: "var(--text-inverse)"
    },
    primary: {
      background: "var(--bg-primary)",
      color: "var(--text-inverse)"
    }
  };
  const v = type === "solid" ? solid[color] : outline[color];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.25rem",
      width: "fit-content",
      padding: "0.125rem 0.5rem",
      borderRadius: "var(--radius-sm)",
      border: `1px solid ${type === "solid" ? "transparent" : v.border}`,
      background: v.background,
      color: v.color,
      fontFamily: "var(--font-family)",
      fontSize: "var(--body-size-xs)",
      fontWeight: "var(--weight-semibold)",
      lineHeight: "var(--body-lh-xs)",
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
/**
 * LifeSG Alert — inline message with a 2px left accent border.
 * type: error | success | warning | info | description
 */
function Alert({
  children,
  type = "warning",
  size = "default",
  icon,
  style = {}
}) {
  const map = {
    error: {
      bg: "var(--bg-error)",
      border: "var(--border-error)",
      ic: "var(--icon-error)"
    },
    success: {
      bg: "var(--bg-success)",
      border: "var(--border-success)",
      ic: "var(--icon-success)"
    },
    warning: {
      bg: "var(--bg-warning)",
      border: "var(--border-warning)",
      ic: "var(--icon-warning)"
    },
    info: {
      bg: "var(--bg-info)",
      border: "var(--border-info)",
      ic: "var(--icon-info)"
    },
    description: {
      bg: "var(--bg-strong)",
      border: "var(--border-strong)",
      ic: "var(--icon-subtle)"
    }
  };
  const glyph = {
    error: "!",
    success: "✓",
    warning: "!",
    info: "i",
    description: "i"
  };
  const v = map[type];
  const small = size === "small";
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: "flex",
      gap: "var(--spacing-8)",
      padding: "var(--spacing-8) var(--spacing-16)",
      background: v.bg,
      borderLeft: `2px solid ${v.border}`,
      fontFamily: "var(--font-family)",
      fontSize: small ? "var(--body-size-sm)" : "var(--body-size-md)",
      lineHeight: small ? "var(--body-lh-sm)" : "var(--body-lh-md)",
      color: "var(--text)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      width: small ? "1.25rem" : "1.5rem",
      height: small ? "1.25rem" : "1.5rem",
      borderRadius: "var(--radius-full)",
      background: v.ic,
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "0.8rem",
      fontWeight: 700,
      fontStyle: type === "info" || type === "description" ? "italic" : "normal"
    }
  }, icon || glyph[type]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/NotificationBanner.jsx
try { (() => {
/**
 * LifeSG NotificationBanner — full-width page-level banner.
 * Sits at the top of a page; can be dismissed.
 */
function NotificationBanner({
  children,
  type = "info",
  dismissible = false,
  onDismiss,
  style = {}
}) {
  const map = {
    info: {
      bg: "var(--bg-info)",
      border: "var(--border-info)",
      ic: "var(--icon-info)"
    },
    warning: {
      bg: "var(--bg-warning)",
      border: "var(--border-warning)",
      ic: "var(--icon-warning)"
    },
    error: {
      bg: "var(--bg-error)",
      border: "var(--border-error)",
      ic: "var(--icon-error)"
    },
    success: {
      bg: "var(--bg-success)",
      border: "var(--border-success)",
      ic: "var(--icon-success)"
    }
  };
  const v = map[type];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--spacing-12)",
      width: "100%",
      padding: "var(--spacing-12) var(--spacing-24)",
      background: v.bg,
      borderBottom: `1px solid ${v.border}`,
      fontFamily: "var(--font-family)",
      fontSize: "var(--body-size-md)",
      color: "var(--text)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "1.5rem",
      height: "1.5rem",
      flexShrink: 0,
      borderRadius: "var(--radius-full)",
      background: v.ic,
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontStyle: "italic"
    }
  }, "i"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, children), dismissible && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--icon)",
      fontSize: "1.1rem",
      lineHeight: 1
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { NotificationBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/NotificationBanner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressIndicator.jsx
try { (() => {
/** LifeSG ProgressIndicator — numbered step tracker for multi-step flows. */
function ProgressIndicator({
  steps = [],
  current = 0,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      width: "100%",
      ...style
    }
  }, steps.map((label, i) => {
    const done = i < current;
    const active = i === current;
    const reached = done || active;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        flex: i === steps.length - 1 ? "0 0 auto" : 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--spacing-8)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: "2rem",
        height: "2rem",
        borderRadius: "var(--radius-full)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-family)",
        fontWeight: "var(--weight-semibold)",
        fontSize: "var(--body-size-sm)",
        background: reached ? "var(--bg-primary)" : "var(--bg-strongest)",
        color: reached ? "var(--text-inverse)" : "var(--text-subtler)"
      }
    }, done ? "✓" : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-family)",
        fontSize: "var(--body-size-sm)",
        fontWeight: active ? "var(--weight-semibold)" : "var(--weight-regular)",
        color: reached ? "var(--text)" : "var(--text-subtler)",
        whiteSpace: "nowrap"
      }
    }, label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: "2px",
        margin: "0 var(--spacing-8)",
        marginTop: "calc(-1rem - 8px)",
        background: done ? "var(--bg-primary)" : "var(--border)",
        minWidth: "2rem"
      }
    }));
  }));
}
Object.assign(__ds_scope, { ProgressIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressIndicator.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** LifeSG Checkbox with label. Square, 4px radius, primary-blue when checked. */
function Checkbox({
  checked = false,
  disabled = false,
  onChange,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--spacing-12)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-family)",
      fontSize: "var(--body-size-md)",
      color: "var(--text)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "1.5rem",
      height: "1.5rem",
      flexShrink: 0,
      borderRadius: "var(--radius-sm)",
      border: checked ? "none" : "2px solid var(--border-stronger)",
      background: checked ? "var(--bg-primary)" : "var(--bg)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all var(--duration-150) var(--ease-default)"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), children);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LifeSG text Input. 48px tall, 1px border, 4px radius.
 * Pass error to show the red error state.
 */
function Input({
  error = false,
  disabled = false,
  clearable = false,
  onClear,
  value,
  style = {},
  leftIcon = null,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? "var(--border-error)" : focused ? "var(--border-focus)" : "var(--border-strong)";
  const box = {
    display: "flex",
    alignItems: "center",
    gap: "var(--spacing-8)",
    width: "100%",
    height: "3rem",
    padding: "0 var(--spacing-16)",
    background: disabled ? "var(--bg-disabled)" : "var(--bg)",
    border: `1px solid ${borderColor}`,
    borderRadius: "var(--radius-sm)",
    boxShadow: focused ? "var(--shadow-xs-strong)" : "none",
    transition: "border-color var(--duration-250) var(--ease-default)",
    ...style
  };
  const input = {
    flex: 1,
    height: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
    fontFamily: "var(--font-family)",
    fontSize: "var(--body-size-md)",
    color: "var(--text)",
    minWidth: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: box
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--icon)"
    }
  }, leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    style: input,
    disabled: disabled,
    value: value,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest)), clearable && value && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClear,
    "aria-label": "Clear",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--icon)",
      display: "inline-flex",
      padding: 0,
      fontSize: "1.1rem"
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** LifeSG Radio button with label. Circular, primary-blue ring + dot when selected. */
function RadioButton({
  checked = false,
  disabled = false,
  onChange,
  children,
  name,
  value,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--spacing-12)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-family)",
      fontSize: "var(--body-size-md)",
      color: "var(--text)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "1.5rem",
      height: "1.5rem",
      flexShrink: 0,
      borderRadius: "var(--radius-full)",
      border: `2px solid ${checked ? "var(--border-selected)" : "var(--border-stronger)"}`,
      background: "var(--bg)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all var(--duration-150) var(--ease-default)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "0.75rem",
      height: "0.75rem",
      borderRadius: "var(--radius-full)",
      background: "var(--bg-primary)"
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), children);
}
Object.assign(__ds_scope, { RadioButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** LifeSG Select dropdown (native, restyled to match Input). */
function Select({
  error = false,
  disabled = false,
  children,
  placeholder,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? "var(--border-error)" : focused ? "var(--border-focus)" : "var(--border-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: "100%",
      height: "3rem",
      padding: "0 var(--spacing-40) 0 var(--spacing-16)",
      background: disabled ? "var(--bg-disabled)" : "var(--bg)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      fontFamily: "var(--font-family)",
      fontSize: "var(--body-size-md)",
      color: "var(--text)",
      outline: "none",
      appearance: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "border-color var(--duration-250) var(--ease-default)"
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "var(--spacing-16)",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--icon)",
      fontSize: "0.7rem"
    }
  }, "\u25BC"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** LifeSG multi-line text area. Same border treatment as Input. */
function Textarea({
  error = false,
  disabled = false,
  rows = 4,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? "var(--border-error)" : focused ? "var(--border-focus)" : "var(--border-strong)";
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: "100%",
      padding: "var(--spacing-12) var(--spacing-16)",
      background: disabled ? "var(--bg-disabled)" : "var(--bg)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      boxShadow: focused ? "var(--shadow-xs-strong)" : "none",
      fontFamily: "var(--font-family)",
      fontSize: "var(--body-size-md)",
      lineHeight: "var(--body-lh-md)",
      color: "var(--text)",
      resize: "vertical",
      outline: "none",
      transition: "border-color var(--duration-250) var(--ease-default)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
/** LifeSG Toggle (switch). Pill track, slides to primary-blue when on. */
function Toggle({
  checked = false,
  disabled = false,
  onChange,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--spacing-12)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-family)",
      fontSize: "var(--body-size-md)",
      color: "var(--text)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: "3rem",
      height: "1.75rem",
      flexShrink: 0,
      borderRadius: "var(--radius-full)",
      background: checked ? "var(--bg-primary)" : "var(--bg-strongest)",
      padding: "0.1875rem",
      display: "inline-flex",
      justifyContent: checked ? "flex-end" : "flex-start",
      transition: "background var(--duration-250) var(--ease-default)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "1.375rem",
      height: "1.375rem",
      borderRadius: "var(--radius-full)",
      background: "#fff",
      boxShadow: "var(--shadow-sm-subtle)",
      transition: "all var(--duration-250) var(--ease-default)"
    }
  })), children);
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
/** LifeSG Accordion — expandable disclosure section. */
function Accordion({
  title,
  children,
  defaultOpen = false,
  style = {}
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--border)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(o => !o),
    "aria-expanded": open,
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--spacing-16)",
      padding: "var(--spacing-20) 0",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      textAlign: "left",
      fontFamily: "var(--font-family)",
      fontSize: "var(--body-size-baseline)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text)"
    }
  }, title, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--icon-primary)",
      transition: "transform var(--duration-350) var(--ease-standard)",
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      fontSize: "0.8rem"
    }
  }, "\u25BC")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 0 var(--spacing-20)",
      fontFamily: "var(--font-family)",
      fontSize: "var(--body-size-md)",
      lineHeight: "var(--body-lh-md)",
      color: "var(--text-subtle)"
    }
  }, children));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/** LifeSG Breadcrumb trail. Pass an array of { label, href }. */
function Breadcrumb({
  items = [],
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("ol", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "var(--spacing-8)",
      listStyle: "none",
      margin: 0,
      padding: 0,
      fontFamily: "var(--font-family)",
      fontSize: "var(--body-size-sm)"
    }
  }, items.map((item, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--spacing-8)"
      }
    }, last ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-subtler)"
      },
      "aria-current": "page"
    }, item.label) : /*#__PURE__*/React.createElement("a", {
      href: item.href || "#",
      style: {
        color: "var(--text-primary)",
        textDecoration: "none",
        fontWeight: "var(--weight-semibold)"
      }
    }, item.label), !last && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: "var(--icon-subtle)"
      }
    }, "/"));
  })));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
/** LifeSG Pagination control. */
function Pagination({
  totalPages = 1,
  current = 1,
  onChange,
  style = {}
}) {
  const go = p => p >= 1 && p <= totalPages && onChange && onChange(p);
  const pages = [];
  const range = 1;
  for (let p = 1; p <= totalPages; p++) {
    if (p === 1 || p === totalPages || p >= current - range && p <= current + range) {
      pages.push(p);
    } else if (pages[pages.length - 1] !== "…") {
      pages.push("…");
    }
  }
  const cell = active => ({
    minWidth: "2.5rem",
    height: "2.5rem",
    padding: "0 0.5rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "var(--radius-sm)",
    border: "none",
    background: active ? "var(--bg-primary)" : "transparent",
    color: active ? "var(--text-inverse)" : "var(--text)",
    fontFamily: "var(--font-family)",
    fontSize: "var(--body-size-md)",
    fontWeight: "var(--weight-semibold)",
    cursor: "pointer"
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--spacing-4)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go(current - 1),
    disabled: current === 1,
    style: {
      ...cell(false),
      opacity: current === 1 ? 0.4 : 1,
      cursor: current === 1 ? "not-allowed" : "pointer"
    }
  }, "\u2039"), pages.map((p, i) => p === "…" ? /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      ...cell(false),
      cursor: "default",
      color: "var(--text-subtler)"
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onClick: () => go(p),
    style: cell(p === current)
  }, p)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go(current + 1),
    disabled: current === totalPages,
    style: {
      ...cell(false),
      opacity: current === totalPages ? 0.4 : 1,
      cursor: current === totalPages ? "not-allowed" : "pointer"
    }
  }, "\u203A"));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** LifeSG Tabs — underline-style tab bar. Controlled via active/onChange. */
function Tabs({
  tabs = [],
  active = 0,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--spacing-32)",
      borderBottom: "1px solid var(--border)",
      ...style
    }
  }, tabs.map((label, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      onClick: () => onChange && onChange(i),
      style: {
        position: "relative",
        border: "none",
        background: "transparent",
        padding: "var(--spacing-12) 0",
        marginBottom: "-1px",
        fontFamily: "var(--font-family)",
        fontSize: "var(--body-size-md)",
        fontWeight: "var(--weight-semibold)",
        color: on ? "var(--text-primary)" : "var(--text-subtler)",
        cursor: "pointer",
        borderBottom: `3px solid ${on ? "var(--border-selected)" : "transparent"}`,
        transition: "color var(--duration-150) var(--ease-default)"
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lifesg-app/chrome.jsx
try { (() => {
// LifeSG app — shared chrome (icons, status bar, app bar, bottom nav)
// Icons: Lucide (https://lucide.dev) substituted for the proprietary
// @lifesg/react-icons set. Recolourable via CSS mask.

function Icon({
  name,
  size = 24,
  color = "currentColor",
  style = {}
}) {
  const url = `https://unpkg.com/lucide-static@0.460.0/icons/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flexShrink: 0,
      background: color,
      WebkitMask: `url(${url}) center / contain no-repeat`,
      mask: `url(${url}) center / contain no-repeat`,
      ...style
    }
  });
}
function StatusBar({
  dark = false
}) {
  const c = dark ? "#fff" : "var(--text)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 22px 4px",
      fontFamily: "var(--font-family)",
      fontSize: 15,
      fontWeight: 600,
      color: c
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "signal",
    size: 17,
    color: c
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 17,
    color: c
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery-full",
    size: 20,
    color: c
  })));
}
function AppBar({
  title,
  onBack,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "8px 16px",
      minHeight: 52,
      background: "var(--bg)",
      borderBottom: "1px solid var(--border)"
    }
  }, onBack && /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    "aria-label": "Back",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: 4,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 24,
    color: "var(--icon-strongest)"
  })), /*#__PURE__*/React.createElement("span", {
    className: "ds-heading-xs",
    style: {
      color: "var(--text)",
      fontWeight: 600
    }
  }, title), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto"
    }
  }, action));
}
function BottomNav({
  active,
  onChange
}) {
  const items = [{
    id: "home",
    label: "Home",
    icon: "house"
  }, {
    id: "services",
    label: "Services",
    icon: "layout-grid"
  }, {
    id: "wallet",
    label: "Wallet",
    icon: "wallet"
  }, {
    id: "notices",
    label: "Inbox",
    icon: "bell"
  }, {
    id: "profile",
    label: "Me",
    icon: "user"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderTop: "1px solid var(--border)",
      background: "var(--bg)",
      paddingBottom: 18
    }
  }, items.map(it => {
    const on = active === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onChange(it.id),
      style: {
        flex: 1,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        padding: "8px 0 2px"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 24,
      color: on ? "var(--icon-primary)" : "var(--icon-subtle)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-family)",
        fontSize: 11,
        fontWeight: on ? 700 : 500,
        color: on ? "var(--text-primary)" : "var(--text-subtler)"
      }
    }, it.label));
  }));
}
Object.assign(window, {
  Icon,
  StatusBar,
  AppBar,
  BottomNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lifesg-app/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lifesg-app/screens.jsx
try { (() => {
// LifeSG app — screens. Composes design-system components from the bundle.
const DS = window.LifeSGDesignSystem_15079f;
const {
  Card,
  Tag,
  Pill,
  Alert,
  Button,
  Input,
  ProgressIndicator,
  Avatar,
  Accordion
} = DS;
const QUICK = [{
  icon: "id-card",
  label: "ID & Profile"
}, {
  icon: "heart-pulse",
  label: "Health"
}, {
  icon: "bus",
  label: "Transport"
}, {
  icon: "calendar-check",
  label: "Bookings"
}];
const SERVICES = [{
  id: "baby",
  title: "Baby Bonus Scheme",
  desc: "Cash gift and savings for your child.",
  cat: "Family",
  icon: "baby",
  color: "brand"
}, {
  id: "cdc",
  title: "CDC Vouchers 2024",
  desc: "$300 in vouchers for households.",
  cat: "Finances",
  icon: "ticket",
  color: "primary"
}, {
  id: "hdb",
  title: "HDB Resale Portal",
  desc: "Buy or sell your flat online.",
  cat: "Housing",
  icon: "building-2",
  color: "secondary"
}, {
  id: "health",
  title: "Healthier SG",
  desc: "Enrol with a family doctor.",
  cat: "Health",
  icon: "stethoscope",
  color: "brand"
}];
function HomeScreen({
  onOpenService
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--brand-50)",
      padding: "8px 20px 26px",
      borderRadius: "0 0 24px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg",
    alt: "LifeSG",
    style: {
      height: 26,
      filter: "brightness(0) invert(1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 24,
    color: "#fff"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 24,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-body-sm",
    style: {
      opacity: 0.9
    }
  }, "Good morning"), /*#__PURE__*/React.createElement("div", {
    className: "ds-heading-lg",
    style: {
      fontWeight: 700,
      marginTop: 2
    }
  }, "Wei Ming \uD83D\uDC4B"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px",
      marginTop: -16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Tan Wei Ming",
    color: "brand",
    size: 44
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-body-md",
    style: {
      fontWeight: 700,
      color: "var(--text)"
    }
  }, "Tan Wei Ming"), /*#__PURE__*/React.createElement("div", {
    className: "ds-body-xs",
    style: {
      color: "var(--text-subtler)"
    }
  }, "S\u2022\u2022\u2022\u2022567A \xB7 Verified with Singpass")), /*#__PURE__*/React.createElement(Tag, {
    type: "solid",
    color: "green",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 14,
      color: "#fff"
    })
  }, "Verified"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 8,
      padding: "20px 16px 8px"
    }
  }, QUICK.map(q => /*#__PURE__*/React.createElement("div", {
    key: q.label,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 16,
      background: "var(--bg-primary-subtler)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: q.icon,
    size: 26,
    color: "var(--icon-primary)"
  })), /*#__PURE__*/React.createElement("span", {
    className: "ds-body-xs",
    style: {
      textAlign: "center",
      color: "var(--text-subtle)",
      fontWeight: 600,
      lineHeight: 1.2
    }
  }, q.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px"
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    type: "info",
    size: "small"
  }, "Your ", /*#__PURE__*/React.createElement("b", null, "passport"), " expires in 3 months. Renew it early.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-heading-xs",
    style: {
      fontWeight: 700,
      color: "var(--text)"
    }
  }, "Recommended for you"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, "See all")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, SERVICES.slice(0, 3).map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.id,
    interactive: true,
    onClick: () => onOpenService(s),
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 12,
      flexShrink: 0,
      background: s.color === "brand" ? "var(--brand-95)" : s.color === "secondary" ? "var(--bg-secondary-subtler)" : "var(--bg-primary-subtler)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 24,
    color: s.color === "brand" ? "var(--icon-brand)" : s.color === "secondary" ? "var(--text-secondary)" : "var(--icon-primary)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-body-md",
    style: {
      fontWeight: 700,
      color: "var(--text)"
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    className: "ds-body-sm",
    style: {
      color: "var(--text-subtler)"
    }
  }, s.desc)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 22,
    color: "var(--icon-subtle)"
  }))))));
}
function ServicesScreen({
  onOpenService
}) {
  const [cat, setCat] = React.useState("All");
  const cats = ["All", "Family", "Health", "Housing", "Finances"];
  const list = cat === "All" ? SERVICES : SERVICES.filter(s => s.cat === cat);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 20,
      color: "var(--icon)"
    }),
    placeholder: "Search services"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: "0 16px 16px",
      overflowX: "auto"
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Pill, {
    key: c,
    selected: cat === c,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "0 16px"
    }
  }, list.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.id,
    interactive: true,
    onClick: () => onOpenService(s),
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 12,
      flexShrink: 0,
      background: "var(--bg-primary-subtler)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 24,
    color: "var(--icon-primary)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      marginBottom: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-body-md",
    style: {
      fontWeight: 700,
      color: "var(--text)"
    }
  }, s.title)), /*#__PURE__*/React.createElement(Tag, {
    color: "primary"
  }, s.cat)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 22,
    color: "var(--icon-subtle)"
  })))));
}
function ServiceDetailScreen({
  service
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-primary-subtler)",
      padding: "24px 20px 28px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 18,
      background: "var(--bg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "var(--shadow-sm-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: service.icon,
    size: 32,
    color: "var(--icon-primary)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ds-heading-md",
    style: {
      fontWeight: 700,
      color: "var(--text)"
    }
  }, service.title), /*#__PURE__*/React.createElement(Tag, {
    color: "green"
  }, "Open for applications")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-body-md",
    style: {
      color: "var(--text-subtle)",
      marginBottom: 20
    }
  }, service.desc, " Eligible Singapore citizens can apply online in around 10 minutes using Singpass."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-heading-xs",
    style: {
      fontWeight: 700,
      marginBottom: 16,
      color: "var(--text)"
    }
  }, "Application steps"), /*#__PURE__*/React.createElement(ProgressIndicator, {
    steps: ["Eligibility", "Details", "Submit"],
    current: 0
  })), /*#__PURE__*/React.createElement("div", {
    className: "ds-heading-xs",
    style: {
      fontWeight: 700,
      marginBottom: 4,
      color: "var(--text)"
    }
  }, "Common questions"), /*#__PURE__*/React.createElement(Accordion, {
    title: "Am I eligible?",
    defaultOpen: true
  }, "You must be a Singapore citizen with a child born on or after the scheme start date."), /*#__PURE__*/React.createElement(Accordion, {
    title: "What will I need?"
  }, "Your Singpass, the child's birth certificate, and a bank account for disbursement."), /*#__PURE__*/React.createElement(Accordion, {
    title: "How long does it take?"
  }, "Most applications are reviewed within 3 working days.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: "12px 16px 28px",
      background: "var(--bg)",
      borderTop: "1px solid var(--border)",
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    styleType: "secondary",
    style: {
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bookmark",
    size: 20,
    color: "var(--icon-primary)"
  })), /*#__PURE__*/React.createElement(Button, {
    style: {
      flex: 1
    }
  }, "Start application")));
}
function InboxScreen() {
  const items = [{
    icon: "circle-check",
    color: "var(--icon-success)",
    title: "Baby Bonus approved",
    time: "2h ago",
    body: "Your application BB-22910 has been approved.",
    unread: true
  }, {
    icon: "credit-card",
    color: "var(--icon-primary)",
    title: "CDC Vouchers ready",
    time: "Yesterday",
    body: "$300 in vouchers are now available to claim."
  }, {
    icon: "triangle-alert",
    color: "var(--icon-warning)",
    title: "Passport expiring",
    time: "3 days ago",
    body: "Your passport expires on 12 Sep 2024."
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 14,
      padding: "16px",
      borderBottom: "1px solid var(--border)",
      background: it.unread ? "var(--bg-primary-subtlest)" : "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 26,
    color: it.color
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-body-md",
    style: {
      fontWeight: 700,
      color: "var(--text)"
    }
  }, it.title), /*#__PURE__*/React.createElement("span", {
    className: "ds-body-xs",
    style: {
      color: "var(--text-subtler)",
      whiteSpace: "nowrap"
    }
  }, it.time)), /*#__PURE__*/React.createElement("div", {
    className: "ds-body-sm",
    style: {
      color: "var(--text-subtle)",
      marginTop: 2
    }
  }, it.body)), it.unread && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--bg-error-strong)",
      marginTop: 6
    }
  })))));
}
function SimpleScreen({
  icon,
  title,
  text
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: 460,
      gap: 12,
      padding: 32,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 48,
    color: "var(--icon-subtle)"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ds-heading-sm",
    style: {
      fontWeight: 700,
      color: "var(--text)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "ds-body-md",
    style: {
      color: "var(--text-subtler)"
    }
  }, text));
}
Object.assign(window, {
  HomeScreen,
  ServicesScreen,
  ServiceDetailScreen,
  InboxScreen,
  SimpleScreen,
  SERVICES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lifesg-app/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.NotificationBanner = __ds_scope.NotificationBanner;

__ds_ns.ProgressIndicator = __ds_scope.ProgressIndicator;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioButton = __ds_scope.RadioButton;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
