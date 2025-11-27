import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Settings, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">智慧科创公共服务平台</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">首页</Link>
            <Link to="/report" className="text-gray-700 hover:text-blue-600 font-medium">智能报告</Link>
            <Link to="/graph" className="text-gray-700 hover:text-blue-600 font-medium">科创图谱</Link>
            <Link to="/datasets" className="text-gray-700 hover:text-blue-600 font-medium">科创数据集</Link>
            <Link to="/api" className="text-gray-700 hover:text-blue-600 font-medium">数据API</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Settings className="w-5 h-5" />
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
              <User className="w-4 h-4" />
              <span>登录/注册</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;