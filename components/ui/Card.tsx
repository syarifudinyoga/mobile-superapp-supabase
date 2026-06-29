import { View } from "react-native"

import { colors, radius, spacing } from "@/theme"

export function Card({
  children,
}: React.PropsWithChildren) {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        borderRadius: radius.lg,
        padding: spacing.md,
        borderWidth: 1,
        borderColor: colors.border,
      }}
    >
      {children}
    </View>
  )
}