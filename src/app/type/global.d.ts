declare module "*.module.scss" {
  const classes: Record<string, string>;
  export default classes;
}

declare module "*.scss" {
  const content: string;
  export default content;
}

declare module "*.svg?url" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  import * as React from "react";
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

//Images
declare module "*.png" {
  const src: string;
  export default src;
}
declare module "*.jpg" {
  const src: string;
  export default src;
}
declare module "*.jpeg" {
  const src: string;
  export default src;
}
declare module "*.webp" {
  const src: string;
  export default src;
}
declare module "*.gif" {
  const src: string;
  export default src;
}
declare module "*.avif" {
  const src: string;
  export default src;
}
declare module "*.ico" {
  const src: string;
  export default src;
}
