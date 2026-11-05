import { useState, useEffect } from "react";
import "./App.css";

const obtenerFotos = async () => {
    return [
        { id: 1040, title: "Arquitectura moderna", author: "David B.", url: "https://picsum.photos/id/1040/300/200" },
        { id: 1050, title: "Paisaje montañoso", author: "Samuel Z.", url: "https://picsum.photos/id/1050/300/200" },
        { id: 1062, title: "Exploración urbana", author: "Elena M.", url: "https://picsum.photos/id/1062/300/200" }
    ];
};

function App() {
    const [fotos, setFotos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const cargar = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            const datos = await obtenerFotos();
            setFotos(datos);
            setCargando(false);
        };
        cargar();
    }, []);

    if (cargando) {
        return (
            <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
                <div className="spinner-border text-danger mb-3" style={{ width: "3rem", height: "3rem" }}></div>
                <p className="text-muted fw-semibold">Cargando nueva galería...</p>
            </div>
        );
    }

    return (
        <div className="container py-5" style={{ maxWidth: "900px" }}>
            <div className="text-center mb-5">
                <h1 className="fw-bold text-danger display-5">Biblioteca UTL</h1>
                <p className="text-secondary">Galería fotográfica oficial</p>
                <span className="badge bg-danger px-3 py-2 rounded-pill">Bienvenido a la galería de UTL</span>
            </div>

            <div className="row g-4">
                {fotos.map((foto) => (
                    <div className="col-md-4" key={foto.id}>
                        <div className="card h-100 border-0 shadow-sm red-card">
                            <img src={foto.url} className="card-img-top" alt={foto.title} />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h6 className="card-title text-dark fw-bold mb-1">
                                        {foto.title}
                                    </h6>
                                    <p className="text-muted small mb-3">
                                        Autor: <span className="fw-semibold text-secondary">{foto.author}</span>
                                    </p>
                                </div>
                                <button
                                    className="btn btn-outline-danger w-100 rounded-pill btn-sm fw-semibold"
                                    onClick={() => alert("Seleccionaste: " + foto.title + " (Autor: " + foto.author + ")")}
                                >
                                    Ver foto
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;