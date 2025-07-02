// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import type { RootState } from "../store";
// import { getUsers } from "../store/actions/UserActions";

// const Crud = () => {
//   const dispatch = useDispatch();
//   const { user, loading } = useSelector((state: RootState) => state.user);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     id: null as null | number,
//   });

//   useEffect(()=>{
//     dispatch(getUsers()as any)

//   },[])

//   return <div></div>;
// };

// export default Crud;
