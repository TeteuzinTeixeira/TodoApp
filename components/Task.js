import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CheckBox } from 'react-native-elements';

import styles from "./TaskStyle";

const Task = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    return (

        <View style={styles.item}>

            <View style={styles.itemLeft}>

                <CheckBox
                    checked={isChecked}
                    onPress={() => setIsChecked(!isChecked)}
                    containerStyle={styles.checkboxContainer}
                    titleProps={{ style: styles.checkboxText }}
                    checkedColor="#7A58F9"
                />
                <Text style={styles.itemText}>{props.text}</Text>

            </View>

            <View style={styles.circular}>

            </View>

        </View>

    )

}

export default Task;