import { Routes,Route,BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Costumers from "./pages/Costumer";
import Transaction from "./pages/Transaction";
import Plain from "./pages/Plain";
import Payment from "./pages/Payment";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/entrar" element={<Login/>} />
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/clientes" element={<Costumers/>}/>
                    <Route path="/pagamentos" element={<Payment/>}/>
                    <Route path="/planos" element={<Plain/>}/>
                    <Route path="/transacoes" element={<Transaction/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}