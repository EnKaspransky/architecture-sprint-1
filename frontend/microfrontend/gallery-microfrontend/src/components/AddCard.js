import React from 'react';

function Main({ jwt }) {
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  return (
    <main className="content">
        <button className="places__add-button" type="button" onClick={handleAddPlaceClick}></button>
    </main>
  );
}

export default Main;
