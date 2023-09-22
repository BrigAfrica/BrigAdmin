import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
// import store from "./redux/store";
import { ToggleProvider } from "./context/toggleContext";
import { Provider } from "react-redux/es";
import { adminStore } from "./redux/admin/store";

ReactDOM.createRoot(document.getElementById("root")).render(

  <Provider store={adminStore}>
     <ToggleProvider>
        <BrowserRouter> 
          <App />
        </BrowserRouter>
     </ToggleProvider>
  </Provider>
);
