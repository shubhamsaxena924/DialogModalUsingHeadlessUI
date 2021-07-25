import React from 'react';
import { useState } from 'react';
import ConfirmationBox from './ConfirmationBox';
import MyModal from './Example';

function App() {

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
    <div className="flex items-center justify-center w-full h-screen m-auto bg-blue-600 bg-opacity-60">
      <button className="px-4 py-2 font-medium text-white duration-300 bg-black rounded-lg bg-opacity-20 hover:bg-opacity-30"
      onClick={() => setIsDialogOpen(true)}
      >Open Dialog</button>
    </div>
    {/* <MyModal/> */}
    <ConfirmationBox title="Are you sure?" desc="Do you really want to delete these records? This process cannot be undone." open={isDialogOpen} onClose={() => setIsDialogOpen(false)}/>
    </>
  );
}

export default App;
