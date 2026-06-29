import { ActivityIndicator, Pressable } from "react-native";

import { colors, radius, spacing } from "@/theme";
import { Text } from "./Text";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
};

export function Button({
  title,
  onPress,
  loading = false,
  disabled = false,
}: ButtonProps) {
  const isDisabled = loading || disabled;

  return (
    <Pressable
      disabled={isDisabled}
      onPress={onPress}
      style={{
        backgroundColor: isDisabled
          ? "#CBD5E1"
          : colors.primary,

        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,

        borderRadius: radius.md,

        alignItems: "center",
        justifyContent: "center",

        opacity: isDisabled ? 0.7 : 1,
      }}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text
          style={{
            color: colors.white,
            fontWeight: "600",
          }}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}