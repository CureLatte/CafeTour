import backgroundStyle from '../css/background.module.css'
import Header from "./header";
import Content from "./Content";
import Footer from "./Footer";

export default function Background(){
    return (
        <div className={backgroundStyle.background}>
            <div className={backgroundStyle.container}>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
        </div>
    )
}