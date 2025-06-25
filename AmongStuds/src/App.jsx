import './App.css';
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  useEffect(() => {
    console.log("Firebase Auth instance:", auth);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">AmongStuds Connected to Firebase 🎉</h1>
    </div>
  );
}

export default App;

