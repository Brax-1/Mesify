import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Auth from "./pages/Auth";
import { Layout } from "./components/Layout";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/register" element={<Auth page="register" />} />
					<Route path="/login" element={<Auth page="login" />} />
					<Route path="/" element={<Chat />} />
				</Routes>{" "}
			</Layout>
		</BrowserRouter>
	);
}

export default App;
