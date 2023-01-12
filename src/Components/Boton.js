import "./Boton.css"

export default function Boton ({clickHandler, name, gray, orange, wide, green}) {

    const handleClick = () => clickHandler(name)

    const className = [
        "component-button",
        gray ? "gray" : "",
        orange ? "orange" : "",
        wide ? "wide" : "",
        green ? "green" : "",
    ]

    return(
        <div className={className.join(" ").trim()}>
            <button className="btn" onClick={handleClick}>{name}</button>
        </div>
    )
}