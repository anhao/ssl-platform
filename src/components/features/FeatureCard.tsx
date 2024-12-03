import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <div className="flex items-center">
        <Icon className="h-6 w-6 text-emerald-600" />
        <Title level={4} className="!mb-0 ml-3">{title}</Title>
      </div>
      <Paragraph className="mt-4 text-gray-600">{description}</Paragraph>
    </Card>
  );
}