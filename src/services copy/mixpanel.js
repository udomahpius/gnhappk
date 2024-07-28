import mixpanel from 'mixpanel-browser';

init();

function isProd() {
  return process.env.NODE_ENV === 'production';
}

export function init() {
  if (isProd()) {
    mixpanel.init('6582034838776ae758df251c6fa644f3', { debug: false, track_pageview: true});
  }
}

export function identify(email, name) {
  if (isProd()) {
    mixpanel.identify(email);
  }
}

export function set_people(properties) {
  if(isProd()) {
    mixpanel.people.set(properties);
  }
}

export function track(event, properties) {
  if (isProd()) {
    mixpanel.track(event, properties);
  }else {
    console.log("Mixpanel Tracking:", event, properties);
  }
}

export function reset() {
  if (isProd()) {
    mixpanel.reset();
  }
}

export function trackPageView() {
  if (isProd()) {
    mixpanel.track_pageview();
  }
}
