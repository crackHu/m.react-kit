import React, {Component, PropTypes} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

import IconSetting from 'material-ui/svg-icons/action/settings';
import IconAdd from 'material-ui/svg-icons/action/dashboard';
import IconDone from 'material-ui/svg-icons/action/done';

import Sortable from 'sortablejs'

const settingIcon = <IconSetting />;
const addIcon = <IconAdd />;
const doneIcon = <IconDone />;

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

  componentDidMount = () => {
    var el = document.getElementById('test');
    var sortable = Sortable.create(el);
    console.log('sortable', sortable)
  }

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
  content = (
    <List id="test">
      <TextField
        defaultValue="Default Value"
        floatingLabelText="Floating Label Text"
      />
      <SelectField
        floatingLabelText="Frequency"
        value={"Never"}
      >
        <MenuItem value={1} primaryText="Never" />
        <MenuItem value={2} primaryText="Every Night" />
        <MenuItem value={3} primaryText="Weeknights" />
        <MenuItem value={4} primaryText="Weekends" />
        <MenuItem value={5} primaryText="Weekly" />
      </SelectField>
      <DatePicker hintText="Portrait Dialog" />
    </List>
  )

  render() {
    return (
      <div>
        <div style={{height: this.height}}>
          <WidgetWindow selectedIndex={this.state.selectedIndex}>
            {this.props.children}
          </WidgetWindow>
          {this.content}
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