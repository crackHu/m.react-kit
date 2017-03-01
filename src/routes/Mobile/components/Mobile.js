import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import BottomNavigation from 'components/BottomNavigation'

import Sortable from 'sortablejs'

import Avatar from 'material-ui/Avatar';
import MobileTearSheet from 'components/MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

import IconInput from 'material-ui/svg-icons/action/code';
import IconRadio from 'material-ui/svg-icons/toggle/radio-button-checked';
import IconCheckbox from 'material-ui/svg-icons/toggle/check-box';
import IconSelect from 'material-ui/svg-icons/editor/format-list-numbered';
import IconRate from 'material-ui/svg-icons/toggle/star-half';
import IconText from 'material-ui/svg-icons/editor/short-text';
import IconImage from 'material-ui/svg-icons/image/photo-library';
import IconDate from 'material-ui/svg-icons/device/access-time';
import IconName from 'material-ui/svg-icons/action/account-circle';
import IconTel from 'material-ui/svg-icons/hardware/smartphone';
import {blue500, yellow600} from 'material-ui/styles/colors';

class DrawerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false, formItems: []};
  }

  componentDidMount = () => {
    // var el = document.getElementById('test');
    // var sortable = Sortable.create(el);
    // console.log('sortable', sortable)
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('DrawerComponent', nextProps)
    let {open} = nextProps
    if (open && open !== this.state.open) {
      this.setState({
          open: true
      });
    }
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleAddItem = (event) => {
    // This prevents ghost click.
    const { type } = event.currentTarget.dataset
    const items = this.state.formItems.concat()
    items.push(type)
    this.setState({
      open: false,
      formItems: items
    });
  };

  Widgets = () => (
    <div>
      <MobileTearSheet>
        <List id='test'>
          <ListItem data-type='input' target='input' onTouchTap={this.handleAddItem} primaryText="输入框" leftIcon={<IconInput />} />
          <ListItem data-type='radio' onTouchTap={this.handleAddItem} primaryText="单选" leftIcon={<IconRadio />} />
          <ListItem data-type='checkbox' onTouchTap={this.handleAddItem} primaryText="多选" leftIcon={<IconCheckbox />} />
          <ListItem data-type='select' onTouchTap={this.handleAddItem} primaryText="下拉框" leftIcon={<IconSelect />} />
          <ListItem data-type='rate' onTouchTap={this.handleAddItem} primaryText="评分" leftIcon={<IconRate />} />
        </List>
        <Divider />
        <List>
          <ListItem data-type='text' onTouchTap={this.handleAddItem} primaryText="文本" leftIcon={<IconText />} />
          <ListItem data-type='image' onTouchTap={this.handleAddItem} primaryText="图片" leftIcon={<IconImage />} />
          <ListItem data-type='date' onTouchTap={this.handleAddItem} primaryText="日期" leftIcon={<IconDate />} />
          <ListItem data-type='name' onTouchTap={this.handleAddItem} primaryText="姓名" leftIcon={<IconName />} />
          <ListItem data-type='tel' onTouchTap={this.handleAddItem} primaryText="联系电话" leftIcon={<IconTel />} />
        </List>
      </MobileTearSheet>
    </div>
);

  render() {
    return (
      <BottomNavigation formItems={this.state.formItems}>
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <this.Widgets />
        </Drawer>
      </BottomNavigation>
    );
  }
}

export default DrawerComponent
