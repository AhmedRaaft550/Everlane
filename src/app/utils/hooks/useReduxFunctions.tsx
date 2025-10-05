"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export const UseReduxFunctions = () => {
  const data = useSelector((state: RootState) => state.state.cart);
  const dispatch = useDispatch();
  return { data, dispatch };
};
