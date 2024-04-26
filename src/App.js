import logo from './logo.svg';
import './App.css';
import React from 'react';

const DogPictureDisplay = ({ imageUrl }) => {

  return (
    <img src={imageUrl} alt="犬画像" className='picDisplay' />
  );
};

const Buttons = ({ fetchDogImage, clearDogImage }) => {
  return (
    <div>
      <FetchButton fetchDogImage={fetchDogImage} />
      <ClearButton clearDogImage={clearDogImage} />
    </div>

  );
};

const FetchButton = ({ fetchDogImage }) => {
  return (
    <button onClick={() => { fetchDogImage() }}>fetch</button>
  );
};

const ClearButton = ({ clearDogImage }) => {
  return (
    <button onClick={() => { clearDogImage() }}>clear</button>
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

  const clearDogImage = () => {
    setImageUrl("");
  }

  React.useEffect(() => {
    fetchDogImage();
  });

  return (
    <div>
      {imageUrl && <DogPictureDisplay imageUrl={imageUrl} />}
      <Buttons fetchDogImage={fetchDogImage} clearDogImage={clearDogImage} />
    </div>

  );
}

export default App;
