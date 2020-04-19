import DefaultTheme from '@base-cms/marko-web-theme-default/browser';
import GTM from '@base-cms/marko-web-gtm/browser';
import GAM from '@base-cms/marko-web-gam/browser';
import GCSE from '@base-cms/marko-web-gcse/browser';
import RevealAd from '@base-cms/marko-web-reveal-ad/browser';
import PhotoSwipe from '@base-cms/marko-web-photoswipe/browser';
import Inquiry from '@base-cms/marko-web-inquiry/browser';
import ContactUs from '@endeavor-business-media/package-contact-us/browser';
import Leaders from '@endeavor-business-media/package-leaders/browser';
import Directory from '@endeavor-business-media/package-directory/browser';
import SocialSharing from '@base-cms/marko-web-social-sharing/browser';
import IdentityX from '@base-cms/marko-web-identity-x/browser';
import Radix from '@base-cms/marko-web-radix/browser';

export default (Browser) => {
  DefaultTheme(Browser);
  GTM(Browser);
  GAM(Browser);
  GCSE(Browser);
  RevealAd(Browser);
  Inquiry(Browser);
  Leaders(Browser);
  PhotoSwipe(Browser);
  Directory(Browser);
  SocialSharing(Browser);
  ContactUs(Browser);
  IdentityX(Browser);
  Radix(Browser);
};
