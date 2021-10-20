import React from "react";
import "antd/dist/antd.css";
import Section from "./components/Section";

import "./App.css";
import Routes from "./Routes/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Section>
          <Routes />
        </Section>
      </div>
    </BrowserRouter>
  );
}

export default App;
// import React from "react";
// import "./App.css";
// // import generateStore from "./Redux/store";
// import { Provider } from "react-redux";
// import Routes from "../src/Routes/Routes";

// const App = () => {
//   // const store = generateStore();
//   return (
//     <Provider store={store}>
//       <Routes />
//     </Provider>
//   );
// };
// export default App;
