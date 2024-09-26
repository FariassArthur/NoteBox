
interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1db954',
    background: '#EFEFEF',
    text: '#333333',
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1db954',
    background: '#333',
    text: '#f0f0f0',
  },
};
