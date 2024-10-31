import {Layout} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {Outlet} from "react-router-dom";

const AdminLayout = () => {

    return (
        <>
            <Layout className="h-screen">
                <Header/>
                <Layout>
                    <Content className="p-5 flex-grow bg-slate-50">
                        <Outlet/>
                    </Content>
                    <Footer className=" bg-slate-500">
                        <p className="flex justify-center items-center text-gray-400 text-lg">
                            © Copyright 2024 all rights reserved.
                        </p>

                    </Footer>

                </Layout>
            </Layout>
        </>
    );
};

export default AdminLayout;
