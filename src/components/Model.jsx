import ReactDom from 'react-dom'

export default function Model(props) {
    const { children, handleCloseModel } = props
    const portalDiv = document.getElementById('portal')
    if (!portalDiv) return null // Prevent error if portal div is missing

    return ReactDom.createPortal(
        <div className='Model-container'>
            <button onClick={handleCloseModel} className='Model-underlay' />
            <div className='Model-content'>
                {children}
            </div>
        </div>,
        portalDiv
    )
}