import { useState } from 'react';
import './color-palette.css'

const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0').toUpperCase()}`;
}

const getColorPalette = () => {
    return Array(6).fill(null).map(() => getRandomColor());
}

function ColorPalette() {
    const [colors, setColors] = useState(getColorPalette());
    
    const handleNewPaletteClick = () => {
        setColors(getColorPalette());
    }

    return (
    <section id="color-palette" className="color-palette">
        <div className="colors">
            {colors.map((color, index) => (
                <div key={index} style={{backgroundColor: color}}>
                    <div className='color-tag'>{color}</div>
                </div>
            ))}
        </div>
        <div className='colors-actions'>
            <button onClick={handleNewPaletteClick}>🔁</button>
        </div>
    </section>
    );
};

export default ColorPalette;