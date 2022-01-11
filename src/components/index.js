import { View, TouchableHighlight, Text, StyleSheet } from "react-native"

export function Login() {


     return (
          <View>
               <TouchableHighlight style={styles.container}>
                    <View>
                         <Text style={styles.txt}>OLA</Text>
                    </View>
               </TouchableHighlight>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          backgroundColor: "orange",
          padding: 10,
          borderRadius: 10
     },
     txt: {
          color: "#fff"
     }
})