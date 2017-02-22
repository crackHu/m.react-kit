import React, {Component, PropTypes} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import Setting from 'material-ui/svg-icons/action/settings';
import Add from 'material-ui/svg-icons/av/library-add';
import Done from 'material-ui/svg-icons/action/done';

const settingIcon = <Setting />;
const addIcon = <Add />;
const doneIcon = <Done />;

const WidgetWindow = (props) => {
  return (
    <div>
      {renderChildren(props)}
    </div>
  )
}

const renderChildren = (props) => {
  let {selectedIndex} = props
  return React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      open: selectedIndex === 1 ? true : false
    })
  })
}

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {

  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: 'empty!!!'
  };

  state = {
    selectedIndex: null
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      selectedIndex: null
    })
  }

  select = (index) => {
    this.setState({
      selectedIndex: index
    })
  };
  height = document.body.clientHeight - 56

  render() {
    return (
      <div>
        <div style={{height: this.height}}>
          <WidgetWindow selectedIndex={this.state.selectedIndex}>
            {this.props.children}
          </WidgetWindow>
        </div>
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="设置"
              icon={settingIcon}
              onTouchTap={() => this.select(0)}
            />
            <BottomNavigationItem
              label="添加组件"
              icon={addIcon}
              onTouchTap={() => this.select(1)}
            />
            <BottomNavigationItem
              label="生成"
              icon={doneIcon}
              onTouchTap={() => this.select(2)}
            />
          </BottomNavigation>
        </Paper>
      </div>
    );
  }
}

export default BottomNavigationExampleSimple;