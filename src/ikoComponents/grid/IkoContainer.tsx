import React, { FC, HTMLAttributes, ReactChild } from 'react';

export const IkoContainer: FC<Props> = ({
  children,
  fluid,
  className,
  ...props
}) => {
  const container = fluid ? 'container-fluid' : 'container';
  return (
    <div
      className={`${container}${className ? ' ' + className : ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  className?: string;
  fluid?: boolean;
}
