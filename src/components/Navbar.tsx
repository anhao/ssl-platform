import React from 'react';
import {ShieldCheck} from 'lucide-react';
import {Menu, Button} from 'antd';
import type {MenuProps} from 'antd';

export function Navbar() {
  const menuItems: MenuProps['items'] = [
    {key: 'products', label: '产品'},
    {key: 'features', label: '特点'},
    {key: 'pricing', label: '价格'}
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center cursor-pointer">
            <ShieldCheck className="h-8 w-8 text-emerald-600"/>
            <span className="ml-2 text-xl font-bold text-gray-900">ALAPI · SSL证书</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Menu mode="horizontal" items={menuItems} className="border-none"/>
            <Button href={'https://kfurl.cn/ssl'} type="primary" className="bg-emerald-600 hover:bg-emerald-700">
              立即开始
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}