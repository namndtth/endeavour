import { Checkbox } from 'antd';

type CheckboxProps = {
    priority: 'Extreme' | 'Moderate' | 'Low';
};

export const PriorityCheckbox = ({ priority }: CheckboxProps) => {
    let color;

    switch (priority) {
        case 'Extreme':
            color = 'bg-red-500';
            break;
        case 'Moderate':
            color = 'bg-cyan-500';
            break;
        case 'Low':
            color = 'bg-green-500';
            break;
    }

    return (
        <div className="flex items-center flex-row gap-1">
            <div className={`w-2 h-2 rounded ${color} mr-1`} />
            {priority}
            <Checkbox className="ml-1" />
        </div>
    );
};
