import { InlineMath } from 'react-katex';

export const RenderKetex = ({
  value,
  is_katex,
  className,
}: {
  value: string;
  is_katex: boolean;
  className?: string;
}) => {
  let katexArray: string[] = [];

  const splitKatex = (pattern: string[]) => {
    const katexified = value
      .split(pattern[0])
      .join('**')
      .split(pattern[1])
      .join('**');

    katexArray = katexified.split('**');
  };
  if (!is_katex) {
    return <span className={className}>{value}</span>;
  }
  if (!value) {
    return null;
  }
  if (value.includes('[[$$')) {
    splitKatex(['[[$$', '$$]]']);
  } else if (value.includes('[[$')) {
    splitKatex(['[[$', '$]]']);
  } else if (value.includes('((($')) {
    splitKatex(['((($', '$)))']);
  } else {
    return <span>{value}</span>;
  }

  return (
    <>
      {katexArray.map((item, i) => {
        if (i % 2 == 0) {
          return item;
        } else {
          return (
            <InlineMath
              key={i}
              renderError={(error) => {
                return <b>Fail: {error.name}</b>;
              }}
            >
              {item}
            </InlineMath>
          );
        }
      })}
    </>
  );
};
