import logo from './logo.svg';
import './App.css';
import Profile from './componants/profile'
import Avatar from './componants/avatar'

function App() {
  return (
    <div className="App">
        <Profile url="https://images.chosun.com/resizer/sD2V9t5EOBvs-FOtUUDOJekXUx4=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/U4IIQNIIYFLA3JC7EYMNJMOCIA.JPG"
            name="IU"
            bio="안녕하세요 아이유입니다"
            new="True"
        />
        <Profile url="https://img.hankyung.com/photo/202206/BF.30292418.1.png"
            name="채원"
            bio="안녕하세요 채원입니다"
        />
        <Profile url="https://image.bugsm.co.kr/artist/images/200/800264/80026437.jpg?version=20220824002120.0"
            name="IU"
            bio="안녕하세요 태연입니다"
        />
        <Avatar url="http://www.pharmnews.com/news/photo/202211/213042_83872_1340.jpg"
                new={true}
        />
    </div>
  );
}

export default App;
