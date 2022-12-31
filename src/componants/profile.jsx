import Avatar from "./avatar";

export default function Profile(props){
    return (
        <>
            <div className="profile">
                <Avatar url={props.url} new={props.new}/>
                <h1 className="name" >{props.name}</h1>
                <h3 className="bio">{props.bio}</h3>
            </div>
        </>
    );
}