import {Fragment} from 'react'
import theme from '../src/theme'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Btn from './UI/button'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles (theme)
const NavBar = () => {
  const classes = useStyles()
  return (
    <Fragment>
      <AppBar position="relative" className={theme.primary}>
        <Toolbar>
          <Btn href={"/"} text={"Hello"} />
        </Toolbar>
      </AppBar>
      <AppBar position="relative" className={classes.root}>
        <Toolbar>
          <MenuIcon fontSize="large" /> 
          <Typography variant="h5" >
            {`\u00A0 Menu`}
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default NavBar