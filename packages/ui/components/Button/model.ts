import React, { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  block?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  padding?: string;
  height?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
