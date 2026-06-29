import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Divider } from "@/components/ui/Divider";
import { EmptyState } from "@/components/ui/EmptyState";
import { Loader } from "@/components/ui/Loader";
import { Screen } from "@/components/ui/Screen";
import { Text } from "@/components/ui/Text";

import { apiClient } from "@/services/api";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("========== API ==========");
    console.log(apiClient.defaults.baseURL);
    console.log("=========================");
  }, []);

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={{
          padding: 20,
          gap: 20,
        }}
      >
        {/* Header */}

        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "700",
            }}
          >
            🚀 Mobile SuperApp
          </Text>

          <Text
            style={{
              marginTop: 6,
            }}
          >
            Enterprise Starter Kit
          </Text>

          <Text
            style={{
              marginTop: 4,
              opacity: 0.7,
            }}
          >
            Chapter 5 - Networking Layer
          </Text>
        </View>

        <Divider />

        {/* Networking */}

        <Card>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            Networking
          </Text>

          <View style={{ height: 10 }} />

          <Text>
            Axios Client berhasil dibuat.
          </Text>

          <Text>
            Base URL :
          </Text>

          <Text
            style={{
              fontWeight: "700",
            }}
          >
            {apiClient.defaults.baseURL || "Belum diset"}
          </Text>
        </Card>

        <Divider />

        {/* Button */}

        <View style={{ gap: 12 }}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 18,
            }}
          >
            Button
          </Text>

          <Button
            title="Primary Button"
            onPress={() => {}}
          />

          <Button
            title="Loading Button"
            loading
          />

          <Button
            title="Disabled Button"
            disabled
          />

          <Button
            title="Toggle Loader"
            onPress={() =>
              setLoading(!loading)
            }
          />
        </View>

        <Divider />

        {/* Loader */}

        <Card>
          <Text
            style={{
              fontWeight: "700",
            }}
          >
            Loader
          </Text>

          <View
            style={{
              marginTop: 16,
              alignItems: "center",
            }}
          >
            {loading ? (
              <Loader />
            ) : (
              <Text>
                Loader tidak aktif
              </Text>
            )}
          </View>
        </Card>

        <Divider />

        {/* Card */}

        <Card>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Card Component
          </Text>

          <View style={{ height: 10 }} />

          <Text>
            Ini adalah reusable Card.
          </Text>

          <View style={{ height: 20 }} />

          <Button
            title="Detail"
            onPress={() => {}}
          />
        </Card>

        <Divider />

        {/* Typography */}

        <View style={{ gap: 8 }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "700",
            }}
          >
            Heading
          </Text>

          <Text
            style={{
              fontSize: 22,
              fontWeight: "600",
            }}
          >
            Subtitle
          </Text>

          <Text>
            Ini adalah Body Text.
          </Text>
        </View>

        <Divider />

        {/* Empty State */}

        <Card>
          <Text
            style={{
              fontWeight: "700",
              marginBottom: 20,
            }}
          >
            Empty State
          </Text>

          <EmptyState />
        </Card>

        <Divider />

        {/* Progress */}

        <Card>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            Progress
          </Text>

          <View style={{ height: 12 }} />

          <Text>✅ Chapter 1 - Bootstrap</Text>

          <Text>✅ Chapter 2 - Configuration</Text>

          <Text>✅ Chapter 3 - Core</Text>

          <Text>✅ Chapter 4 - UI Foundation</Text>

          <Text>✅ Chapter 5 - Networking</Text>
        </Card>

        <Divider />

        <Text
          style={{
            textAlign: "center",
            opacity: 0.6,
          }}
        >
          Version 0.0.1
        </Text>
      </ScrollView>
    </Screen>
  );
}