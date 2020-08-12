import { useState } from "react";

const ScheduleItems = () => {
  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: "",
      to: "",
    },
  ]);

  const addNewScheduleItem = () => {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  };

  const setScheduleItemValue = (
    position: number,
    field: string,
    value: string
  ) => {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    console.log(updatedScheduleItems);
    setScheduleItems(updatedScheduleItems);
    console.log(scheduleItems);
  };

  return {
    scheduleItems,
    setScheduleItemValue,
    addNewScheduleItem,
  };
};

export default ScheduleItems;
