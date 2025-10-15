import './App.css'
import TopBar from './components/top-bar'
import Info from './components/info'
import Projects from './components/projects'
import ColorPalette from './projects/color-palette'
import Timer from './projects/timer'
import { useState } from 'react'

const VIEWS = {
    MAIN: 'MAIN',
    COLOR_PALETTE: 'COLOR_PALETTE',
    TIMER: 'TIMER',
    UNIT_CONVERT: 'UNIT_CONVERT',
    HABITS_DASHBOARD: 'HABITS_DASHBOARD',
    TRIVIA: 'TRIVIA'
}

function App() {
    const [currView, setCurrView] = useState(VIEWS.MAIN);

    const switchView = () => {
        console.log(currView)
        switch (currView) {
            case VIEWS.MAIN:
                return <div><Info/><Projects setCurrView={setCurrView} VIEWS={VIEWS}/></div>;
            case VIEWS.COLOR_PALETTE:
                return <ColorPalette/>;
            case VIEWS.TIMER:
                return <Timer/>;
            case VIEWS.UNIT_CONVERT:
                return <ColorPalette/>;
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