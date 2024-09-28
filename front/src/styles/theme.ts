
interface Theme {
  colors: {
    primary: string;
    secondary: string;
    border: string,
    hover: string,
    background: string;
    aside: string;
    color: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1db954',
    border: "#333333",
    hover: "#333",
    background: '#F5F7F8',
    aside: "#31363F",
    color: '#333333',
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1db954',
    border: "#F5F7F8",
    hover: "#76ABAE",
    background: '#222831',
    aside: "#31363F",
    color: '#EEEEEE',
  },
};
