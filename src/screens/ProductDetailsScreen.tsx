import { FlatList, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import products from '../data/products';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('ProductDetails', { product: item })}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  item: { width: '50%', padding: 5 },
  image: { width: '100%', aspectRatio: 1, borderRadius: 10 },
  name: { fontWeight: 'bold', textAlign: 'center' },
  price: { textAlign: 'center', color: 'green' },
});