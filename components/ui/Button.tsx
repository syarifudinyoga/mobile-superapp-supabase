import {
    ActivityIndicator,
    Pressable,
} from "react-native"

import { Text } from "./Text"

import { colors } from "@/theme/colors"

type Props = {
  title: string

  loading?: boolean

  disabled?: boolean

  onPress?: () => void
}

export function Button({
  title,
  loading,
  disabled,
  onPress,
}: Props) {
  return (
    <Pressable
      disabled={disabled || loading}
      onPress={onPress}
      style={{
        backgroundColor: disabled
          ? "#CBD5E1"
          : colors.primary,

        paddingVertical: 14,

        borderRadius: 12,

        justifyContent: "center",

        alignItems: "center",
      }}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text
          style={{
            color: "#fff",

            fontWeight: "600",
          }}
        >
          {title}
        </Text>
      )}
    </Pressable>
  )
}