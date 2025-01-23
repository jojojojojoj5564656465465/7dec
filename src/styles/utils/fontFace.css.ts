import { fontFace } from "@vanilla-extract/css";

const dancingScript = fontFace({
  src: 'url(@fonts/dancing/dancing.woff2) format("woff2")',
  fontWeight: "normal",
  fontStyle: "normal",
  fontDisplay: "swap",
});

const nunito = fontFace([
  {
    src: "url(@fonts/numito/Nunito-Black.woff2) format('woff2')",
    fontWeight: "900",
    fontDisplay: "swap",
    fontStyle: "normal",
  },
  {
    src: "url(@fonts/numito/Nunito-BlackItalic.woff2) format('woff2')",
    fontWeight: "900",
    fontStyle: "italic",
    fontDisplay: "swap",
  },
  {
    src: "url(@fonts/numito/Nunito-Bold.woff2) format('woff2')",
    fontWeight: "700",
    fontDisplay: "swap",
    fontStyle: "normal",
  },
  {
    src: "url(@fonts/numito/Nunito-BoldItalic.woff2) format('woff2')",
    fontWeight: "700",
    fontStyle: "italic",
    fontDisplay: "swap",
    fontStretch: "ultra-expanded",
  },
  {
    src: "url(@fonts/numito/Nunito-ExtraBold.woff2) format('woff2')",
    fontWeight: "800",
    fontDisplay: "swap",
    fontStyle: "normal",
  },
  {
    src: "url(@fonts/numito/Nunito-ExtraBoldItalic.woff2) format('woff2')",
    fontWeight: "800",
    fontStyle: "italic",
    fontDisplay: "swap",
  },
  {
    src: "url(@fonts/numito/Nunito-ExtraLight.woff2) format('woff2')",
    fontWeight: "100 200",
    fontDisplay: "swap",
    fontStyle: "normal",
  },
  {
    src: "url(@fonts/numito/Nunito-ExtraLightItalic.woff2) format('woff2')",
    fontWeight: "100 200",
    fontStyle: "italic",
    fontDisplay: "swap",
  },
  {
    src: "url(@fonts/numito/Nunito-Italic.woff2) format('woff2')",
    fontWeight: "normal",
    fontStyle: "italic",
    fontDisplay: "swap",
  },
  {
    src: "url(@fonts/numito/Nunito-Light.woff2) format('woff2')",
    fontWeight: "300",
    fontDisplay: "swap",
    fontStyle: "normal",
  },
  {
    src: "url(@fonts/numito/Nunito-LightItalic.woff2) format('woff2')",
    fontWeight: "300",
    fontStyle: "italic",
    fontDisplay: "swap",
  },
  {
    src: "url(@fonts/numito/Nunito-Regular.woff2) format('woff2')",
    fontWeight: "normal",
    fontDisplay: "swap",
    fontStyle: "normal",
  },
  {
    src: "url(@fonts/numito/Nunito-SemiBold.woff2) format('woff2')",
    fontWeight: "600",
    fontStyle: "normal",
    fontDisplay: "swap",
  },
  {
    src: "url(@fonts/numito/Nunito-SemiBoldItalic.woff2) format('woff2')",
    fontWeight: "600",
    fontStyle: "italic",
    fontDisplay: "swap",
  },
]);


const exo = fontFace([
  {
    src: "url(@fonts/exo/Exo-Thin.woff2) format(woff2)",
    fontDisplay: "swap",
    fontWeight: "300",
  },
  {
    src: "url(@fonts/exo/Exo-ExtraLight.woff2) format(woff2)",
    fontDisplay: "swap",
    fontWeight: "200",
  },
  {
    src: "url(@fonts/exo/Exo-Light.woff2) format(woff2)",
    fontDisplay: "swap",
    fontWeight: "300",
  },
  {
    src: "url(@fonts/exo/Exo-Regular.woff2) format(woff2)",
    fontDisplay: "swap",
    fontWeight: "normal",
  },
  {
    src: "url(@fonts/exo/Exo-Medium.woff2) format(woff2)",
    fontDisplay: "swap",
    fontWeight: "500",
  },
  {
    src: "url(@fonts/exo/Exo-SemiBold.woff2) format(woff2)",
    fontDisplay: "swap",
    fontWeight: "600",
  },
  {
    fontDisplay: "swap",
    src: "url(@fonts/exo/Exo-Bold.woff2) format(woff2)",
    fontWeight: "bold",
  },
  {
    src: "url(@fonts/exo/Exo-ExtraBold.woff2) format(woff2)",
    fontDisplay: "swap",
    fontWeight: "800",
  },
  {
    src: "url(@fonts/exo/Exo-ThinItalic.woff2) format(woff2)",
    fontDisplay: "swap",
    fontWeight: "100 300",
    fontStyle: "italic",
  },
  {
    src: "@fonts/exo/Exo-ExtraLightItalic.woff2) format(woff2)",
    fontDisplay: "swap",
    fontWeight: "200",
    fontStyle: "italic",
  },
  {
    src: "url(@fonts/exo/Exo-LightItalic.woff2) format(woff2)",
    fontDisplay: "swap",
    fontWeight: "300",
    fontStyle: "italic",
  },
  {
    src: "url(@fonts/exo/Exo-Italic.woff2) format(woff2)",
    fontWeight: "normal",
    fontStyle: "italic",
    fontDisplay: "swap",
  },
  {
    src: "url(@fonts/exo/Exo-MediumItalic.woff2) format(woff2)",
    fontWeight: "500",
    fontDisplay: "swap",
    fontStyle: "italic",
  },
  {
    src: "url(@fonts/exo/Exo-SemiBoldItalic.woff2) format(woff2)",
    fontWeight: "600",
    fontDisplay: "swap",
    fontStyle: "italic",
  },
  {
    src: "@fonts/exo/Exo-BoldItalic.woff2) format(woff2)",
    fontWeight: "bold",
    fontStyle: "italic",
    fontDisplay: "swap",
  },
  {
    src: "url(@fonts/exo/Exo-ExtraBoldItalic.woff2) format(woff2)",
    fontWeight: "800",
    fontStyle: "italic",
    fontDisplay: "swap",
  },
]);

export default {
  exo,
  nunito,
  dancingScript,
};
