const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/maintenance-safety', label: 'Maintenance & Safety' },
      { href: '/material-handling-dry-wet', label: 'Material Handling' },
      { href: '/mixing-blending-size-reduction', label: 'Mixing, Blending & Size Reduction' },
      { href: '/process-control-automation', label: 'Process Control & Automation' },
      { href: '/pumps-motors-drives', label: 'Pumps, Motors & Drives' },
      { href: '/valves-actuators', label: 'Valves & Actuators' },
    ],
  },
  secondary: {
    items: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/magazine', label: 'Magazine' },
      { href: '/webinars', label: 'Webinars' },
      { href: '/events', label: 'Events' },
      { href: '/breakthrough-products', label: 'Breakthrough Products Awards' },
    ],
  },
  tertiary: {
    items: [
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://industrial.endeavorb2b.com/processing/', label: 'Advertise', target: '_blank' },
      { href: dragonForms.getFormUrl('doNotSell'), label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/maintenance-safety', label: 'Maintenance & Safety' },
        { href: '/material-handling-dry-wet', label: 'Material Handling' },
        { href: '/mixing-blending-size-reduction', label: 'Mixing, Blending & Size Reduction' },
        { href: '/process-control-automation', label: 'Process Control & Automation' },
        { href: '/pumps-motors-drives', label: 'Pumps, Motors & Drives' },
        { href: '/valves-actuators', label: 'Valves & Actuators' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/magazine', label: 'Magazine' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/events', label: 'Events' },
        { href: '/breakthrough-products', label: 'Breakthrough Products Awards' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: 'https://industrial.endeavorb2b.com/processing/', label: 'Advertise', target: '_blank' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
