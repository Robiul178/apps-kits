"use client";

import React from "react";
import IntegrationCard from "../common/integration-compo";

const Integration = ({ searchTerm }) => {
  const integrations = [
    {
      name: "Zapia",
      text: "Build custom automation and integration with other apps",
    },
    {
      name: "ChatGPT",
      text: "Anatural language processing tool diven by ai technology that allow you to have human-like conversation",
    },
    {
      name: "MailChimp",
      text: "Grow your business an all In one marketing automation and email marketing platform.",
    },
    {
      name: "Square",
      text: "Start selling right out of the box with payment processing, point-of-sale software and hardware",
    },
    {
      name: "WebFlow",
      text: "Create professional and custom website in a completly visual canvas with no code.",
    },
    {
      name: "Framer",
      text: "Design your website on a familiar canvas, Add animations, interactions and a CMS",
    },
    {
      name: "Stripe",
      text: "Stripe is a suite of APIs powering online payment processing and commerce solutions for internet business.",
    },
    {
      name: "Asana",
      text: "Track,manage,and connect your projects across any team,right from your dashboard",
    },
    {
      name: "Slack",
      text: "Send notification to channels and create projects from messages",
    },
  ];

  const filteredIntegrations = integrations.filter(
    (integration) =>
      integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      integration.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-5">
      <div>
        {filteredIntegrations.map((integration, index) => (
          <IntegrationCard
            key={index}
            name={integration.name}
            text={integration.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Integration;
