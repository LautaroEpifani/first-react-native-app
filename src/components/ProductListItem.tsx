import Colors from "@/src/constants/Colors";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Product } from "@/src/types/types";
import { Link, usePathname,  } from "expo-router";
import { useSegments } from "expo-router";

interface Props {
  product: Product;
}

const ProductListItem = ({ product }: Props) => {

  const segments = useSegments();
  const path = usePathname();

  console.log(segments[0])

    return (
      <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image source={{ uri: product.image || "defaultImage" }} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
      </Link>
    );
  };
 
  export default ProductListItem;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 20,
      maxWidth: '50%',
    },
    image: {
      width: "100%",
      aspectRatio: 1,
    },
    title: {
      fontSize: 18,
      fontWeight: "600",
      marginVertical: 10,
    },
    price: {
      color: Colors.light.tint,
      fontWeight: "bold",
    },
  });
  