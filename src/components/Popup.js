import "../styles/popup.css"
function Popup({isOpen, onClose, children}){

    if (!isOpen) return null;
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-btn" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    )

}

export default Popup;