import {
  Text as RNText,
  TextProps,
} from "react-native"

import { colors } from "@/theme/colors"

export function Text({
  style,
  ...props
}: TextProps) {
  return (
    <RNText
      style={[
        {
          color: colors.text,
          fontSize: 16,
        },
        style,
      ]}
      {...props}
    />
  )
}