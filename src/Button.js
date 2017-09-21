import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TouchableNativeFeedback,
  Platform
} from 'react-native'
import PropTypes from 'prop-types'
import get from 'get-nested-prop'

const isAndroid = Platform.OS === 'android'

const Button = (
  { disabled, style, textStyle, disabledStyle, disabledTextStyle, text, background, ...otherProps },
  { theme = {} }
) => {
  const themeStyles = StyleSheet.create({
    button: {
      height: get(theme, 'spacing.buttonHeight', 56)
    },
    text: {
      color: get(theme, 'palette.primaryTextColor', '#212121'),
      fontFamily: get(theme, 'typography.fontFamily', 'System'),
      fontSize: get(theme, 'typography.baseSize', 18)
    }
  })

  if (disabled) {
    return (
      <View
        style={[
          { backgroundColor: background },
          themeStyles.button,
          styles.button,
          style,
          disabledStyle
        ]}
      >
        <Text style={[styles.text, themeStyles.text, textStyle, disabledTextStyle]}>{text}</Text>
      </View>
    )
  }

  if (isAndroid) {
    background = background || TouchableNativeFeedback.SelectableBackground()

    return (
      <TouchableNativeFeedback background={background} {...otherProps}>
        <View style={[styles.button, themeStyles.button, style, disabledStyle]}>
          <Text style={[styles.text, , themeStyles.text, textStyle, disabledTextStyle]}>
            {text}
          </Text>
        </View>
      </TouchableNativeFeedback>
    )
  }

  return (
    <TouchableOpacity
      style={[{ backgroundColor: background }, styles.button, themeStyles.button, style]}
      {...otherProps}
    >
      <Text style={[styles.text, themeStyles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  onPress: PropTypes.func,
  disable: PropTypes.bool,
  textStyle: Text.propTypes.style,
  disabledTextStyle: Text.propTypes.style,
  disabledStyle: Text.propTypes.style,
  activeOpacity: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element]),
  accessibilityLabel: PropTypes.string,
  activeOpacity: PropTypes.number,
  allowFontScaling: PropTypes.bool,
  delayLongPress: PropTypes.number,
  delayPressIn: PropTypes.number,
  delayPressOut: PropTypes.number,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func
}

Button.defaultProps = {
  activeOpacity: 0.2
}

Button.contextTypes = {
  theme: PropTypes.object
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    justifyContent: 'center'
  },
  text: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: 'transparent'
  }
})

export default Button
