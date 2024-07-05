import React, { useState } from 'react';

import { TextInput } from 'react-native-paper';

import eye from '../../assets/icons/eye.png';
import { theme } from '../../themes';
import { styles } from './styles';

type Props = {
  value?: string;
  placeholder: string;
  secureTextEntry?: boolean | undefined;
  keyboardType:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  returnKeyType: 'done' | 'go' | 'next' | 'search' | 'send';
  variant?: 'filled' | 'outlined' | 'standard';
  mode: 'flat' | 'outlined' | undefined;
  maxLength?: number;
  inputRef?: any;
  label?: string;
  onSubmitEditing?: () => void;
  onChangeText: (text: string) => void;
  error?: boolean | undefined;
  color?: string;
  disabled?: boolean | undefined;
  mask?: string;
};

export function InputNumber({
  placeholder,
  secureTextEntry,
  keyboardType,
  maxLength,
  autoCapitalize,
  returnKeyType,
  inputRef,
  label,
  value,
  mode,
  onSubmitEditing,
  onChangeText,
  color,
  error,
}: Props) {
  const [show, setShow] = useState(false);
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      ref={inputRef}
      onChangeText={onChangeText}
      style={styles(color ?? '#edf0f0').TextInput}
      label={label}
      placeholderTextColor={theme.colors.onsurfacevariant}
      textColor={theme.colors.black}
      outlineColor={theme.colors.outline}
      activeOutlineColor={theme.colors.primary}
      selectionColor={theme.colors.primary}
      underlineColor={theme.colors.primary}
      activeUnderlineColor={theme.colors.onsurfacevariant}
      mode={mode}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
      secureTextEntry={secureTextEntry && !show}
      onSubmitEditing={onSubmitEditing}
      maxLength={maxLength}
      error={error}
      right={
        <TextInput.Icon
          icon={eye}
          onPress={() => setShow((old) => !old)}
          style={styles('#000').icon}
        />
      }
    />
  );
}
