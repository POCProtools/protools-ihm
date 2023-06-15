import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MuiDsfrThemeProvider from '@codegouvfr/react-dsfr/mui';
import { Header } from '@codegouvfr/react-dsfr/Header';
import { fr } from '@codegouvfr/react-dsfr';
import { Box, Typography } from '@mui/material';
import { Router, routes } from './lib/routes/router';

import ErrorBoundary from './components/shared/layout/ErrorBoundary';

import './App.css';
import getConfig from './lib/hooks/getConfig';

const queryClient = new QueryClient();
function App() {
  const [configuration, setConfiguration] = useState(false);

  if (!configuration) {
    getConfig().then(() => {
      console.log('Fetched config');

      setConfiguration(true);
    });
  }

  return (
    <MuiDsfrThemeProvider>
      <QueryClientProvider client={queryClient} contextSharing>
        <Header
          brandTop={<>INTITULE OFFICIEL</>}
          homeLinkProps={{
            href: routes.home().link.href,
            title: 'Protools - Accueil',
          }}
          quickAccessItems={[
            {
              iconId: 'fr-icon-home-4-line',
              linkProps: routes.home(),
              text: 'Home',
            },
            {
              iconId: 'fr-icon-add-circle-line',
              linkProps: routes.launch(),
              text: 'Lancer',
            },
          ]}
          serviceTagline="Orchestration des protocoles d'enquêtes"
          serviceTitle="Protools (header temporaire), j'aime pas trop l'ui personnellement"
        />
        <ErrorBoundary>
          <div
            style={{
              margin: 'auto',
              maxWidth: 1000,
              ...fr.spacing('padding', { topBottom: '10v' }),
            }}
          >
            {configuration ? (
              <Router />
            ) : (
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="h1">
                  Chargement du fichier de configuration...
                </Typography>
              </Box>
            )}
          </div>
        </ErrorBoundary>
      </QueryClientProvider>
    </MuiDsfrThemeProvider>
  );
}

export default App;
