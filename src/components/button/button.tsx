import * as antd from 'antd';

import styled from 'styled-components';

export const Button = styled(antd.Button)`
    border-radius: 6px;
    background-color: #f24e1e;
    color: white;
`;

export const Modal = styled(antd.Modal)`
    .ant-modal {
        .ant-modal-footer {
            align-items: start;
        }
    }
`;
