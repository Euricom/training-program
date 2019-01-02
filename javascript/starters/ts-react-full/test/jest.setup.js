import 'jest-extended';
import IntlPolyfill from 'intl';
import 'jest-localstorage-mock';

// Jest and node only support English locale
// Therefore we add the polyfill for unit testing
Intl.NumberFormat = IntlPolyfill.NumberFormat;
Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
