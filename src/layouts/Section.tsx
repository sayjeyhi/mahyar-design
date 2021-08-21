import { ReactNode } from 'react';

import cn from 'classnames';

type ISectionProps = {
  title?: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div className={cn('max-w-screen-lg mx-auto px-3', props.className)}>
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl text-gray-900 font-bold">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
