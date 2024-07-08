import { Button } from "@/components/button";

import { Modal } from "antd";

type CreateTaskProps = {};

export const CreateTaskModal = (props: CreateTaskProps) => {
  return <Modal footer={<Button />} okText="Done"></Modal>;
};
