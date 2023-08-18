import {View, Text, StyleProp, ViewStyle, TextStyle} from 'react-native';
import React from 'react';

interface Props {
  color?: string;
  background?: string;
  width?:number;
  height?:number;
  textSize?:number;
  DynamixText?:string;
}

const DynamicText = (props: Props) => {
    const containerStyle: StyleProp<ViewStyle> = {
        width: props?.width,
        backgroundColor:props?.background,
        height:props?.height
      } as any;
      const textStyle: StyleProp<TextStyle> = {
        color:props?.color,
        fontSize:props?.textSize
      } as any;
  return (
    <View
      style={containerStyle}>
      <Text style={textStyle}>
        {props?.DynamixText}
      </Text>
    </View>
  );
};

export default DynamicText;