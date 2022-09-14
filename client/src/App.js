import './App.css';
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'

const apiKey = 'xbaahjpb5rez';
const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <div className="app-wrapper">
    Advanced Messaging App
    </div>
  );
}

export default App;
