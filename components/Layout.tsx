import React, { ReactNode } from 'react';
import NavBar from './NavBar';
import Paper from '@mui/material/Paper';

type Props = {
    children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
    <div>
        <div>
            {props.children}
        </div>
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
        <NavBar />
        </Paper>
        <style jsx global>{`
      html {
        box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        background: rgba(0, 0, 0, 0.05);
      }

      input,
      textarea {
        font-size: 16px;
      }

      button {
        cursor: pointer;
      }
    `}</style>
        <style jsx>{`
      .layout {
        padding: 0 2rem;
      }
    `}</style>
    </div>
)

export default Layout;