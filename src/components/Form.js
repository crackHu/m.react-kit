import React, {Component, PropTypes} from 'react';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';

class Form extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  static defaultProps = {
    items: []
  };
  state = {
    open: false,
  };

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {

    const Widget = {
      input: <TextField
                hintText="Hint Text"
                floatingLabelText="Fixed Floating Label Text"
                floatingLabelFixed={true}
                disabled={true}
                onTouchTap={this.handleTouchTap}
              />,

      radio: <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
              <RadioButton
                value="light"
                label="Simple"
                style={{marginBottom: 16}}
              />
              <RadioButton
                value="light"
                label="Simple"
                style={{marginBottom: 16}}
              />
              <RadioButton
                value="light"
                label="Simple"
                style={{marginBottom: 16}}
              />
              </RadioButtonGroup>,

      checkbox: <div>
                  <Checkbox
                    label="Simple"
                    style={{marginBottom: 16}}
                  /><Checkbox
                    label="Simple"
                    style={{marginBottom: 16}}
                  /><Checkbox
                    label="Simple"
                    style={{marginBottom: 16}}
                  />
                </div>,

      select: <SelectField
                floatingLabelText="Frequency"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <MenuItem value={1} primaryText="Never" />
                <MenuItem value={2} primaryText="Every Night" />
                <MenuItem value={3} primaryText="Weeknights" />
                <MenuItem value={4} primaryText="Weekends" />
                <MenuItem value={5} primaryText="Weekly" />
              </SelectField>,

      text: <p>text</p>,

      date: <DatePicker hintText="Portrait Dialog" />,

      name: <TextField
                hintText="Hint Text"
                floatingLabelText="Fixed Floating Label Text"
                floatingLabelFixed={true}
                disabled={true}
                onTouchTap={this.handleTouchTap}
              />,

      tel: <TextField
              hintText="Hint Text"
              floatingLabelText="Fixed Floating Label Text"
              floatingLabelFixed={true}
              disabled={true}
              onTouchTap={this.handleTouchTap}
            />,
    }

    const items = this.props.items.map(type => {
      return Widget[type]
    })

    console.log('form', this.props.items, items)

    return (
      <div>
        <List id="test">
          <TextField
            hintText="Hint Text"
            floatingLabelText="Fixed Floating Label Text"
            floatingLabelFixed={true}
            disabled={true}
            onTouchTap={this.handleTouchTap}
          />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
            animation={PopoverAnimationVertical}
          >
            <Menu>
              <MenuItem primaryText="编辑" />
              <MenuItem primaryText="上移" />
              <MenuItem primaryText="下移" />
              <MenuItem primaryText="删除" />
            </Menu>
          </Popover>
          {items}
        </List>
      </div>
    )
  }
}

export default Form;