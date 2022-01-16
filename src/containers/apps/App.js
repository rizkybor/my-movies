import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../routes/index";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();
export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <div className="App">
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </ThemeProvider>
    );
  }
}
