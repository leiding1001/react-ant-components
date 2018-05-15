import localeEn from '../../../resources/locales/en';
import localeZh from '../../../resources/locales/zh';

const LOCALES = {
  ZH: 'zh',
  EN: 'en'
};

class I18NUtil {
  constructor(locale) {
    this.i18nResource = {};
    // load messages data for zh and en
    this.i18nResource[localeEn.locale] = localeEn;
    this.i18nResource[localeZh.locale] = localeZh;

    this.init(locale);
  }

  init(locale) {

    // set messages for related locale
    if(!locale || !this.i18nResource[locale]) {
      this.locale = LOCALES.ZH;
    } else {
      this.locale = locale;
    }

    this.messages = this.i18nResource[this.locale].messages;
    this.antdLocale = this.i18nResource[this.locale].antdLocale;
  }

  getLocale() {
    return this.locale;
  }

  getMessages() {
    return this.messages;
  }

  /*
   * follow the locale param to reset locale and messages
   */
  resetWith(locale) {
    this.init(locale);
  }

  getMpIntl() {
    return {
      messages: this.messages,
      locale: this.locale,
      antdLocale: this.antdLocale
    };
  }
}

I18NUtil.LOCALES = LOCALES;

export default I18NUtil;
