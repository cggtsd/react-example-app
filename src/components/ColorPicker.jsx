import { useState } from "react"

export const ColorPicker = () => {
    const [color, setColor] = useState("#ffffff")
    function handleColorChange(e) {
        setColor(e.target.value)
    }
    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div style={{ backgroundColor: color }}
                className="color-display">
                <p>Selected Color:{color}</p>
            </div>
            <label>Select a Color</label>
            <input
                type="color"
                value={color} onChange={handleColorChange} />
        </div>
    )
}