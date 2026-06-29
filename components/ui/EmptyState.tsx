import { View } from "react-native"

import { Text } from "./Text"

export function EmptyState() {
  return (
    <View
      style={{
        flex: 1,

        justifyContent: "center",

        alignItems: "center",
      }}
    >
      <Text>No Data</Text>
    </View>
  )
}