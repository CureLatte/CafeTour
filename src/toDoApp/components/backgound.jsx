import '../css/background.modules.css'
import Header from "./header";
import Content from "./Content";
import Footer from "./Footer";

export default function Background(){
    return (
        <div className="background">
            <div className="container">
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
        </div>
    )
}