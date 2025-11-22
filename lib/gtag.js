export const GA_TRACKING_ID = "G-T296N1N6H6";

export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
