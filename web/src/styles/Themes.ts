export const themes = {
  light: {
    //colors
    'color-primary': '#E1368A',
    'color-primary-disabled': '#E8A7C7',
    'color-primary-hover': '#F15BA4',
    'color-primary-light': '#EE90BE',
    'color-primary-dark': '#C20A64',

    'color-secondary': '#27AFAF',
    'color-secondary-disabled': '#A4F3EA',
    'color-secondary-hover': '#88D9D9',
    'color-secondary-light': '#77EAF4',
    'color-secondary-dark': '#16636D',

    //gray
    'color-neutral-100': '#FFFFFF',
    'color-neutral-200': '#FBF3F7',
    'color-neutral-300': '#FAE2EE',
    'color-neutral-400': '#F4D0E2',
    'color-neutral-500': '#EBCDDC',
    'color-neutral-600': '#C8A9AE',
    'color-neutral-700': '#AF9097',
    'color-neutral-800': '#727170',
    'color-neutral-900': '#464544',
    'color-neutral-1000': '#383430',

    'color-text-in-primary': '#FFFFFF',

    //informative
    'color-alert': '#AA9304',
    'color-danger-light': '#FF8888',
    'color-danger': '#FF6868',
    'color-danger-dark': '#BD5454',
    'color-success': '#51BD69',
    'color-success-dark': '#41AD59',

    //shadow
    'color-shadow': '#0003',

    //shimmer
    'color-shimmer-1': '#FFFFFF',
    'color-shimmer-2': '#E6E6E6',
    'color-shimmer-3': '#F8F8F8',
  },

  dark: {
    //colors
    'color-primary': '#C83737',
    'color-primary-disabled': '#B86767',
    'color-primary-hover': '#CF5757',
    'color-primary-light': '#E86767',
    'color-primary-dark': '#A80707',

    'color-secondary': '#27AFAF',
    'color-secondary-disabled': '#A4F3EA',
    'color-secondary-hover': '#88D9D9',
    'color-secondary-light': '#77EAF4',
    'color-secondary-dark': '#16636D',

    //gray
    'color-neutral-100': '#202424',
    'color-neutral-200': '#313537', 
    'color-neutral-300': '#404245',
    'color-neutral-400': '#545052',
    'color-neutral-500': '#606264',
    'color-neutral-600': '#98999E',
    'color-neutral-700': '#A0979A',
    'color-neutral-800': '#B2B1B0',
    'color-neutral-900': '#C6C5C4',
    'color-neutral-1000': '#DCDCDC',

    'color-text-in-primary': '#FFFFFF',

    //informative
    'color-alert': '#AA9304',
    'color-danger-light': '#FF8888',
    'color-danger': '#FF6868',
    'color-danger-dark': '#BD5454',
    'color-success': '#51BD69',
    'color-success-dark': '#41AD59',

    //shadow
    'color-shadow': '#0003',

    //shimmer
    'color-shimmer-1': '#FFFFFF',
    'color-shimmer-2': '#E6E6E6',
    'color-shimmer-3': '#F8F8F8',
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.dark | typeof themes.light;