function Projects() {
  return (
    <div className="landing-container">
      <h1>¡Bienvenido a mi Landing Page!</h1>
      <p>Un espacio listo para conectar con el backend.</p>
      
      <div className="button-group">
        {/* Aquí tus tres botones */}
        <button onClick={() => alert('Botón 1 presionado')}>Opción Uno</button>
        <button onClick={() => alert('Botón 2 presionado')}>Opción Dos</button>
        <button onClick={() => alert('Botón 3 presionado')}>Opción Tres</button>
      </div>
    </div>
  )
}

export default Projects