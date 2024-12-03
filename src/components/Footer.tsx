import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Typography, Layout } from 'antd';

const { Title, Text } = Typography;
const { Footer: AntFooter } = Layout;

const SSL_URL = 'https://kfurl.cn/ssl';

export function Footer() {
  return (
    <AntFooter className="bg-gray-900 p-0">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <ShieldCheck className="h-8 w-8 text-emerald-500" />
              <Text className="ml-2 text-xl font-bold text-white">SSL证书</Text>
            </div>
            <Text className="mt-4 block text-gray-400">
              为您的在线业务提供行业领先的SSL证书保护
            </Text>
          </div>
          
          <div>
            <Title level={5} className="!text-gray-400 !mb-4">产品</Title>
            <div className="flex flex-col space-y-4">
              <a href={SSL_URL} className="text-gray-300 hover:text-emerald-400 transition-colors">基础版 SSL</a>
              <a href={SSL_URL} className="text-gray-300 hover:text-emerald-400 transition-colors">企业版 SSL</a>
              <a href={SSL_URL} className="text-gray-300 hover:text-emerald-400 transition-colors">增强版 SSL</a>
              <a href={SSL_URL} className="text-gray-300 hover:text-emerald-400 transition-colors">通配符 SSL</a>
            </div>
          </div>

          <div>
            <Title level={5} className="!text-gray-400 !mb-4">支持</Title>
            <div className="flex flex-col space-y-4">
              <a href={SSL_URL} className="text-gray-300 hover:text-emerald-400 transition-colors">使用文档</a>
              <a href={SSL_URL} className="text-gray-300 hover:text-emerald-400 transition-colors">知识库</a>
              <a href={SSL_URL} className="text-gray-300 hover:text-emerald-400 transition-colors">联系支持</a>
              <a href={SSL_URL} className="text-gray-300 hover:text-emerald-400 transition-colors">服务状态</a>
            </div>
          </div>

          <div>
            <Title level={5} className="!text-gray-400 !mb-4">公司</Title>
            <div className="flex flex-col space-y-4">
              <a href={SSL_URL} className="text-gray-300 hover:text-emerald-400 transition-colors">关于我们</a>
              <a href={SSL_URL} className="text-gray-300 hover:text-emerald-400 transition-colors">博客</a>
              <a href={SSL_URL} className="text-gray-300 hover:text-emerald-400 transition-colors">合作伙伴</a>
              <a href={SSL_URL} className="text-gray-300 hover:text-emerald-400 transition-colors">招贤纳士</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <Text className="text-center block text-gray-400">
            © {new Date().getFullYear()} SSL证书. 保留所有权利。
          </Text>
        </div>
      </div>
    </AntFooter>
  );
}