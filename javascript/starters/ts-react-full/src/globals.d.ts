declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import { HTMLAttributes } from 'react';
  const value: React.ComponentType<HTMLAttributes<SVGElement>>;
  export default value;
}
