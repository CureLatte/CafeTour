import Row from "./Row";
import style from '../css/content.module.css'

export default function Content(){
    return (
        <div className={style.content}>
            <Row></Row>
            <Row></Row>
            <Row></Row>
        </div>
    )
}