import { PropsWithChildren } from "react"

import { View } from "react-native"

import { colors } from "@/theme/colors"

export function Card({
  children,
}: PropsWithChildren) {
  return (
    <View
      style={{
        backgroundColor: colors.white,

        borderRadius: 16,

        padding: 16,

        borderWidth: 1,

        borderColor: colors.border,
      }}
    >
      {children}
    </View>
  )
}