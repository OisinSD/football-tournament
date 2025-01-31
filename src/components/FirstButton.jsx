// import React, { Children } from "react";
// import { Button } from "antd";

// const FirstButton = ({
//     children
// }) => {
//     return (
//         <Button>
//             {children}
//         </Button>
//     );
// };

// export default FirstButton;

import React,  { Children } from 'react';
import { Button, ConfigProvider } from 'antd';
import { createStyles } from 'antd-style';
// import { AntDesignOutlined } from '@ant-design/icons';

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(
        .${prefixCls}-btn-dangerous
        ) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg,rgb(62, 91, 255),rgb(199, 118, 247));
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));
const FirstButton = ({
    children,
    onClick = () => {},
    height = 40,
    style = {},
    className,
}) => {

  const { styles } = useStyle();
  return (
    <ConfigProvider
      button={{
        className: styles.linearGradientButton,
      }}
    >
      {/* <Space> */}
        <Button 
        type="primary" 
        size="large" 
        onClick={onClick}
        style = {{ height, ...style }}
        className={`${className && className} btn-grad-disabled`}
       >
         {children}
        </Button>
        {/* <Button size="large">{childern}</Button> */}
      {/* </Space> */}
    </ConfigProvider>
  );
};
export default FirstButton;