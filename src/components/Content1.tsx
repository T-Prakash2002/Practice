import React, { useState } from "react";
import { Switch, Space, Typography } from "antd";

const Content1: React.FC = () => {
  const { Text, Link, Title, Paragraph } = Typography;
  const [ellipsis, setEllipsis] = useState<boolean>(true);

  return (
    <div className="grid items-center px-36" >
      <Space direction="vertical" >
        <Title level={1} className="text-center" underline>
          The Rise of AI in Everyday Applications
        </Title>

        <div className="flex flex-col">
        <Switch 
        checked={ellipsis}
        onChange={()=>setEllipsis(!ellipsis)}
        style={{
          width:"30px"
        }}
        />
          <Paragraph 
          ellipsis={ellipsis?{rows:3,expandable:true,symbol:'more'}:false}
          className="w-3/5"
          >
            Artificial Intelligence (AI) has rapidly become an integral part of
            our daily lives, seamlessly integrating into a variety of
            applications that we use regularly. From the personalized
            recommendations we receive on streaming platforms like Netflix to
            the voice-activated assistants like Siri and Alexa that manage our
            schedules, AI is transforming how we interact with technology. In
            healthcare, AI algorithms assist doctors in diagnosing diseases more
            accurately, while in finance, they help detect fraudulent activities
            and manage investments.The continuous advancements in AI are not
            only making our lives more convenient but also revolutionizing
            industries by increasing efficiency, reducing costs, and opening up
            new possibilities for innovation. As AI technology continues to
            evolve, its influence on our daily lives is expected to grow even
            further, making it an indispensable tool in the modern world.
          </Paragraph>
        </div>
      </Space>
    </div>
  );
};

export default Content1;
