import { extendTheme, HTMLChakraProps, ThemingProps } from "@chakra-ui/react";

import { globalStyles } from "@/theme/styles";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

export default extendTheme(globalStyles, {
  components: {
    Button: {
      baseStyle: {
        borderRadius: "16px",
        boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
        transition: ".25s all ease",
        boxSizing: "border-box",
        _focus: {
          boxShadow: "none",
        },
        _active: {
          boxShadow: "none",
        },
        color: mode("brand.500", "brand.100"),
      },
      variants: {
        blur: (props: StyleFunctionProps) => ({
          bg: "rgba(66, 42, 251, 0.2)",
          color: mode("brand.500", "brand.100")(props),
          borderRadius: "md",
          backdropFilter: "blur(5px)",
          _hover: {
            bg: "rgba(66, 42, 251, 0.6)",
          },
        }),
      },
    },
    Link: {
      variants: {
        blur: (props: StyleFunctionProps) => ({
          boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
          transition: ".25s all ease",
          padding: "10px",
          boxSizing: "border-box",
          _focus: {
            boxShadow: "none",
          },
          _active: {
            boxShadow: "none",
          },
          bg: "rgba(66, 42, 251, 0.2)",
          color: mode("brand.500", "brand.100")(props),
          backdropFilter: "blur(5px)",
          borderRadius: "md",
          _hover: {
            textDecoration: "none",
            bg: "rgba(66, 42, 251, 0.6)",
          },
        }),
      },
    },
  },
});
