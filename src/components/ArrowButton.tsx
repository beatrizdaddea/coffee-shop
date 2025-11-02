// src/components/ArrowButton.tsx
import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ArrowButtonProps {
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  size?: number;
  color?: string;
  backgroundColor?: string;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  onPress,
  disabled = false,
  style,
  size = 24,
  color = '#fff',
  backgroundColor = '#C67C4E',
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.nextButton,
        { backgroundColor },
        disabled && styles.disabledButton,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Ionicons name="arrow-forward" size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  nextButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  disabledButton: {
    opacity: 0.5,
  },
});