import { PureComponent } from 'react'
import PropTypes from 'prop-types'

import defaultTheme from './styles/default-theme'

class Theme extends PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired,
    source: PropTypes.object
  }

  static childContextTypes = {
    theme: PropTypes.object.isRequired
  }

  getChildContext() {
    return {
      theme: Object.assign(defaultTheme, this.props.source)
    }
  }

  render() {
    return this.props.children
  }
}

export default Theme
