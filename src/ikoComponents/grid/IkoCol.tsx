import React, { FC, HTMLAttributes, ReactChild } from 'react';

export const IkoCol: FC<Props> = ({
  children,
  col,
  mdCol,
  smCol,
  className,
  ...props
}) => {
  const iCol = col ? `iko-col-${col}` : 'iko-col';
  const iMdCol = mdCol ? ` iko-col-md-${mdCol}` : '';
  const iSmCol = smCol ? ` iko-col-sm-${smCol}` : '';
  return (
    <div
      className={`${iCol}${iMdCol}${iSmCol}${className ? ' ' + className : ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  col?: number;
  mdCol?: number;
  smCol?: number;
  className?: string;
}
