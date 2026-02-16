import React, { useState, useEffect } from 'react';
import { Plus, Trash2, FileText, Download, History, Database } from 'lucide-react';

export default function ControlCargaTeca() {
  // Datos de volumen por clase desde el archivo Excel
  const clasesVolumen = {
    '60-69': 0.183372,
    '70-79': 0.247307,
    '80-89': 0.323408,
    '90-99': 0.418145,
    '100-109': 0.495436,
    '110-119': 0.585027,
    '120-129': 0.679903,
    '130-139': 0.802256,
    '140-150': 0.901886
  };

  // Estados para año, lote y consecutivo
  const [ano, setAno] = useState(new Date().getFullYear().toString());
  const [lote, setLote] = useState('');
  const [numeroViaje, setNumeroViaje] = useState('');
  const [mediciones, setMediciones] = useState([]);
  const [circunferenciaActual, setCircunferenciaActual] = useState('');
  const [todosLosViajes, setTodosLosViajes] = useState([]);
  const [viajeSeleccionado, setViajeSeleccionado] = useState(null);
  const [mostrarHistorial, setMostrarHistorial] = useState(false);

  // Cargar datos al iniciar
  useEffect(() => {
    cargarViajes();
  }, []);

  // Generar número de viaje automáticamente cuando cambian año o lote
  useEffect(() => {
    if (ano && lote) {
      generarNumeroViaje();
    }
  }, [ano, lote]);

  // Generar número de viaje con consecutivo automático
  const generarNumeroViaje = () => {
    try {
      const viajes = JSON.parse(localStorage.getItem('viajes') || '[]');
      
      // Filtrar viajes del mismo año y lote
      const viajesMismoAnoLote = viajes.filter(v => {
        const partes = v.numeroViaje.split('-');
        return partes[0] === ano && partes[1] === lote;
      });

      // Obtener el consecutivo más alto
      let maxConsecutivo = 0;
      viajesMismoAnoLote.forEach(v => {
        const partes = v.numeroViaje.split('-');
        const consecutivo = parseInt(partes[2]) || 0;
        if (consecutivo > maxConsecutivo) {
          maxConsecutivo = consecutivo;
        }
      });

      // Generar nuevo consecutivo
      const nuevoConsecutivo = (maxConsecutivo + 1).toString().padStart(3, '0');
      const nuevoNumeroViaje = `${ano}-${lote}-${nuevoConsecutivo}`;
      setNumeroViaje(nuevoNumeroViaje);
    } catch (error) {
      console.error('Error al generar número de viaje:', error);
    }
  };

  // Cargar viajes desde localStorage
  const cargarViajes = () => {
    try {
      const viajes = JSON.parse(localStorage.getItem('viajes') || '[]');
      setTodosLosViajes(viajes.sort((a, b) => new Date(b.fechaCreacion) - new Date(a.fechaCreacion)));
    } catch (error) {
      console.error('Error al cargar viajes:', error);
      setTodosLosViajes([]);
    }
  };

  // Guardar viaje actual
  const guardarViaje = () => {
    if (!numeroViaje || mediciones.length === 0) {
      alert('Debe tener un número de viaje y al menos una medición');
      return;
    }

    try {
      const resumen = calcularResumen();
      const promedioCircunferencia = mediciones.reduce((sum, m) => sum + m.circunferencia, 0) / mediciones.length;
      
      const viaje = {
        numeroViaje,
        ano,
        lote,
        fechaCreacion: new Date().toISOString(),
        mediciones,
        resumen,
        volumenTotal: Object.values(resumen).reduce((sum, r) => sum + r.volumenTotal, 0),
        totalVarillas: mediciones.length,
        promedioCircunferencia: promedioCircunferencia
      };

      // Obtener viajes existentes
      const viajes = JSON.parse(localStorage.getItem('viajes') || '[]');
      
      // Verificar si ya existe un viaje con ese número
      const indiceExistente = viajes.findIndex(v => v.numeroViaje === numeroViaje);
      
      if (indiceExistente >= 0) {
        // Actualizar viaje existente
        viajes[indiceExistente] = viaje;
      } else {
        // Agregar nuevo viaje
        viajes.push(viaje);
      }

      // Guardar en localStorage
      localStorage.setItem('viajes', JSON.stringify(viajes));
      
      alert('Viaje guardado exitosamente');
      cargarViajes();
    } catch (error) {
      console.error('Error al guardar:', error);
      alert('Error al guardar el viaje: ' + error.message);
    }
  };

  // Cargar un viaje del historial
  const cargarViajeHistorial = (viaje) => {
    setAno(viaje.ano);
    setLote(viaje.lote);
    setNumeroViaje(viaje.numeroViaje);
    setMediciones(viaje.mediciones);
    setViajeSeleccionado(viaje);
    setMostrarHistorial(false);
  };

  // Nuevo viaje
  const nuevoViaje = () => {
    setAno(new Date().getFullYear().toString());
    setLote('');
    setNumeroViaje('');
    setMediciones([]);
    setViajeSeleccionado(null);
    setCircunferenciaActual('');
  };

  // Exportar a Excel (CSV compatible con Excel)
  const exportarExcel = () => {
    if (!numeroViaje || mediciones.length === 0) {
      alert('No hay datos para exportar');
      return;
    }

    const resumen = calcularResumen();
    const volumenTotalViaje = Object.values(resumen).reduce((sum, r) => sum + r.volumenTotal, 0);
    const promedioCircunferencia = mediciones.reduce((sum, m) => sum + m.circunferencia, 0) / mediciones.length;
    
    // Crear contenido CSV
    let csv = '\uFEFF'; // BOM para UTF-8
    csv += `REPORTE DE CARGA DE TROZAS DE TECA\n`;
    csv += `Número de Viaje:,${numeroViaje}\n`;
    csv += `Año:,${ano}\n`;
    csv += `Lote:,${lote}\n`;
    csv += `Fecha:,${new Date().toLocaleDateString('es-CR')}\n`;
    csv += `Total de Varillas:,${mediciones.length}\n`;
    csv += `Promedio de Circunferencia:,${promedioCircunferencia.toFixed(2)} cm\n`;
    csv += `Volumen Total:,${volumenTotalViaje.toFixed(6)} m³\n\n`;
    
    // Resumen por clase (solo clase y cantidad)
    csv += `RESUMEN POR CLASE DE CIRCUNFERENCIA\n`;
    csv += `Clase (cm),Cantidad de Varillas\n`;
    
    Object.entries(resumen).forEach(([clase, datos]) => {
      if (datos.cantidad > 0) {
        csv += `${clase},${datos.cantidad}\n`;
      }
    });
    
    csv += `\nTOTALES\n`;
    csv += `Total de Varillas:,${mediciones.length}\n`;
    csv += `Promedio de Circunferencia:,${promedioCircunferencia.toFixed(2)} cm\n`;
    csv += `Volumen Total:,${volumenTotalViaje.toFixed(6)} m³\n\n`;
    
    // Detalle de mediciones
    csv += `DETALLE DE MEDICIONES\n`;
    csv += `Consecutivo,Circunferencia (cm),Clase,Volumen (m³),Fecha y Hora\n`;
    
    mediciones.forEach(m => {
      const fecha = new Date(m.fecha).toLocaleString('es-CR');
      csv += `${m.consecutivo},${m.circunferencia},${m.clase},${m.volumen.toFixed(6)},${fecha}\n`;
    });
    
    // Descargar archivo
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `Viaje_${numeroViaje}_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Formatear fecha
  const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleString('es-CR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Función para clasificar la circunferencia
  const clasificarCircunferencia = (circ) => {
    const c = parseFloat(circ);
    if (c >= 60 && c <= 69) return '60-69';
    if (c >= 70 && c <= 79) return '70-79';
    if (c >= 80 && c <= 89) return '80-89';
    if (c >= 90 && c <= 99) return '90-99';
    if (c >= 100 && c <= 109) return '100-109';
    if (c >= 110 && c <= 119) return '110-119';
    if (c >= 120 && c <= 129) return '120-129';
    if (c >= 130 && c <= 139) return '130-139';
    if (c >= 140 && c <= 150) return '140-150';
    return 'Fuera de rango';
  };

  // Agregar medición
  const agregarMedicion = () => {
    if (!circunferenciaActual || !numeroViaje) {
      alert('Por favor ingrese el número de viaje y la circunferencia');
      return;
    }

    const circ = parseFloat(circunferenciaActual);
    if (isNaN(circ) || circ < 60 || circ > 150) {
      alert('La circunferencia debe estar entre 60 y 150 cm');
      return;
    }

    const clase = clasificarCircunferencia(circ);
    const nuevaMedicion = {
      consecutivo: mediciones.length + 1,
      circunferencia: circ,
      clase: clase,
      volumen: clasesVolumen[clase] || 0,
      fecha: new Date().toISOString()
    };

    setMediciones([...mediciones, nuevaMedicion]);
    setCircunferenciaActual('');
  };

  // Eliminar medición
  const eliminarMedicion = (consecutivo) => {
    const nuevasMediciones = mediciones
      .filter(m => m.consecutivo !== consecutivo)
      .map((m, index) => ({ ...m, consecutivo: index + 1 }));
    setMediciones(nuevasMediciones);
  };

  // Calcular resumen por clase
  const calcularResumen = () => {
    const resumen = {};
    
    Object.keys(clasesVolumen).forEach(clase => {
      resumen[clase] = {
        cantidad: 0,
        volumenUnitario: clasesVolumen[clase],
        volumenTotal: 0
      };
    });

    mediciones.forEach(m => {
      if (m.clase !== 'Fuera de rango') {
        resumen[m.clase].cantidad += 1;
        resumen[m.clase].volumenTotal += m.volumen;
      }
    });

    return resumen;
  };

  const resumen = calcularResumen();
  const volumenTotalViaje = Object.values(resumen).reduce((sum, r) => sum + r.volumenTotal, 0);
  const totalVarillas = mediciones.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold text-emerald-800 flex items-center gap-2">
              <FileText className="w-8 h-8" />
              Control de Carga de Trozas de Teca
            </h1>
            
            <div className="flex gap-2">
              <button
                onClick={() => setMostrarHistorial(!mostrarHistorial)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold flex items-center gap-2 transition-colors"
              >
                <History className="w-5 h-5" />
                Historial
              </button>
              <button
                onClick={nuevoViaje}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold flex items-center gap-2 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Nuevo Viaje
              </button>
            </div>
          </div>
          
          {/* Año, Lote y Número de Viaje */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Año
              </label>
              <input
                type="number"
                value={ano}
                onChange={(e) => setAno(e.target.value)}
                className="w-full px-4 py-2 border-2 border-emerald-300 rounded-lg focus:outline-none focus:border-emerald-500 text-lg font-semibold"
                placeholder="2024"
                min="2000"
                max="2100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Lote
              </label>
              <input
                type="text"
                value={lote}
                onChange={(e) => setLote(e.target.value.toUpperCase())}
                className="w-full px-4 py-2 border-2 border-emerald-300 rounded-lg focus:outline-none focus:border-emerald-500 text-lg font-semibold uppercase"
                placeholder="A"
                maxLength="3"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Número de Viaje
              </label>
              <input
                type="text"
                value={numeroViaje}
                readOnly
                className="w-full px-4 py-2 border-2 border-gray-300 bg-gray-100 rounded-lg text-lg font-semibold cursor-not-allowed"
                placeholder="2024-A-001"
              />
            </div>
            
            <div className="flex gap-2 items-end">
              <button
                onClick={guardarViaje}
                className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Database className="w-5 h-5" />
                Guardar
              </button>
              <button
                onClick={exportarExcel}
                className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-5 h-5" />
                Excel
              </button>
            </div>
          </div>
        </div>

        {/* Historial de Viajes */}
        {mostrarHistorial && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">
              Historial de Viajes ({todosLosViajes.length})
            </h2>
            
            {todosLosViajes.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No hay viajes guardados</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {todosLosViajes.map((viaje, idx) => (
                  <div
                    key={idx}
                    onClick={() => cargarViajeHistorial(viaje)}
                    className="border-2 border-blue-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer hover:bg-blue-50 transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg text-blue-800">{viaje.numeroViaje}</h3>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-semibold">
                        {viaje.totalVarillas} varillas
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {formatearFecha(viaje.fechaCreacion)}
                    </p>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-emerald-700">
                        Vol: {viaje.volumenTotal.toFixed(3)} m³
                      </p>
                      {viaje.promedioCircunferencia && (
                        <p className="text-sm font-semibold text-blue-700">
                          Ø: {viaje.promedioCircunferencia.toFixed(2)} cm
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Ingreso de Mediciones */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-emerald-700 mb-4">
            Ingresar Medición de Circunferencia (a 1.3m)
          </h2>
          
          <div className="flex gap-3 items-end">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Circunferencia (cm)
              </label>
              <input
                type="number"
                value={circunferenciaActual}
                onChange={(e) => setCircunferenciaActual(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && agregarMedicion()}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
                placeholder="Ej: 85"
                step="0.1"
                min="60"
                max="150"
              />
            </div>
            <button
              onClick={agregarMedicion}
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-semibold flex items-center gap-2 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Agregar
            </button>
          </div>
          
          <p className="text-sm text-gray-600 mt-2">
            Siguiente consecutivo: <span className="font-bold text-emerald-600">#{mediciones.length + 1}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Lista de Mediciones */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-emerald-700 mb-4">
              Mediciones Registradas ({totalVarillas})
            </h2>
            
            <div className="max-h-96 overflow-y-auto">
              {mediciones.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  No hay mediciones registradas
                </p>
              ) : (
                <table className="w-full text-sm">
                  <thead className="bg-emerald-100 sticky top-0">
                    <tr>
                      <th className="px-3 py-2 text-left">#</th>
                      <th className="px-3 py-2 text-left">Circ. (cm)</th>
                      <th className="px-3 py-2 text-left">Clase</th>
                      <th className="px-3 py-2 text-right">Vol. (m³)</th>
                      <th className="px-3 py-2 text-left">Fecha/Hora</th>
                      <th className="px-3 py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {mediciones.map((m) => (
                      <tr key={m.consecutivo} className="border-b hover:bg-gray-50">
                        <td className="px-3 py-2 font-semibold">{m.consecutivo}</td>
                        <td className="px-3 py-2">{m.circunferencia}</td>
                        <td className="px-3 py-2">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-semibold">
                            {m.clase}
                          </span>
                        </td>
                        <td className="px-3 py-2 text-right">{m.volumen.toFixed(6)}</td>
                        <td className="px-3 py-2 text-xs text-gray-600">
                          {formatearFecha(m.fecha)}
                        </td>
                        <td className="px-3 py-2">
                          <button
                            onClick={() => eliminarMedicion(m.consecutivo)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          {/* Resumen por Clase */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-emerald-700 mb-4">
              Resumen por Clase de Circunferencia
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-emerald-100">
                  <tr>
                    <th className="px-4 py-3 text-left">Clase (cm)</th>
                    <th className="px-4 py-3 text-center">Cantidad de Varillas</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(resumen).map(([clase, datos]) => (
                    datos.cantidad > 0 && (
                      <tr 
                        key={clase} 
                        className="border-b bg-emerald-50"
                      >
                        <td className="px-4 py-3 font-semibold">{clase}</td>
                        <td className="px-4 py-3 text-center">
                          <span className="px-3 py-1 bg-emerald-600 text-white rounded-full font-semibold">
                            {datos.cantidad}
                          </span>
                        </td>
                      </tr>
                    )
                  ))}
                </tbody>
                <tfoot className="bg-emerald-700 text-white font-bold">
                  <tr>
                    <td className="px-4 py-3">TOTAL VARILLAS</td>
                    <td className="px-4 py-3 text-center text-lg">
                      {totalVarillas}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-white rounded-lg shadow">
                  <p className="text-sm text-gray-600 mb-1">Total Varillas</p>
                  <p className="text-3xl font-bold text-emerald-700">{totalVarillas}</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow">
                  <p className="text-sm text-gray-600 mb-1">Promedio Circunferencia</p>
                  <p className="text-3xl font-bold text-emerald-700">
                    {mediciones.length > 0 
                      ? (mediciones.reduce((sum, m) => sum + m.circunferencia, 0) / mediciones.length).toFixed(2)
                      : '0.00'} cm
                  </p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow">
                  <p className="text-sm text-gray-600 mb-1">Volumen Total</p>
                  <p className="text-3xl font-bold text-emerald-700">
                    {volumenTotalViaje.toFixed(3)} m³
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
