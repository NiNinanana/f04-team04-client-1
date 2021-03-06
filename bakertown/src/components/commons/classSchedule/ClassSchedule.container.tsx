import { useEffect, useState } from "react";
import ClassSchedulePresenter from "./ClassSchedule.presenter";
import { IClassScheduleContainer } from "./ClassSchedule.types";

const ClassScheduleContainer = (props: IClassScheduleContainer) => {
  const [isVisible, setIsVisible] = useState(false);
  // const [classSchedule, setClassSchedule] = useState([]);

  const toggleModal = () => {
    setIsVisible((prev) => !prev);
  };
  const reset = () => {
    // setClassSchedule([]);
    console.log(props.classSchedule);
    props.setClassSchedule([]);
  };

  return (
    <ClassSchedulePresenter
      isVisible={isVisible}
      toggleModal={toggleModal}
      classSchedule={props.classSchedule}
      reset={reset}
    />
  );
};

export default ClassScheduleContainer;
