import './projects.css'
import png from '../../assets/Png.png'
import pngWIP from '../../assets/Png WIP.png'

function Projects({setCurrView, VIEWS}) {
    return (
    <section id="projects" className="projects">
        <div className="button-grid">
            <button onClick={() => setCurrView(VIEWS.COLOR_PALETTE)}><img src={png} alt='img'/><span>Color Palette</span></button>
            <button onClick={() => setCurrView(VIEWS.TIMER)}><img src={png} alt='img'/><span>Timer</span></button>
            <button onClick={() => setCurrView(VIEWS.UNIT_CONVERT)}><img src={png} alt='img'/><span>Units</span></button>
            <button onClick={() => setCurrView(VIEWS.HABITS_DASHBOARD)}><img src={pngWIP} alt='img'/><span>Habits</span></button>
            <button onClick={() => setCurrView(VIEWS.TRIVIA)}><img src={pngWIP} alt='img'/><span>Trivia</span></button>
        </div>
    </section>
    );
};

export default Projects;