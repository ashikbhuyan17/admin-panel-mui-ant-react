/* eslint-disable react/button-has-type */
import { useSelector } from 'react-redux';

import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
// defaultTheme
import themes from './themes';

// routing
import Routes from './routes';

// project imports
import NavigationScroll from './layout/NavigationScroll';


function App() {
  const customization = useSelector((state) => state.customization);
  return (
    <StyledEngineProvider injectFirst>
      {/* <ThemeProvider theme={themes(customization)}> */}

      {/* you can remove customization and redux  */}
      <ThemeProvider theme={themes()}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
          {/* <MainLayout /> */}
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
