import { Modal, Button } from 'components/button';
import {
    ProForm,
    ProFormUploadDragger,
    ProFormText,
} from '@ant-design/pro-components';

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
            footer={<Button>Done</Button>}
            open={isOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <>
                Add new task
                <Button>Go back</Button>
            </>
            <ProForm>
                <ProForm.Group>
                    <ProFormText></ProFormText>
                    <ProFormUploadDragger></ProFormUploadDragger>
                </ProForm.Group>
            </ProForm>
        </Modal>
    );
};
