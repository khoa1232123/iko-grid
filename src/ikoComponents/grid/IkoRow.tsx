import React, { FC, HTMLAttributes, ReactChild } from 'react';

export const IkoRow: FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`iko-row${className ? ' ' + className : ''}`} {...props}>
      {children}
    </div>
  );
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  className: string;
}
