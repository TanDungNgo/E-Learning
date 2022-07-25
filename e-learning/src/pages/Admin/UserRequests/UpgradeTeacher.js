import React from "react";
import UpgradeRequestList from "./UpgradeRequestList";

import { useSelector, useDispatch } from "react-redux";
import { getPendingRequestTeacherAction } from "../../../redux/actions/UpgradeTeacherActions";
import { useEffect } from "react";

const UpgradeTeacher = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPendingRequestTeacherAction());
  }, []);
  const pendingRequests = useSelector(
    (state) => state.UpgradeTeacherReducer.pendingRequests
  );
  return (
    <>
      <UpgradeRequestList requestlist={pendingRequests} requestcontrol={true} />
    </>
  );
};

export default UpgradeTeacher;
