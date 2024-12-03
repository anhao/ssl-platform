import React from 'react';
import { PricingCard } from './PricingCard';

export function Pricing() {
  const plans = [
    {
      title: "DV 单域版",
      price: "20",
      features: [
        "域名验证",
        "256位加密",
        "单域名",
        "一年有效期",
        "浏览器安全锁",
        "24/7技术支持"
      ]
    },
    {
      title: "DV 通配符",
      price: "200",
      features: [
        "域名验证",
        "256位加密",
        "无限子域名",
        "一年有效期",
        "浏览器安全锁",
        "24/7技术支持"
      ],
      popular: true
    },
    {
      title: "IP证书",
      price: "20",
      features: [
        "域名验证",
        "256位加密",
        "单IP证书",
        "一年有效期",
        "浏览器安全锁",
        "24/7技术支持"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-16" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            简单透明的价格
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            选择最适合您需求的SSL证书
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}