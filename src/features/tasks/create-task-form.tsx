import { Checkbox, DatePicker, Form, Input, Upload } from 'antd';
import { PriorityCheckbox } from 'components/checkbox';
import TextArea from 'antd/es/input/TextArea';

export const CreateTaskForm = () => {
    return (
        <Form layout="vertical">
            <div className="flex flex-row">
                <div className="flex flex-col w-3/4">
                    <Form.Item label={<div className="font-bold">Title</div>}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Date">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="Description">
                        <Checkbox.Group className="flex flex-row w-1/2 gap-8">
                            <PriorityCheckbox priority="Extreme" />
                            <PriorityCheckbox priority="Moderate" />
                            <PriorityCheckbox priority="Low" />
                        </Checkbox.Group>
                    </Form.Item>
                    <Form.Item label="Task Description">
                        <TextArea placeholder="Start writing here" />
                    </Form.Item>
                </div>
                <div className="flex flex-col w-1/2 gap-8">
                    <Upload.Dragger />
                </div>
            </div>
        </Form>
    );
};
