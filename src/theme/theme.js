export default {
  light: {
    background: '#fafafa',
    primaryText: '#000',
    secondaryText: '#73737d',
    unselectedButton: '#949494',
    selectedButton: '#000',
  },
  dark: {
    background: '#111216',
    primaryText: '#fff',
    secondaryText: '#4c4d54',
    unselectedButton: '#57575a',
    selectedButton: '#fff',
  }
};

export const getInitialColorMode = () => {
  const { localStorage, matchMedia } = window;

  const persistedColor = localStorage.getItem('color-mode');
  const hasPreference = typeof persistedColor === 'string';
  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (hasPreference) {
    return persistedColor;
  }
  // If they haven't been explicit, let's check the media query
  const mql = matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';
  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light';
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return 'light';
};
