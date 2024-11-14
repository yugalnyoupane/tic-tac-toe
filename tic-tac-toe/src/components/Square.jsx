import '../App.css';


function Square({valueInsideBox,Clicked}){

    return(
        <>
        <button className="square" onClick={Clicked}>{valueInsideBox}</button>
        </>
    )
}
export default Square