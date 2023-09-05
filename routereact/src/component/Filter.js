import { useSearchParams } from "react-router-dom";

function Filter(){
    const [searchParam, setSearchParam] = useSearchParams()
    console.log(searchParam.get('age'))
    return(
        <div>
            <h3>Filters</h3>
        </div>
    )
}

export default Filter;