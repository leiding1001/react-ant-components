
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import Routes from '__ROUTES__';
import {IntlProvider, addLocaleData} from 'react-intl';
import {LocaleProvider} from 'antd';
import zh from 'react-intl/locale-data/zh';

import I18NUtil from './common/utils/i18n-util';
import CommonUtil from './common/utils/common-util';

import './components/fonts/otms-font.css';
import './components/style/theme.less';
import './components/style/index.styl';

addLocaleData([...zh]);

const LOCALE = CommonUtil.getSearchLocale() || CommonUtil.getLocale();
const i18NUtil = new I18NUtil(LOCALE);
const {locale, messages, antdLocale} = i18NUtil.getMpIntl();

ReactDOM.render(
  <LocaleProvider locale={antdLocale}>
    <IntlProvider locale={locale} messages={messages}>
      <div className="app">
        <Router>
          <Routes />
        </Router>
      </div>
    </IntlProvider>
  </LocaleProvider>,
  document.getElementById('content')
);
