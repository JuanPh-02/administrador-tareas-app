import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import App from "./App";
import NotFound from "./pages/NotFound";

export default function AppRouter() {
    return (
        <Routes>
            {/* RUTAS PUBLICAS */}
            <Route path="/" element={<App/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* <Route element={<ProtectedRoute></ProtectedRoute>}> */}
            {/* RUTAS PRIVADAS */}
            {/* <Route path="/micuenta" />
                <Route path="/tareas" />
                <Route path="/configuracion" /> */}
            {/* </Route> */}

            {/* RUTA 404 */}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}