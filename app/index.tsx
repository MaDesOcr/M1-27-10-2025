import { Link, useRouter } from "expo-router";
import { Text, View, Button, StyleSheet } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={style.viewStyle}>

      <Button onPress={()=>router.push("/page1")} 
      title="Page 1"/>
      <Button onPress={()=>router.push("/tab1")} 
      title="Page 2"/>

     {/* <Link href="/page1">PAGE1</Link>
      <Link href="/tab1">PAGE2</Link>*/}

    </View>
  );
}

  const style = StyleSheet.create({
    viewStyle:{flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      gap:"10%",
      flexBasis: "auto" //gap:10 =>px
    }

})