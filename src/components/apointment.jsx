import { Button, DatePicker, Form, Input, Select } from "antd";
import React from "react";

const Apointment = () => {
  const handleApointment = (values) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col items-center gap-5 px-4">
      <h2 className="font-bold text-4xl my-8 ">Müraciət et</h2>
      <Form
        onFinish={handleApointment}
        labelCol={{ span: 24 }}
        className="w-full grid grid-cols-2 gap-5 max-sm:flex max-sm:flex-col"
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Ad tələb olunur" }]}
          label={<span>Name</span>}
        >
          <Input
            placeholder="Adınızı qeyd edin"
            className="h-12 max-sm:w-full "
          />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "Nömrə tələb olunur" },
            {
              pattern: "^[0-9]*$",
              message: "Yalnız nömrə daxil edilməlidir",
            },
          ]}
          label={<span>Nömrə</span>}
        >
          <Input
            placeholder="Nömrənizi qeyd edin"
            className="h-12 max-sm:w-full"
          />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Müraciətinizi qeyd edin" }]}
          label={<span>Müraciət</span>}
          name="apeal"
        >
          <Select
            options={[
              {
                label: "Saç  kəsimi",
                value: 10,
              },
              {
                label: "Təraş",
                value: 3,
              },
              {
                label: "Saç + Təraş",
                value: 15,
              },
              {
                label: "Kantların  duzəldilməsi",
                value: 5,
              },
            ]}
            placeholder="Müraciətinizi qeyd edin"
            className="max-sm:w-full h-12"
          />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Günü qeyd edin" }]}
          label={<span>Gün</span>}
          name="date"
        >
          <DatePicker
            placeholder="Tarix qeyd edin"
            className="h-12 max-sm:w-full w-[891px]"
          />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Saatı qeyd edin" }]}
          label={<span>Saat</span>}
          name="time"
        >
          <Select
            options={[
              {
                label: "10:00",
                value: "10:00",
              },
              {
                label: "11:00",
                value: "11:00",
              },
              {
                label: "12:00",
                value: "12:00",
              },
              {
                label: "13:00",
                value: "13:00",
              },
              {
                label: "14:00",
                value: "14:00",
              },
              {
                label: "15:00",
                value: "15:00",
              },
              {
                label: "16:00",
                value: "16:00",
              },
              {
                label: "17:00",
                value: "17:00",
              },
              {
                label: "18:00",
                value: "18:00",
              },
              {
                label: "19:00",
                value: "19:00",
              },
              {
                label: "20:00",
                value: "20:00",
              },
              {
                label: "21:00",
                value: "21:00",
              },
              {
                label: "22:00",
                value: "22:00",
              },
            ]}
            placeholder="Saat qeyd edin"
            className="h-12 max-sm:w-full "
          />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            className="h-12 mt-10  w-full text-white bg-yellow-600"
          >
            Müraciət et
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Apointment;
