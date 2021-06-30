import {useEffect, useState} from "react";
import useDebounce from "../../../../Hooks/useDebounce";

export const SearchForm = (props) => {

    const [status, setStatus] = useState(false);
    const [value, setValue] = useState(null);
    const debouncedSearch = useDebounce(value)

    useEffect(() => {
        if (debouncedSearch) {
            props.filterTasks(value, status)
        }
        else if(!debouncedSearch && !value) {
            props.getTasks()
        }
    }, [debouncedSearch, status])


    return <div className="input-group mb-3">
        <input type="text" value={value} onChange={e => setValue(e.target.value)} className={"form-control"}
               placeholder={"Enter title to search"}/>
        <span className="input-group-text">
                    <input type="checkbox" onChange={e => setStatus(e.target.checked)}/>
               </span>
        <span className="input-group-text">
                    Status
               </span>
    </div>
}