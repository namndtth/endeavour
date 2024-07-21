import { Button, Modal } from 'antd';
import { CreateTaskForm } from 'features/tasks/create-task-form';

type CreateTaskProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export const CreateTaskModal = (props: CreateTaskProps) => {
    const { isOpen, setIsOpen } = props;

    const handleOk = () => {
        setIsOpen(false);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    return (
        <Modal
            footer={null}
            open={isOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width="1024px"
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between h-6">
                    <div className="inline-block text-lg font-bold">
                        Add New Task
                    </div>
                    <Button className="text-lg font-bold border-none underline">
                        Go Back
                    </Button>
                </div>

                <CreateTaskForm />

                <div className="flex flex-start">
                    <Button className="caret-amber-500">Done</Button>
                </div>
            </div>
        </Modal>
    );
};
