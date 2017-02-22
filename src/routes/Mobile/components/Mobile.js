import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import BottomNavigation from 'components/BottomNavigation'
import TextField from 'material-ui/TextField';

const TextFieldExampleSimple = () => (
  <div style={{width: 250, padding: '0 1em'}}>
    <TextField fullWidth
      hintText="Hint Text"
    /><br />
    <br />
    <TextField fullWidth
      hintText="The hint text can be as long as you want, it will wrap."
    /><br />
    <TextField fullWidth
      id="text-field-default"
      defaultValue="Default Value"
    /><br />
    <TextField fullWidth
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
    /><br />
    <TextField fullWidth
      defaultValue="Default Value"
      floatingLabelText="Floating Label Text"
    /><br />
    <TextField fullWidth
      hintText="Hint Text"
      floatingLabelText="Fixed Floating Label Text"
      floatingLabelFixed={true}
    /><br />
    <TextField fullWidth
      hintText="Password Field"
      floatingLabelText="Password"
      type="password"
    /><br />
    <TextField fullWidth
      hintText="MultiLine with rows: 2 and rowsMax: 4"
      multiLine={true}
      rows={2}
      rowsMax={4}
    /><br />
    <TextField fullWidth
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
      multiLine={true}
      rows={2}
    /><br />
    <TextField fullWidth
      hintText="Full width"
      fullWidth={true}
    />
  </div>
);

class DrawerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
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

  render() {
    return (
      <BottomNavigation>
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <TextFieldExampleSimple />
        </Drawer>
      </BottomNavigation>
    );
  }
}

export default DrawerComponent
