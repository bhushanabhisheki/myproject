import { DateTime as LuxonDateTime } from 'luxon';
import { Component, ViewEncapsulation } from '@angular/core';

export const DATE_RANGES = [
  'Last 5 min',
  'Last 15 min',
  'Last hour',
  'Today',
  'Yesterday',
  'Last week',
  'Custom'
];

interface DateTimePickerOptions {
  showBothCalendar: boolean;
  showRange: boolean;
  dateFormat: string;
  rangeListArray: string[];
  selectedRange: string;
}

interface Time {
  from: string;
  to: string;
}

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss']
})
export class DateRangePickerComponent {
  selectedStartDate: LuxonDateTime = LuxonDateTime.now();
  selectedEndDate: LuxonDateTime = LuxonDateTime.now();
  dateRanges: string[] = DATE_RANGES;

  selectedDateTime: Time = {
    from: '',
    to: ''
  };
  dateTimePickerOptions: DateTimePickerOptions = {
    showBothCalendar: true,
    showRange: true,
    dateFormat: 'MM/dd/yyyy, hh:mm:ss',
    rangeListArray: [],
    selectedRange: DATE_RANGES[0]
  };
}
