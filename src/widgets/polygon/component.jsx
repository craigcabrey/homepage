import { useState } from "react";
import { useTranslation } from "next-i18next";
import classNames from "classnames";

import Container from "components/services/widget/container";
import Block from "components/services/widget/block";
import Dropdown from "components/services/dropdown";
import useWidgetAPI from "utils/proxy/use-widget-api";

export default function Component({ service }) {
  const { t } = useTranslation();

  const { widget } = service;

  const params = {
    ticker: widget.symbols.join(","),
  };

  const { data: data, error: error } = useWidgetAPI(widget, "v3/reference/tickers", params);

  return (
    <Container service={service}>
      <div className={classNames(service.description ? "-top-10" : "-top-8", "absolute right-1")}>
      </div>

      <div className="flex flex-col w-full">
      </div>
    </Container>
  );
}
