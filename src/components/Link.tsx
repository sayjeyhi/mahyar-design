import React from 'react';

import NextLink from 'next/link';

type Props = {
  to?: string;
  href?: string;
  children: JSX.Element | Array<JSX.Element>;
};

const Link = ({ to, href, children }: Props) => (
  <NextLink href={to || href || ''}>
    <a>{children}</a>
  </NextLink>
);

export default Link;
