import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { activateRegistration } from "../../redux/action-creators";

const RegistrationActivation = () => {
  const { uid = '', token = ''} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(activateRegistration({uid, token}))
  }, [uid, token])
  return <div className="">...Loading</div>;
};

export { RegistrationActivation };
