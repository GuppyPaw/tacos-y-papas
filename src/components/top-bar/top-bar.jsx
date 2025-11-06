import './top-bar.css'

function TopBar({currView, setCurrView, VIEWS}) {

    return (
    <header>
        <nav>
            <span onClick={() => setCurrView(VIEWS.MAIN)}>TACO</span>
            {currView === VIEWS.MAIN ?
            <div className='links'>
                <a href="#info">Información</a>
                <a href="#projects">Proyectos</a>
            </div> : ''
            }
        </nav>
    </header>
    );
};

export default TopBar;