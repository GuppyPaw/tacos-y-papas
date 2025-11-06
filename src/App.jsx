import './App.css'
import TopBar from './components/top-bar/top-bar'
import Info from './components/info/info'
import Projects from './components/projects/projects'
import { VIEWS } from './config/constants'
import ColorPalette from './projects/color-palette/color-palette'
import Timer from './projects/timer/timer'
import Units from './projects/unit-converter/unit-converter'
import { useState } from 'react'

function App() {
    const [currView, setCurrView] = useState(VIEWS.MAIN);

    const switchView = () => {
        switch (currView) {
            case VIEWS.MAIN:
                return <div><Info/><Projects setCurrView={setCurrView} VIEWS={VIEWS}/></div>;
            case VIEWS.COLOR_PALETTE:
                return <ColorPalette/>;
            case VIEWS.TIMER:
                return <Timer/>;
            case VIEWS.UNIT_CONVERT:
                return <Units/>;
            case VIEWS.HABITS_DASHBOARD:
                return <ColorPalette/>;
            case VIEWS.TRIVIA:
                return <ColorPalette/>;
            default:
                return <div>hola c:</div>
        }
    }

    return (
    <div className="landing-container">
        <TopBar currView={currView} setCurrView={setCurrView} VIEWS={VIEWS}/>
        <main>
            {switchView()}
        </main>
    </div>
    )
}

export default App