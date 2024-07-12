import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io(import.meta.env.VITE_SERVER); // Thay thế bằng địa chỉ server Express của bạn

function App() {
  return <div>App</div>;
}

export default App;
