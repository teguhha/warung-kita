import { View, Text, Button, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { FOODS } from "../../data/foods";
import { useCart } from "../../context/CartContext";

export default function DetailMakanan() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { add } = useCart();
  const food = FOODS.find((f) => f.id === id);

  if (!food)
    return <Text style={{ padding: 20 }}>Makanan tidak ditemukan.</Text>;

  return (
    <View style={s.container}>
      <Text style={s.nama}>{food.nama}</Text>
      <Text style={s.harga}>Rp {food.harga.toLocaleString("id-ID")}</Text>
      <Text style={s.desk}>{food.deskripsi}</Text>

      <View style={s.btn}>
        <Button
          title="Pesan Sekarang"
          color="#2e7d32"
          onPress={() => {
            add(food);
            router.push("/checkout");
          }}
        />
      </View>
      <View style={s.btn}>
        <Button title="Kembali" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  nama: { fontSize: 26, fontWeight: "bold" },
  harga: { fontSize: 18, color: "#2e7d32", marginVertical: 8 },
  desk: { fontSize: 15, color: "#444", marginBottom: 24 },
  btn: { marginBottom: 10 },
});
