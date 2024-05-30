import React from "react";
import { Pagination } from "@nextui-org/react";

export default function PaginationPage() {
  return (
    <Pagination
      showControls
      total={5}
      size="lg"
      radius="full"
      color="secondary"
      initialPage={3}
      className="flex justify-center mt-10 "
    />
  );
}
