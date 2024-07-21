import 'index.css';
import React, { useState } from 'react';
import { Button } from 'antd';

import { CreateTaskModal } from 'features/tasks/create-task-modal';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            <Button onClick={handleOpenModal}>Open modal</Button>
            <CreateTaskModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
}

export default App;
