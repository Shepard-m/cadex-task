import { memo, useEffect } from "react";

import cls from "./PageLoader.module.scss";

export const PageLoader = memo(() => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "initial";
    };
  });

  return (
    <div className={cls.wrapper}>
      <span className={cls.loader}></span>
    </div>
  );
});

PageLoader.displayName = "PageLoader";
