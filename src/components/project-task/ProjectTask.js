import { Link,useParams } from "react-router-dom"

function ProjectTask(props){
    const { projectId } = useParams()

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
                            <Link to={`/project-task/update/${projectId}`} class="btn btn-primary">
                                View / Update
                            </Link>

                            <button class="btn btn-danger ml-4">
                                Delete
                            </button>
                        </div>
                    </div>
    )
}

export default ProjectTask