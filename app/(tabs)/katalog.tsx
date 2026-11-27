import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { FOODS } from '../../data/foods';

export default function Katalog() {
  return (
    <FlatList
      data={FOODS}
      keyExtractor={(i) => i.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={s.card}
          onPress={() => router.push({ pathname: '/detail/[id]', params: { id: item.id } })}
        >
          <Text style={s.nama}>{item.nama}</Text>
          <Text>Rp {item.harga.toLocaleString('id-ID')}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const s = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 10, marginBottom: 12, elevation: 2 },
  nama: { fontSize: 18, fontWeight: '600', marginBottom: 4 },
});
