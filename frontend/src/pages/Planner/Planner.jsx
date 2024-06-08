import { useState } from 'react';
import knifeplateImage from './knifeplate.png';
import './Planner.css';

const Planner = () => {
    const daysOfWeek = [
        { name: 'Lunes', colorClass: 'green' },
        { name: 'Martes', colorClass: 'light-green' },
        { name: 'Miércoles', colorClass: 'green' },
        { name: 'Jueves', colorClass: 'light-green' },
        { name: 'Viernes', colorClass: 'green' },
        { name: 'Sábado', colorClass: 'light-green' },
        { name: 'Domingo', colorClass: 'green' },
    ];
    const [items, setItems] = useState(Array(7).fill(''));

    const handleItemChange = (index, event) => {
        const newItems = [...items];
        newItems[index] = event.target.value;
        setItems(newItems);
    };

    const handleDownload = () => {
        // Implementar funcionalidad para descargar el planner
        alert('Descargar Planner no está implementado aún.');
    };

    const handleContinue = () => {
        // Implementar funcionalidad para continuar agendando
        alert('Continuar Agendando no está implementado aún.');
    };

    return (
        <div className="planner-container">
            <h1>AGENDA SEMANAL</h1>
            <div className="planner">
                <div className="header-titles">
                    <h2>Día</h2>
                    <div className="header-recipes">
                    <img src={knifeplateImage} alt="Knife Plate"style={{ width: '24px', height: '24px', colorClass:"#82AA33" }} />
                        <h2>Recetas</h2>
                    </div>
                    <div className="header-edit-dates">

                        <svg className="h-4 w-4 text-primary" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <rect x="4" y="5" width="16" height="16" rx="2" />
                            <line x1="16" y1="3" x2="16" y2="7" />
                            <line x1="8" y1="3" x2="8" y2="7" />
                            <line x1="4" y1="11" x2="20" y2="11" />
                            <rect x="8" y="15" width="2" height="2"/>

                        </svg>
                        <h2>Editar Fechas</h2>
                    </div>
                </div>

                <table>
                    <thead>
                        <tr></tr>
                    </thead>
                    <tbody>
                        {daysOfWeek.map((day, index) => (
                            <tr key={index}>
                                <td className={day.colorClass}>{day.name}</td>
                                <td>
                                    <input
                                        type="text"
                                        value={items[index]}
                                        onChange={(event) => handleItemChange(index, event)}
                                        placeholder="Agendar ítem"
                                    />
                                </td>
                                <td>
                                    <button onClick={() => alert('Editar fechas para ' + day.name)}>Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="planner-buttons">
                    <button onClick={handleDownload}>Descargar Planner</button>
                    <button onClick={handleContinue}>Continuar Agendando</button>
                </div>
            </div>
        </div>
    );
};

export default Planner;



