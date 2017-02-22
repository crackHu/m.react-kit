import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import BottomNavigation from 'components/BottomNavigation'

export const MaterialLayout = ({ children }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    {children}
  </MuiThemeProvider>
);

MaterialLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default MaterialLayout;
