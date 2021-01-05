export const themes = {
  light: {
    //colors
    'primary': '#E1368A',
    'primary-disabled': '#E8A7C7',
    'primary-hover': '#F15BA4',
    'primary-light': '#EE90BE',
    'primary-dark': '#C20A64',

    'secondary': '#27AFAF',
    'secondary-disabled': '#A4F3EA',
    'secondary-hover': '#88D9D9',
    'secondary-light': '#77EAF4',
    'secondary-dark': '#16636D',

    //gray
    'neutral-100': '#FFFFFF',
    'neutral-200': '#FBF3F7',
    'neutral-300': '#FAE2EE',
    'neutral-400': '#F4D0E2',
    'neutral-500': '#EBCDDC',
    'neutral-600': '#C8A9AE',
    'neutral-700': '#AF9097',
    'neutral-800': '#727170',
    'neutral-900': '#464544',
    'neutral-1000': '#383430',

    'text-in-primary': '#FFFFFF',

    //informative
    'alert': '#AA9304',
    'danger-light': '#FF8888',
    'danger': '#FF6868',
    'danger-dark': '#BD5454',
    'success': '#51BD69',
    'success-dark': '#41AD59',

    //shadow
    'shadow': '#0003',

    //shimmer
    'shimmer-1': '#FFFFFF',
    'shimmer-2': '#E6E6E6',
    'shimmer-3': '#F8F8F8',
  },

  dark: {
    //colors
    'primary': '#E1368A',
    'primary-disabled': '#E8A7C7',
    'primary-hover': '#F15BA4',
    'primary-light': '#EE90BE',
    'primary-dark': '#C20A64',

    'secondary': '#27AFAF',
    'secondary-disabled': '#A4F3EA',
    'secondary-hover': '#88D9D9',
    'secondary-light': '#77EAF4',
    'secondary-dark': '#16636D',

    //gray
    'neutral-100': '#313537',
    'neutral-200': '#202424',
    'neutral-300': '#404245',
    'neutral-400': '#545052',
    'neutral-500': '#606264',
    'neutral-600': '#98999E',
    'neutral-700': '#A0979A',
    'neutral-800': '#B2B1B0',
    'neutral-900': '#C6C5C4',
    'neutral-1000': '#DCDCDC',

    'text-in-primary': '#FFFFFF',

    //informative
    'alert': '#AA9304',
    'danger-light': '#FF8888',
    'danger': '#FF6868',
    'danger-dark': '#BD5454',
    'success': '#51BD69',
    'success-dark': '#41AD59',

    //shadow
    'shadow': '#0003',

    //shimmer
    'shimmer-1': '#FFFFFF',
    'shimmer-2': '#E6E6E6',
    'shimmer-3': '#F8F8F8',
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
