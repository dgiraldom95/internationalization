import React from 'react';
import ReactDOM from 'react-dom';
import localeEsMessages from './locales/es';
import localeEnMessages from './locales/en';
import { IntlProvider } from 'react-intl';

import JobsList from './components/jobsList';

ReactDOM.render(
  <IntlProvider
    locale={navigator.language || navigator.browserLanguage}
    messages={navigator.language === 'en-US' ? localeEnMessages : localeEsMessages}
  >
    <JobsList />
  </IntlProvider>,
  document.getElementById('root'),
);
