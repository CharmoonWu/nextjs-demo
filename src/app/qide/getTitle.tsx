"use client";

import React from "react";

import { useSuspenseQuery } from "@tanstack/react-query";
import { loginReg } from "service/authService";

type title = {
  name?: string;
  code?: string;
  image?: string;
};

export default function GetTitle() {
  const { data: getTitle }: any = useSuspenseQuery({
    queryKey: ["getTitle", "zh_CN"],
    queryFn: () => loginReg.getTitle({ lang: "zh_CN" }),
  });
  console.log(getTitle);

  return (
    <div>
      {getTitle?.map((v: title) => {
        return <div key={v.code}>{v.name}</div>;
      })}
    </div>
  );
}
