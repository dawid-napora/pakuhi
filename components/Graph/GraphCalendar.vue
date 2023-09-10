<script setup lang="ts">
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";

dayjs.extend(weekday);

const props = withDefaults(
  defineProps<{
    year?: number;
  }>(),
  {
    year: new Date().getFullYear(),
  }
);

// get the week number in a year for a given date
const getWeekNumber = (date: Date) => {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

// format date
const formatDate = (date: Date) => {
  return dayjs(date).format("YYYY-MM-DD");
};

// array of dates in a year
const daysInYear = computed(() => {
  const days: {
    date: Date;
    week: number;
    weekDay: number;
    formatted: string;
  }[] = [];

  const daysInYear = props.year % 4 == 0 ? 366 : 365;

  for (let i = 0; i < daysInYear; i++) {
    const date = new Date(props.year, 0, i + 1);
    const week = getWeekNumber(date);
    const weekDay = date.getDay();
    const formatted = formatDate(date);
    days.push({ date, week, weekDay, formatted });
  }

  return days;
});

const firstSundays = computed(() => {
  return Array.from({ length: 12 }).map((_, i) => {
    const day = dayjs(new Date(props.year, i, 1));
    const firstSunday = day.weekday() === 0 ? day : day.weekday(7);
    const firstSundayDate = firstSunday.toDate();
    const firstSundayMonth = firstSunday.month();
    const firstSundayMonthName = firstSunday.format("MMM");
    const firstSundayWeek = getWeekNumber(firstSundayDate);

    return {
      date: firstSundayDate,
      dayjs: firstSunday,
      month: firstSundayMonth,
      monthName: firstSundayMonthName,
      weekNumber: firstSundayWeek,
    };
  });
});
</script>

<template>
  <div class="graph-calendar">
    <div class="graph-calendar__wrapper grid">
      <div
        class="graph-calendar__header flex items-center gap-4 mb-4 justify-between"
      >
        <div class="flex items-center gap-4">
          <span class="font-medium text-neutral-800">{{ year }}</span>
        </div>
        <div class="flex items-center gap-4">
          <graph-calendar-legend />
        </div>
      </div>
      <div
        class="graph-calendar__months mb-1 grid grid-cols-[repeat(53,_minmax(1rem,_1fr))] gap-1 text-xs font-medium text-neutral-600 select-none"
      >
        <div
          v-for="sunday in firstSundays"
          class="graph-calendar__month"
          :style="{
            gridColumnStart: sunday.weekNumber,
            gridColumnEnd: sunday.weekNumber + 1,
          }"
        >
          <span>{{ sunday.monthName }}</span>
        </div>
      </div>
      <div
        class="graph-calendar__content grid grid-cols-[repeat(53,_minmax(1rem,_1fr))] grid-rows-[repeat(7,_minmax(1rem,_1fr)))] gap-1"
      >
        <button
          v-for="day in daysInYear"
          :key="day.formatted"
          :data-date="day.formatted"
          :data-week="day.week"
          :data-weekday="day.weekDay"
          :class="[
            'graph-calendar__day',
            `graph-calendar__day--${day.formatted}`,
            'rounded border bg-neutral-100 hover:bg-neutral-200 focus-visible:bg-neutral-200',
          ]"
          :style="{
            gridColumnStart: day.week,
            gridColumnEnd: day.week + 1,
            gridRowStart: day.weekDay + 1,
            gridRowEnd: day.weekDay + 2,
          }"
          :title="`0 contributions on ${day.formatted}\n0 commits will be created`"
        >
          <div class="graph-calendar__day-wrapper pt-[100%]"></div>
        </button>
      </div>
    </div>
  </div>
</template>
