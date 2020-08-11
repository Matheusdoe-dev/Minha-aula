import { useState, ChangeEvent } from "react";

const ScheduleItems = () => {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  const addScheduleItem = (event: ChangeEvent<EventTarget>) => {
    event.preventDefault();
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  };

  const setScheduleItemValue = (
    position: number,
    field: string,
    value: string
  ) => {
    const newArray = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(newArray);
    console.log(scheduleItems);
  };

  return {
    scheduleItems,
    setScheduleItemValue,
    addScheduleItem,
  };
};

export default ScheduleItems;
