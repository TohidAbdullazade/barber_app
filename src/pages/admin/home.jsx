import {Table} from "antd";

function Home() {
    return (
        <div>
            <h2 className="text-3xl font-bold my-5">Müştərilər</h2>
            <Table columns={[
                {
                    title: 'Ad',
                    dataIndex: 'name', // backend-den gelen fielda uygun yaz
                    align: 'center',
                },
                {
                    title: 'Mobil',
                    dataIndex: 'phone', // backend-den gelen fielda uygun yaz
                    align: 'center',
                },
                {
                    title: 'Gün',
                    dataIndex: 'day', // backend-den gelen fielda uygun yaz
                    align: 'center',
                },
                {
                    title: 'Saat',
                    dataIndex: 'hour', // backend-den gelen fielda uygun yaz
                    align: 'center',
                },
                {
                    title: 'Istək',
                    dataIndex: 'appeal', // backend-den gelen fielda uygun yaz
                    align: 'center',
                },

            ]}>

            </Table>
        </div>
    );
}

export default Home;