import { PropsWithChildren } from "react"

import { SafeAreaView } from "react-native-safe-area-context"

import { colors } from "@/theme/colors"

export function Screen({
  children,
}: PropsWithChildren) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      {children}
    </SafeAreaView>
  )
}