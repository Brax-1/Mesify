import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { Layout } from "./components/Layout";
import SetAvatar from "./pages/SetAvatar";
import Chat from "./pages/Chat";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/register" element={<Auth page="register" />} />
					<Route path="/login" element={<Auth page="login" />} />
					<Route path="/setAvatar" element={<SetAvatar />} />
					<Route path="/chat" element={<Chat />} />
				</Routes>{" "}
			</Layout>
		</BrowserRouter>
	);
}

export default App;
