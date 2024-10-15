import { DatePicker, Form, Input, Select } from "antd";
import React from "react";
import apointment from "../assets/images/apointment.png";

const Apointment = () => {
  return (
    <div className="relative">
      <img src={apointment} alt="" className="max-sm:hidden" />
      <div className="bg-red-500 absolute w-full top-[25%] max-sm:left-0  left-[20%] p-4">
        <h2 className="text-[40px] font-bold max-sm:text-xl my-2.5">
          Müraciət et
        </h2>
        <Form>
          <Form.Item>
            <Input
              placeholder="Adınızı qeyd edin"
              className="h-12 max-sm:w-full w-[800px]"
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder="Adınızı qeyd edin"
              className="h-12 max-sm:w-full w-[800px]"
            />
          </Form.Item>
          <Form.Item>
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
              className="max-sm:w-full w-[800px] h-12"
            />
          </Form.Item>
          <Form.Item>
            <DatePicker
              placeholder="Tarix qeyd edin"
              className="h-12 max-sm:w-full w-[800px]"
            />
          </Form.Item>
          <Form.Item>
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
              className="h-12 w-[800px]"
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Apointment;
