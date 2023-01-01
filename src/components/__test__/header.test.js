import { render } from "@testing-library/react";
import Header from "../Header";
import store from "../../store";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
const logoURL = "https://via.placeholder.com/100x40.png?text=Logo";
test("Loading header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getByTestId("logo");
  expect(logo.src).toBe(logoURL);
});
