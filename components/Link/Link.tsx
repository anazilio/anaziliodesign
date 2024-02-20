import NextLink from 'next/link';
import type { LinkProps } from 'next/link';
import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

export type ILinkProps = LinkProps & {
  label: string | ReactNode;
  target?: HTMLAttributeAnchorTarget;
};

export const Link = ({ label, target, ...props }: ILinkProps) => {
  return target ? (
    <NextLink {...props} legacyBehavior>
      <a target="_blank">{label}</a>
    </NextLink>
  ) : (
    <NextLink {...props}>{label}</NextLink>
  );
};
