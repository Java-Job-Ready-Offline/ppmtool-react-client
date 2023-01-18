import { Link,useParams } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import { getToken } from "../auth/authSlice"
import { deleteProjectTask } from "./projectTaskSlice"

function ProjectTask(props){
    const { projectId } = useParams()
    const token = useSelector(getToken)
    const dispatch = useDispatch()

    const onDelete = ()=>{
        if(token){
            dispatch(deleteProjectTask({
                projectId,
                projectSequence:props.projectSequence,
                token
            }))
        }
    }

    return (
        <div class="card mb-1 bg-light">

                        <div class="card-header text-primary">
                            ID: {props.projectSequence} -- Priority: {props.priority}
                        </div>
                        <div class="card-body bg-light">
                            <h5 class="card-title">{props.summary}</h5>
                            <p class="card-text text-truncate ">
                                {props.acceptanceCriteria}
                            </p>
                            <Link to={`/project-task/update/${projectId}/${props.projectSequence}`} class="btn btn-primary">
                                View / Update
                            </Link>

                            <button onClick={onDelete} class="btn btn-danger ml-4">
                                Delete
                            </button>
                        </div>
                    </div>
    )
}

export default ProjectTask