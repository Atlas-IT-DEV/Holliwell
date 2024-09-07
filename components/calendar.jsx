import { View } from "react-native";

import { Calendar, LocaleConfig } from "react-native-calendars";

const GetCalendar = () => {
  LocaleConfig.defaultLocale["ru"] = {
    monthNames: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    dayNames: [
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота",
      "воскресенье",
    ],
    dayNamesShort: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
  };
  LocaleConfig.locales.ru = LocaleConfig.locales[""];
  return (
    <Calendar
      firstDay={1}
      theme={{
        backgroundColor: "#ffffff",
        calendarBackground: "#ffffff",
        textSectionTitleColor: "#b6c1cd",
        selectedDayBackgroundColor: "#00adf5",
        selectedDayTextColor: "#ffffff",
        todayTextColor: "",
        dayTextColor: "#2d4150",
        textDisabledColor: "#d9e1e8",
        dotColor: "#00adf5",
        selectedDotColor: "#ffffff",
        arrowColor: "rgba(18,18,18,1)",
        monthTextColor: "rgba(18,18,18,1)",
        indicatorColor: "blue",
        textDayFontFamily: "monospace",
        textMonthFontFamily: "GeologicaRegular",
        textDayHeaderFontFamily: "monospace",
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
      }}
    />
  );
};
export default GetCalendar;
