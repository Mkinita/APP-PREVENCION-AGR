import React from 'react';

const UploadPage = () => {
  return (
    <>
      <h1>Subir imagen</h1>
      <form action="/upload" method="POST" encType="multipart/form-data">
        <input type="file" name="image" />
        <button type="submit">Subir</button>
      </form>

      <h2>Imágenes subidas:</h2>
      {/* <img src="uploads/image-1689003896158-818802821.jpg" alt="Imagen subida" /> */}
    </>
  );
};

export default UploadPage;
