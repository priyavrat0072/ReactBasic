 //PROPS IN FUNCTIONAL COMPONENT

function Student(props){
    console.log(props)
    return(
        <div>
            <h1>
                Student Component
                </h1>
                <h2>Name : {props.name}</h2>
              

            
        </div>
    )
}

export default Student