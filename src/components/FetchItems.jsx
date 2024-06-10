import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemsSlice";
import { fetchStatusAtion } from "../store/fetchStatusSlice";

function FetchItems() {
  const status = useSelector((store) => store.fetchStatus);

  const dispatch = useDispatch();
  useEffect(() => {
    if (status.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusAtion.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchStatusAtion.markFetchDone());
        dispatch(fetchStatusAtion.markFetchingEnded());
        dispatch(itemsAction.addInitialItems(data.items));
      });

    return () => {
      controller.abort();
    };
  }, [status]);
  return <></>;
}

export default FetchItems;
