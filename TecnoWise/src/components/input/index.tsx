import React from 'react';

import { TextInput } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

import { theme } from '../../themes';
import { styles } from './styles';

type Props = {
  value?: string;
  placeholder?: string;
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
  disabled?: boolean | undefined;
  color?: string;
  hasIcon?: boolean;
  icon?: IconSource;
  clear?: () => void;
};

export function Input({
  placeholder,
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
  error,
  disabled,
  color,
  hasIcon,
  icon,
  clear,
}: Props) {
  return (
    <TextInput
      disabled={disabled}
      style={styles(color ?? '#edf0f0').TextInput}
      value={value}
      label={label}
      ref={inputRef}
      placeholder={placeholder}
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
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      maxLength={maxLength}
      error={error}
      right={
        hasIcon &&
        (value ? (
          <TextInput.Icon
            icon={icon}
            onPress={() => clear}
            style={styles('#000').icon}
          />
        ) : (
          ''
        ))
      }
    />
  );
}
