import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface HeroFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function HeroFeatureCard({ icon: Icon, title, description }: HeroFeatureCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <div className="flex items-center">
        <Icon className="h-6 w-6 text-emerald-600" />
        <Title level={5} className="!mb-0 ml-2">{title}</Title>
      </div>
      <Paragraph className="mt-2 text-gray-500">{description}</Paragraph>
    </Card>
  );
}