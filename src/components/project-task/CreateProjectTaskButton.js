import { Link,useParams } from "react-router-dom"

function CreateProjectTaskButton(){
    const { projectId } = useParams()

    return (
        <Link to={`/project-task/create/${projectId}`} class="btn btn-primary mb-3">
            <i class="fas fa-plus-circle"> Create Project Task</i>
        </Link>
    )
}

export default CreateProjectTaskButton