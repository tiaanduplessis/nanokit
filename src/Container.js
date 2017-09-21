import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'

const Container = ({ style, children, padding, backgroundColor, center, ...otherProps }) => {
  const containerStyles = { padding, backgroundColor }

  if (center) {
    containerStyles.alignItems = 'center'
    containerStyles.justifyContent = 'center'
  }

  return (
    <View style={[styles.container, containerStyles]} {...otherProps}>
      {children}
    </View>
  )
}

Container.propTypes = {
  padding: PropTypes.number,
  backgroundColor: PropTypes.string,
  center: PropTypes.bool
}

Container.defaultProps = {
  padding: 0,
  backgroundColor: '#fff'
}

const styles = StyleSheet.create({
  container: { flex: 1 }
})

export default Container
