import { useEffect, useState } from "react";
import ClassDetailPresenter from "./ClassDetail.presenter";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { firebaseApp } from "../../../../../pages/_app";
import { useRouter } from "next/router";

const ClassDetailContainer = () => {
  const router = useRouter();

  const [myStore, setMyStore] = useState({
    address: "",
    category: "",
    className: "",
    contents: "",
    patissier: "",
    price: "",
  });

  useEffect(async () => {
    const product = doc(
      getFirestore(firebaseApp),
      "class",
      String(router.query.classId)
    );
    const result = await getDoc(product);
    const aaa = result.data();
    console.log(aaa);
    setMyStore({
      address: aaa?.address,
      category: aaa?.category,
      className: aaa?.className,
      contents: aaa?.contents,
      patissier: aaa?.patissier,
      price: aaa?.price,
    });
  }, []);

  return <ClassDetailPresenter myStore={myStore} />;
};

export default ClassDetailContainer;
