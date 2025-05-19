import React from 'react'; 

import { render } from '@testing-library/react'; 

import Perf from 'react-addons-perf'; 

import App from '../App'; // Importa tu componente principal aquí 

  

// Configura react-addons-perf 

window.Perf = Perf; 

  

// Define tu prueba de rendimiento 

test('renders App component without performance issues', () => { 

  // Inicia la grabación del rendimiento 

  Perf.start(); 

  

  // Renderiza tu componente 

  render(<App />); 

  

  // Detiene la grabación del rendimiento 

  Perf.stop(); 

  

  // Imprime el registro de rendimiento 

  console.log(Perf.getLastMeasurements()); 

  

  // Mide el tiempo de rendimiento 

  const measurements = Perf.getLastMeasurements(); 

  // Puedes establecer un umbral de rendimiento aquí y compararlo con tus mediciones 

  // Por ejemplo, si el tiempo total de renderizado excede cierto umbral, puedes considerarlo un problema de rendimiento 

  const totalTime = measurements[0].totalTime; 

  const threshold = 100; // Define tu umbral aquí 

  expect(totalTime).toBeLessThan(threshold); 

}); 