import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, X } from 'lucide-react';

interface NodeData {
  id: string;
  label: string;
  x: number;
  y: number;
  type?: 'root' | 'branch' | 'leaf';
  color?: string; // border color
}

const nodes: NodeData[] = [
  // Center Root
  { id: 'root', label: '动力电池', x: 400, y: 300, type: 'root', color: 'border-red-400' },
  
  // Left Branch
  { id: 'l1', label: '电池材料', x: 200, y: 150, type: 'branch' },
  { id: 'l2', label: '电池管理系统(BMS)', x: 200, y: 220, type: 'branch' },
  { id: 'l3', label: '电池制造设备', x: 200, y: 290, type: 'branch' },
  { id: 'l4', label: '电池回收技术', x: 200, y: 360, type: 'branch' },
  { id: 'l5', label: 'PACK集成技术', x: 200, y: 430, type: 'branch' },

  // Right Branch - Main
  { id: 'r1', label: '电池模组', x: 600, y: 300, type: 'branch', color: 'border-blue-400' },
  
  // Right Branch - Others
  { id: 'r2', label: '汽车电子', x: 600, y: 500, type: 'branch' },
  { id: 'r3', label: '充电桩', x: 600, y: 600, type: 'branch' },
  { id: 'r4', label: '充电站', x: 600, y: 670, type: 'branch' },
  { id: 'r5', label: '电网改造', x: 600, y: 740, type: 'branch' },
  { id: 'r6', label: '智能充电管理系统', x: 600, y: 810, type: 'branch' },
  { id: 'r7', label: '换电设备', x: 600, y: 880, type: 'branch' },
  { id: 'r8', label: '储能系统', x: 600, y: 950, type: 'branch' },

  // Children of 电池模组 (r1)
  { id: 'r1-1', label: '私人用车市场', x: 900, y: 150, type: 'leaf', color: 'border-green-400' },
  { id: 'r1-2', label: '公共交通', x: 900, y: 220, type: 'leaf', color: 'border-blue-400' },
  { id: 'r1-3', label: '网约车/出租车', x: 900, y: 290, type: 'leaf', color: 'border-blue-400' },
  { id: 'r1-4', label: '物流运输', x: 900, y: 360, type: 'leaf', color: 'border-blue-400' },
  { id: 'r1-5', label: '汽车租赁', x: 900, y: 430, type: 'leaf', color: 'border-blue-400' },
  { id: 'r1-6', label: '电池回收与梯次利用', x: 900, y: 500, type: 'leaf', color: 'border-pink-400' },
  
  // Sub-child of 电池材料 (just for visual balance if needed, but screenshot doesn't show much)
  { id: 'l1-1', label: '轻量化材料', x: 400, y: 950, type: 'leaf' },
];

const GraphCanvas: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>('r1'); // Default select '电池模组'

  // Helper to draw bezier curves
  const drawPath = (start: NodeData, end: NodeData) => {
    const startX = start.x + (start.x < end.x ? 80 : -80); // Adjust based on direction
    const startY = start.y;
    const endX = end.x + (start.x < end.x ? -80 : 80);
    const endY = end.y;
    
    const c1x = startX + (endX - startX) / 2;
    const c1y = startY;
    const c2x = startX + (endX - startX) / 2;
    const c2y = endY;

    return `M ${startX} ${startY} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${endX} ${endY}`;
  };

  return (
    <div className="flex-1 bg-gray-50 relative overflow-hidden cursor-grab active:cursor-grabbing">
      {/* Canvas Container with Zoom/Pan simulation (static for now) */}
      <div className="absolute inset-0 transform scale-75 origin-top-left translate-x-20 translate-y-20">
        <svg className="w-[1500px] h-[1200px] pointer-events-none">
          {/* Connections */}
          {/* Root to Left */}
          {nodes.filter(n => n.id.startsWith('l') && n.id.length === 2).map(node => (
            <path key={`root-${node.id}`} d={`M 400 300 C 300 300, 300 ${node.y}, ${node.x + 80} ${node.y}`} fill="none" stroke="#E5E7EB" strokeWidth="2" />
          ))}
          {/* Root to Right Main */}
          <path d="M 480 300 C 540 300, 540 300, 600 300" fill="none" stroke="#F87171" strokeWidth="2" />
          {/* Root to Right Others */}
           {nodes.filter(n => n.id.startsWith('r') && n.id !== 'r1' && n.id.length === 2).map(node => (
            <path key={`root-${node.id}`} d={`M 440 300 C 500 300, 500 ${node.y}, ${node.x - 60} ${node.y}`} fill="none" stroke="#FCA5A5" strokeWidth="2" />
          ))}
          {/* R1 to R1-Children */}
          {nodes.filter(n => n.id.startsWith('r1-')).map(node => (
            <path key={`r1-${node.id}`} d={`M 680 300 C 800 300, 800 ${node.y}, ${node.x - 80} ${node.y}`} fill="none" stroke="#60A5FA" strokeWidth="2" />
          ))}
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
          <div
            key={node.id}
            onClick={() => setSelectedNode(node.id)}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-sm border hover:shadow-md transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              node.color || 'border-gray-200'
            } ${selectedNode === node.id ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}
            style={{ left: node.x, top: node.y }}
          >
            {node.id.startsWith('r1-') && <Plus className="w-3 h-3 text-gray-400" />}
            <span className="text-sm font-medium text-gray-700">{node.label}</span>
            {node.type !== 'leaf' && <div className="w-2 h-2 bg-gray-300 rounded-full ml-1" />}
          </div>
        ))}

        {/* Tooltip Card for '电池模组' */}
        {selectedNode === 'r1' && (
          <div className="absolute left-[650px] top-[300px] bg-white rounded-xl shadow-xl border border-gray-100 w-64 z-50 animate-in fade-in zoom-in duration-200">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-blue-50/50 rounded-t-xl">
              <h3 className="font-bold text-gray-900">电池模组 节点现状</h3>
              <ArrowRight className="w-4 h-4 text-blue-500" />
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">企业</span>
                <span className="font-bold text-gray-900">3232 <span className="text-xs font-normal text-gray-400">家</span></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">人才</span>
                <span className="font-bold text-gray-900">26218 <span className="text-xs font-normal text-gray-400">人</span></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">成果</span>
                <span className="font-bold text-gray-900">234 <span className="text-xs font-normal text-gray-400">项</span></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">需求</span>
                <span className="font-bold text-gray-900">521 <span className="text-xs font-normal text-gray-400">个</span></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">项目</span>
                <span className="font-bold text-gray-900">62 <span className="text-xs font-normal text-gray-400">个</span></span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Controls */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-2">
        <button className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 text-gray-600">
          <Plus className="w-5 h-5" />
        </button>
        <button className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 text-gray-600">
          <Minus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default GraphCanvas;
