import { DollarOutlined, SettingOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

export default function Dashboard() {
  return (
    <div className="p-8 min-h-screen bg-gray-50 border-t-2 ">
      <div className="flex justify-between items-center mt-6 mb-8 mx-4">
        <h1 className="text-[30px] font-bold">Dashboard</h1>
        <button className=" text-blue-600 text-[20px] py-4 px-10 rounded-lg border-2 border-gray-200">
        <SettingOutlined  className='pr-4 '/>Manage
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mx-4">
        <div className="px-10 py-10 bg-white rounded-lg shadow-md flex items-center justify-between">
          <div className="">
            <p className=" font-semibold text-[24px]">$10,540</p>
            <p className="text-gray-500 leading-8">Total Revenue</p>
            <p className="text-green-500 leading-8">22.45% ↑</p>
          </div>
          <DollarOutlined className="text-blue-500 text-4xl" />
        </div>
        <div className="p-10 py-10 bg-white rounded-lg shadow-md flex items-center justify-between">
          <div>
            <p className="font-semibold text-[24px]">$1,056</p>
            <p className="text-gray-500 leading-8">Orders</p>
            <p className="text-green-500 leading-8">22.45% ↑</p>
          </div>
          <ShoppingCartOutlined className="text-blue-500 text-4xl" />
        </div>
        <div className="p-10 py-10 bg-white rounded-lg shadow-md flex items-center justify-between">
          <div>
            <p className="font-semibold text-[24px] leading-8">$56</p>
            <p className="text-gray-500 leading-8">Active Sessions</p>
            <p className="text-red-500">2.45% ↓</p>
          </div>
          <UserOutlined className="text-blue-500 text-4xl" />
        </div>
        <div className="p-10 py-10 bg-white rounded-lg shadow-md flex items-center justify-between">
          <div>
            <p className="font-semibold text-[24px] leading-8">$56</p>
            <p className="text-gray-500 leading-8">Total Sessions</p>
            <p className="text-red-500">0.45% ↓</p>
          </div>
          <UserOutlined className="text-blue-500 text-4xl" />
        </div>
      </div>
    </div>
  );
}