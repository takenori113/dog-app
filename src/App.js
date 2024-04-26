import logo from './logo.svg';
import './App.css';

const DogPictureDisplay = ({ imageUrl }) => {

  return (
    <img src={imageUrl} alt="犬画像" />
  );
};

const Buttons = () => {
  return (
    <div>
      <FetchButton />
      <ClearButton />
    </div>

  );
};

const FetchButton = () => {
  return (
    <button>fetch</button>
  );
};

const ClearButton = () => {
  return (
    <button>clear</button>
  )
}

function App() {
  const imageUrl = "https://research.image.itmedia.co.jp/wp-content/uploads/2022/11/1667535503_67768680-1024x663.jpg"
  return (
    <div>
      <DogPictureDisplay imageUrl={imageUrl} />
      <Buttons />
    </div>

  );
}

export default App;
