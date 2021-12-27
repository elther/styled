import React,{ useState } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.borderColor};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "red",
    borderColor: "blue",
  }
}

// Define what props.theme will look like
const defaultTheme = {
  main: "green",
  borderColor: "green",
};

const redTheme = {
    color: "red",
    borderColor: "red",
};

const GlobalStyle = createGlobalStyle`
  button {
    background-color: pink;
  }
`

export default function StyledComponentsExample() {
    const [theme, setTheme] = useState(defaultTheme);
    return (
        // Use Title and Wrapper like any other React component – except they're styled!
        <>
            <div>
                <GlobalStyle />
                <button onClick={()=>setTheme(redTheme)}>red</button>
                <button onClick={()=>setTheme(defaultTheme)}>green</button>
                <ThemeProvider theme={theme}>
                    <Button>Normal</Button>
                    <Button>Themed</Button>
                </ThemeProvider>
            </div>
            <div>
                <button>Other</button>
            </div>
        </>
    )
}

