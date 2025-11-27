import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-8 mb-8 text-sm text-gray-600">
          <a href="#" className="hover:text-blue-600">友情链接</a>
          <a href="#" className="hover:text-blue-600">友情链接1</a>
          <a href="#" className="hover:text-blue-600">友情链接2</a>
          <a href="#" className="hover:text-blue-600">关于企业</a>
          <a href="#" className="hover:text-blue-600">公司简介</a>
          <a href="#" className="hover:text-blue-600">联系我们</a>
        </div>
        <p className="text-xs text-gray-400">备案号备案号备案号备案号</p>
      </div>
    </footer>
  );
};

export default Footer;
