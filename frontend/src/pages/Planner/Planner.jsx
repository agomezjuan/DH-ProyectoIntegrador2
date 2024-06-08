import React, { useState } from 'react';
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
                <table>
                    <thead>
                        <tr>
                            <th>Día</th>
                            <th>Recetas</th>
                            <th>Editar Fechas</th>
                        </tr>
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



