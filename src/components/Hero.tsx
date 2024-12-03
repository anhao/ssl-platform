import React from 'react';
import { Shield, Lock, CheckCircle } from 'lucide-react';
import { Button, Typography } from 'antd';
import { HeroFeatureCard } from './hero/HeroFeatureCard';

const { Title, Paragraph } = Typography;

const heroFeatures = [
  {
    icon: Shield,
    title: "最高安全性",
    description: "256位加密技术，提供终极保护"
  },
  {
    icon: Lock,
    title: "快速安装",
    description: "自动验证和安装流程"
  },
  {
    icon: CheckCircle,
    title: "99.9%浏览器信任",
    description: "受所有主流浏览器和设备信任"
  }
];

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Title level={1} className="!text-4xl sm:!text-5xl md:!text-6xl">
            为您的网站提供
            <span className="text-emerald-600"> SSL 安全证书</span>
          </Title>
          <Paragraph className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl max-w-3xl mx-auto">
            使用行业领先的 SSL 证书保护您的客户数据。
            快速颁发、价格优惠、全天候支持。
          </Paragraph>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Button href={'https://kfurl.cn/ssl'} type="primary" size="large" className="bg-emerald-600 hover:bg-emerald-700 h-12 px-8">
              立即开始
            </Button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          {heroFeatures.map((feature, index) => (
            <HeroFeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}