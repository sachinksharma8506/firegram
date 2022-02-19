import React, { useState } from 'react';
import Title from './comps/Title';
import Upload from './comps/Upload';
import ImageGrid from './comps/Image-grid';
import BackDropModal from './comps/modal';

function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  return (
    <div className="App">
      <form>
        <Title/>
        <Upload />
        <ImageGrid setSelectedImage={setSelectedImage}></ImageGrid>
        { selectedImage && <BackDropModal setSelectedImage={setSelectedImage} selectedImg={selectedImage}></BackDropModal>}
      </form>
    </div>
  );
}

export default App;
