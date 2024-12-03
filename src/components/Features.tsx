import React from 'react';
import { Typography } from 'antd';
import { FeatureCard } from './features/FeatureCard';
import { features } from './features/featureData';

const { Title, Paragraph } = Typography;

export function Features() {
  return (
    <div className="py-16 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Title level={2} className="!text-3xl sm:!text-4xl">
            为什么选择我们的SSL证书？
          </Title>
          <Paragraph className="mt-4 text-lg text-gray-600">
            行业领先的功能，确保您的网站安全可信
          </Paragraph>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}