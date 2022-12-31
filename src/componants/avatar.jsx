export default function Avatar(props){
    return (
        <div className="avatar_container">
            {props.new && <span className="newTag">New</span>}
            <img className="avatar"
             src={props.url}
             alt="avatar"
            />
        </div>
    );
}