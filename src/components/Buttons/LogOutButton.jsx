import React,  { Children } from 'react';
import { Button, ConfigProvider } from 'antd';
import { createStyles } from 'antd-style';

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
        background: linear-gradient(135deg,rgb(255, 62, 62),rgb(137, 2, 2));
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
const LogOutButton = ({
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
    </ConfigProvider>
  );
};
export default LogOutButton;