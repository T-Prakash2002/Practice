import React from 'react';
import { Typography } from 'antd';

interface Rule {
  title: string;
  content: string[];
}

const agreementRules: Rule[] = [
  {
    title: "Acceptance of Terms",
    content: [
      "By using or accessing the service, you agree to comply with and be bound by these terms and conditions.",
      "If you do not agree with any part of the terms, you must not use the service."
    ]
  },
  {
    title: "User Responsibilities",
    content: [
      "Users must provide accurate and current information when registering or using the service.",
      "Users are responsible for maintaining the confidentiality of their account information and passwords.",
      "Users agree not to engage in any activity that could harm the service or its users, including but not limited to hacking, spreading malware, or other malicious actions."
    ]
  },
  {
    title: "Prohibited Conduct",
    content: [
      "Users are prohibited from using the service for any illegal activities.",
      "Harassment, abuse, or any form of discrimination against others is strictly forbidden.",
      "Users must not upload or share content that is offensive, defamatory, or violates intellectual property rights."
    ]
  },
  {
    title: "Intellectual Property",
    content: [
      "All content, trademarks, logos, and intellectual property associated with the service are owned by the provider and are protected by copyright and other laws.",
      "Users are granted a limited, non-exclusive, non-transferable license to access and use the service for personal, non-commercial purposes."
    ]
  },
  {
    title: "Termination of Service",
    content: [
      "The service provider reserves the right to terminate or suspend a user's access to the service at any time, without notice, for conduct that violates these terms or is harmful to others.",
      "Users may terminate their account at any time by following the account deletion process provided by the service."
    ]
  },
  {
    title: "Privacy and Data Protection",
    content: [
      "The service provider will collect, store, and use personal data in accordance with the privacy policy.",
      "Users must consent to the collection and use of their data as described in the privacy policy."
    ]
  },
  {
    title: "Limitation of Liability",
    content: [
      "The service provider is not liable for any damages or losses arising from the use of the service, including but not limited to data loss, security breaches, or service interruptions.",
      "The service is provided 'as is' without any warranties or guarantees."
    ]
  },
  {
    title: "Modification of Terms",
    content: [
      "The service provider reserves the right to modify these terms at any time. Users will be notified of significant changes, and continued use of the service will constitute acceptance of the revised terms.",
      "Users are responsible for regularly reviewing the terms to stay informed of any changes."
    ]
  },
  {
    title: "Governing Law",
    content: [
      "This agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which the service provider is based.",
      "Any disputes arising from this agreement shall be resolved in the courts of the same jurisdiction."
    ]
  },
  {
    title: "Dispute Resolution",
    content: [
      "In the event of a dispute, users agree to first attempt to resolve the issue through informal negotiation with the service provider.",
      "If the dispute cannot be resolved informally, it will be subject to binding arbitration or legal proceedings as stipulated in the governing law section."
    ]
  }
];

const AgreementPolicy: React.FC = () => {
  return (
    <div>
      <h1>Agreement Policy</h1>

      <Typography.Paragraph
      ellipsis={{ rows: 10, expandable: true, symbol: 'more' }}
      >
      {agreementRules.map((rule, index) => (
        <div key={index}>
          <h2 className='text-2xl font-bold'>{rule.title}</h2>
          <ul>
            {rule.content.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>
      ))}

      </Typography.Paragraph>

    </div>
  );
};

export default AgreementPolicy;
