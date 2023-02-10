import { HtmlHTMLAttributes } from 'react';

export type CardProps = {
  avatar_url?: string;
  name?: string;
  login?: string;
  twitter_username?: string;
  bio?: string;
  followers?: number;
  following?: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
} & HtmlHTMLAttributes<HTMLElement>;
