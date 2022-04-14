import React, { FC, HTMLAttributes, ReactChild } from 'react';

const IkoCard: FC<Props> = ({ className, children }) => {
  let txtClass = 'iko-card';
  if (className) {
    txtClass += ' ' + className;
  }
  return <div className={txtClass}>{children}</div>;
};

const Header: FC<Props> = ({ children }) => {
  return <div className="iko-card__header">{children}</div>;
};

const Footer: FC<Props> = ({ children }) => {
  return <div className="iko-card__footer">{children}</div>;
};

const Body: FC<Props> = ({ children }) => {
  return <div className="iko-card__body">{children}</div>;
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  className: string;
}

export default Object.assign(IkoCard, {
  Header,
  Body,
  Footer,
});
