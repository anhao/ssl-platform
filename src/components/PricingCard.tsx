import React from 'react';
import { Check } from 'lucide-react';
import { Button, Card, Typography, List } from 'antd';

const { Title, Text } = Typography;

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export function PricingCard({ title, price, features, popular = false }: PricingCardProps) {
  return (
    <Card 
      className={`h-full ${popular ? 'border-2 border-emerald-500 transform scale-105' : ''}`}
      styles={{
        body: { 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column' 
        }
      }}
    >
      <div className="flex justify-between items-center">
        <Title level={3} className="!mb-0">{title}</Title>
        {popular && (
          <Text className="px-4 py-1 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-600">
            推荐
          </Text>
        )}
      </div>
      <div className="mt-4 flex items-baseline">
        <Title level={1} className="!mb-0">￥{price}</Title>
        <Text className="ml-1 text-xl text-gray-500">/年</Text>
      </div>
      <List
        className="mt-6 flex-grow"
        dataSource={features}
        renderItem={(feature) => (
          <List.Item className="border-none p-0 mb-4">
            <div className="flex items-start">
              <Check className="h-5 w-5 text-emerald-500 mt-1" />
              <Text className="ml-3">{feature}</Text>
            </div>
          </List.Item>
        )}
      />
      <Button
        href={'https://kfurl.cn/ssl'}
        type={popular ? "primary" : "default"}
        size="large"
        className={`mt-6 w-full ${
          popular ? 'bg-emerald-600 hover:bg-emerald-700' : 'border-emerald-600 text-emerald-600 hover:bg-emerald-50'
        }`}
      >
        立即购买
      </Button>
    </Card>
  );
}