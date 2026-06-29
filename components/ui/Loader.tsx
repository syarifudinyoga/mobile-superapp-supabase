import { ActivityIndicator } from "react-native"

import { colors } from "@/theme/colors"

export function Loader() {
  return (
    <ActivityIndicator
      size="large"
      color={colors.primary}
    />
  )
}