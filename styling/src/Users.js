
function Users(props) {
    return (
        <div>
            <div>
                <span>{props.data.name}</span>
                <span>{props.data.email}</span>
                <span>{props.data.contact}</span>
            </div>

        </div>

    )
}

export default Users;