import React from 'react';
import { Bot, Send, Sparkles } from 'lucide-react';

const AIAgentSection: React.FC = () => {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden mb-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600" />
      
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 p-8 md:p-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white">AI 科创智能体</h2>
        </div>
        <p className="text-blue-100 mb-8">即时响应，新一代科创全流程伴侣</p>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-2 shadow-2xl flex items-center gap-2">
          <div className="pl-4 text-gray-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <input 
            type="text" 
            placeholder="请输入您的问题，例如：帮我分析一下重庆的新能源汽车产业政策..." 
            className="flex-1 py-4 px-2 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
          />
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2">
            <Send className="w-4 h-4" />
            发送
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6 text-sm text-blue-100/80">
          <span>推荐搜索：</span>
          {['锂电池', '联网汽车', '光伏产业', '生物医药'].map((tag) => (
            <button key={tag} className="px-3 py-1 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIAgentSection;
