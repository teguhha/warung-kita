import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Beranda() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Selamat Datang di Warung Kita</Text>
      <Text style={s.sub}>Pesan makanan favoritmu dengan mudah.</Text>
      <Link href="/katalog" style={s.link}>
        Lihat Katalog →
      </Link>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center" },
  sub: { marginTop: 8, color: "#666" },
  link: { marginTop: 20, color: "#2e7d32", fontSize: 16, fontWeight: "600" },
});
