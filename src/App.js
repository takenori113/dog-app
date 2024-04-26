import logo from './logo.svg';
import './App.css';
import React from 'react';

const DogPictureDisplay = ({ imageUrl }) => {

  return (
    <img src={imageUrl} alt="犬画像" />
  );
};

const Buttons = ({fetchDogImage}) => {
  return (
    <div>
      <FetchButton fetchDogImage={fetchDogImage} />
      <ClearButton />
    </div>

  );
};

const FetchButton = ({fetchDogImage}) => {
  return (
    <button onClick={() => { fetchDogImage() }}>fetch</button>
  );
};

const ClearButton = () => {
  return (
    <button>clear</button>
  )
}

function App() {
  const [imageUrl, setImageUrl] = React.useState("");

  const fetchDogImage = async () => {
    try {
      const url = "https://dog.ceo/api/breeds/image/random";
      const res = await fetch(url);
      const data = await res.json();
      setImageUrl(data.message);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {imageUrl && <DogPictureDisplay imageUrl={imageUrl} />}
      <Buttons fetchDogImage={fetchDogImage} />
    </div>

  );
}

export default App;
