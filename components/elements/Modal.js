
function Modal(props){

    function Hidemodalpopup(){
        props.passmodalstat(false)
    }
    return(
        <>
        <div className="modaloverlay">
            <div className="closepopup" onClick={Hidemodalpopup}>
            <i class="far fa-times-circle"></i>
            </div>
            <div className="modalbody">
                <img src="/assets/images/resource/iso-certificate.jpg"/>
            </div>
        </div>

    </>
    )
}
export default Modal;