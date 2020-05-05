import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styles from './MainLayout.module.scss';
import Container from '@material-ui/core/Container';


const MainLayout = ({children}) => {

  return (
    <div className={styles.component}>
      <AppBar>
        <Container maxWidht='lg'>
          <Toolbar disableGutters>
            <PageNav/>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidht='lg'>
        <Toolbar />
        {children}
      </Container>
    </div>
  );
};

MainLayout.propTypes  = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
