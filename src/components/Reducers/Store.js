import { configureStore } from "@reduxjs/toolkit";
import  DayTimelineSlice  from "./DayTimeline";
import FilteredMTask from "./FilteredMTask";
import  MonthMoveSlice  from "./MonthMoveSlice";
import NavigationSlice from "./NavigationSlice";
import  NumTaskReducer  from "./NumberOfTaskSlice";
import ShiftReducer from "./ShiftReducer";
import ShowCreateTask from "./ShowCreateTask";
import ShowMonthTask from "./ShowMonthTask";
import ShowTaskLook from "./ShowTaskLook";
import  TaskSlice  from "./TaskReducer";
import  WeekTimelineSlice  from "./WeekTimeline";

const Store = configureStore({

    reducer:{
        showCTask: ShowCreateTask,
        taskP: TaskSlice,
        dayTimeline: DayTimelineSlice,
        navigateSlice: NavigationSlice,
        weekTimeline: WeekTimelineSlice,
        moveSlice: MonthMoveSlice,
        showLook: ShowTaskLook,
        showMonth: ShowMonthTask,
        filteredP : FilteredMTask,
        shiftReducer: ShiftReducer,
        numTaskReducer: NumTaskReducer,
    }

});

export default Store;