"use client";

import { TailSpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <TailSpin
      visible={true}
      height="50"
      width="50"
      color="#e44233"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  )
}

export default Spinner