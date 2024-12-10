import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./shared/Signup";
import IntermediateChallange from "./pages/IntermediateChallange";
import OTP from "./shared/OTP";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/otp" element={<OTP/>}/>
        <Route path="/form" element={<IntermediateChallange />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
