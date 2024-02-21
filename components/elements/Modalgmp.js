function ModalGMP(props){
    function Hidemodalgmppopup(){
        props.passgmpmodalstat(false)
    }
    return(
        <>
        <div className="modaloverlay">
            <div className="closepopup" onClick={Hidemodalgmppopup}>
            <i class="far fa-times-circle"></i>
            </div>
            <div className="modalbody">
                <img src="/assets/images/resource/ukcert.jpg"/>
            </div>
        </div>
        </>
    )
}
export default ModalGMP