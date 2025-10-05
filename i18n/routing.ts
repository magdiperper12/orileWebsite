
import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['ar','en'],
 
  // Used when no locale matches
  defaultLocale: 'ar',

  ////named of pathes like redirect
  pathnames:{
      "/contact":{
        en:"/testing",
        ar:"/testing"
      }
  },
  ///auto discover brwoser 
//   localeDetection: false 
});