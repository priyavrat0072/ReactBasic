function Child(props){

    const data  = "Anil"
    return(
        <div>
            <h2>CHILD</h2>
            <button onClick={()=>props.alert(data)}>CLICK ME</button>
        </div>
    )
}

export default Child;