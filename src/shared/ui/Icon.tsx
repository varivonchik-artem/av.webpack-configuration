import React from "react";
import clx from "classnames";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const Icon = (props: IconProps) => {
  const { className, Svg, ...rest } = props;

  return <Svg className={clx(className, "icon")} {...rest} />;
};
