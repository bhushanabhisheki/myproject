import { DateTime as LuxonDateTime } from 'luxon';
import {
  Component,
  ViewChild,
  ViewEncapsulation,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker/calendar';

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
  styleUrls: ['./date-range-picker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DateRangePickerComponent implements OnInit, OnChanges {
  selectedStartDate: LuxonDateTime = LuxonDateTime.now();
  selectedEndDate: LuxonDateTime = LuxonDateTime.now();
  dateRanges: string[] = DATE_RANGES;
  disableDateRangePicker = false;
  isFromDateValid = true;
  isToDateValid = true;

  @ViewChild('calendarRight')
  calendarRight!: MatCalendar<LuxonDateTime>;
  @ViewChild('calendarLeft')
  calendarLeft!: MatCalendar<LuxonDateTime>;

  @Input() selectedDateTime: Time = {
    from: '',
    to: ''
  };
  @Input() dateTimePickerOptions: DateTimePickerOptions = {
    showBothCalendar: true,
    showRange: true,
    dateFormat: 'MM/dd/yyyy, hh:mm:ss',
    rangeListArray: [],
    selectedRange: DATE_RANGES[0]
  };

  @Output() selectedDateTimeChange = new EventEmitter();

  ngOnInit(): void {
    this.setTimeRange(this.dateRanges[0]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedDateTime && changes.selectedDateTime.currentValue) {
      if (this.selectedDateTime.from) {
        this.selectedStartDate = LuxonDateTime.fromISO(this.selectedDateTime.from);
      }
      if (this.selectedDateTime.to) {
        this.selectedEndDate = LuxonDateTime.fromISO(this.selectedDateTime.to);
      }
      this.validate('both');
    }
  }

  setTimeRange(range: string): void {
    this.dateTimePickerOptions.selectedRange = range;
    switch (range) {
      case 'In Progress':
        this.disableDateRangePicker = true;
        this.selectedStartDate = LuxonDateTime.now().minus({ hours: 6 });
        this.selectedEndDate = LuxonDateTime.now();
        break;
      case 'Last 5 min':
        this.disableDateRangePicker = false;
        this.selectedStartDate = LuxonDateTime.now().minus({ minutes: 5 });
        this.selectedEndDate = LuxonDateTime.now();
        break;
      case 'Last 15 min':
        this.disableDateRangePicker = false;
        this.selectedStartDate = LuxonDateTime.now().minus({ minutes: 15 });
        this.selectedEndDate = LuxonDateTime.now();
        break;
      case 'Last hour':
        this.disableDateRangePicker = false;
        this.selectedStartDate = LuxonDateTime.now().minus({ hours: 1 });
        this.selectedEndDate = LuxonDateTime.now();
        break;
      case 'Today':
        this.disableDateRangePicker = false;
        this.selectedStartDate = LuxonDateTime.now().startOf('day');
        this.selectedEndDate = LuxonDateTime.now();
        break;
      case 'Yesterday':
        this.disableDateRangePicker = false;
        this.selectedStartDate = LuxonDateTime.now().minus({ days: 1 }).startOf('day');
        this.selectedEndDate = LuxonDateTime.now().startOf('day');
        break;
      case 'Last week':
        this.disableDateRangePicker = false;
        this.selectedStartDate = LuxonDateTime.now().minus({ days: 6 });
        this.selectedEndDate = LuxonDateTime.now();
        break;
      case 'Custom':
        this.disableDateRangePicker = false;
        this.selectedStartDate = LuxonDateTime.now().minus({ months: 1 });
        this.selectedEndDate = LuxonDateTime.now();
        this.calendarLeft.activeDate = this.selectedStartDate;
        break;
      default:
        break;
    }
    this.validate('both');
  }

  onDateChange(date: string, side: string): void {
    if (
      side === 'left' &&
      LuxonDateTime.fromFormat(date, this.dateTimePickerOptions.dateFormat).isValid
    ) {
      this.selectedStartDate = LuxonDateTime.fromFormat(
        date,
        this.dateTimePickerOptions.dateFormat
      );
      this.calendarLeft.activeDate = this.selectedStartDate;
    } else if (LuxonDateTime.fromFormat(date, this.dateTimePickerOptions.dateFormat).isValid) {
      this.selectedEndDate = LuxonDateTime.fromFormat(date, this.dateTimePickerOptions.dateFormat);
      this.calendarRight.activeDate = this.selectedEndDate;
    }
    this.validate(side);
  }

  onDateSelect(date: LuxonDateTime, side: string): void {
    if (side === 'left') {
      this.selectedStartDate = date;
    } else if (side === 'right') {
      this.selectedEndDate = date;
    }
    this.validate(side);
  }

  validate(side: string): void {
    if (this.isValidDate(side)) {
      this.selectedDateTime = {
        from: this.selectedStartDate.toUTC().toISO(),
        to: this.selectedEndDate.toUTC().toISO()
      };
    } else {
      this.selectedDateTime = {
        from: '',
        to: ''
      };
    }
    this.selectedDateTimeChange.emit(this.selectedDateTime);
  }

  isValidDate(side: string): boolean {
    if (side === 'left') {
      this.isFromDateValid =
        this.selectedStartDate.isValid && this.selectedStartDate < this.selectedEndDate;
    } else if (side === 'right') {
      this.isToDateValid =
        this.selectedEndDate.isValid && this.selectedEndDate > this.selectedStartDate;
    } else {
      this.isFromDateValid =
        this.selectedStartDate.isValid && this.selectedStartDate < this.selectedEndDate;
      this.isToDateValid =
        this.selectedEndDate.isValid && this.selectedEndDate > this.selectedStartDate;
    }
    return this.isFromDateValid && this.isToDateValid;
  }
}
