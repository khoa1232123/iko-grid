import React, { FC, ButtonHTMLAttributes, ReactChild } from 'react';

export const IkoButton: FC<Props> = ({
  bgColor,
  color,
  size,
  icon,
  className,
  onClick,
  children,
  iconRight,
  outline,
  borderColor,
  block,
  ...props
}) => {
  let classTxt = 'iko-btn';

  if (outline) {
    classTxt += ' iko-btn-outline';
  } else if (bgColor) {
    classTxt += ' bg-' + bgColor;
  } else {
    classTxt += ' bg-blue';
  }

  if (block) {
    classTxt += ' iko-btn-block';
  }

  if (borderColor) {
    classTxt += ' border-' + borderColor;
  }

  if (color) {
    classTxt += ' color-' + color;
  }

  if (size) {
    classTxt += ' iko-btn-' + size;
  }
  if (className) {
    classTxt += ' ' + className;
  }

  return (
    <button className={classTxt} onClick={onClick} {...props}>
      {icon && !iconRight ? <i className={icon + ' icon-left'}></i> : null}
      <span className="iko-btn__txt">{children}</span>
      {icon && iconRight ? <i className={icon + ' icon-right'}></i> : null}
    </button>
  );
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactChild;
  className: string;
  bgColor: string;
  color: string;
  size: string;
  icon: string;
  onClick: any;
  iconRight: boolean;
  outline: boolean;
  borderColor: string;
  block: boolean;
}
