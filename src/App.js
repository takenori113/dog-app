import './App.css';
import React from 'react';

const DogPictureDisplay = ({ imageUrls }) => {
  const datas =  imageUrls.map((url) => {
   return <img  key={url}  src={url} alt="犬画像" className='picDisplay' />
  });
  console.log(datas);
  return (
    datas
  );
};

const Buttons = ({ fetchDogImage, clearDogImage ,imageNums,onImgNumChange}) => {
  return (
    <div>
      <FetchButton fetchDogImage={fetchDogImage} />
      <ClearButton clearDogImage={clearDogImage} />
      <InputNumberButton imageNums={imageNums} onImgNumChange={onImgNumChange}/>
    </div>

  );
};
const InputNumberButton = ({imageNums,onImgNumChange})=>{
  return(
    <input type='number' value={imageNums} onChange={(e)=>{onImgNumChange(e)} } max={50} min={1}/>
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
  const [imageUrls, setImageUrls] = React.useState([]);
  const [imageNums, setImagenums] = React.useState(1);

  const fetchDogImage = async () => {
    try {
      const url = `https://dog.ceo/api/breeds/image/random/${imageNums}`;
      const res = await fetch(url);
      const data = await res.json();
      setImageUrls(data.message);
      console.log(data.message);
    } catch (e) {
      console.log(e);
    }
  };
  
  const onImgNumChange =(e)=>{
    if(e.target.value){
      setImagenums(parseInt(e.target.value));
    }else{
      setImagenums(1);
    }
  }
  const clearDogImage = () => {
    setImageUrls([]);
  }

  React.useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div>
      {imageUrls && <DogPictureDisplay imageUrls={imageUrls} />}
      <Buttons fetchDogImage={fetchDogImage} clearDogImage={clearDogImage} imageNums={imageNums} onImgNumChange={onImgNumChange} />
    </div>

  );
}

export default App;
