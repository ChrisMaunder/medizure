'use strict'

import _ from 'lodash'

import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import * as appActions from 'src/actions/app'
import Main from 'src/components/Main'

const mapStateToProps = (state, ownProps) => {
  return _.pick(state.app_state, ['app_startup_complete', 'bg_color'])
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(appActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
