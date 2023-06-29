import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appDaysCalendar]'
})
export class DaysCalendarDirective {
  @Input() date!: Date;
  @Input() months!: string[];

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    var date = this.date;
    var row = this.renderer.createElement("tr");
    this.renderer.addClass(row, "table-row")


    var month = date.getMonth();
    var year = date.getFullYear();
    var day_count = this.days_in_month(month, year);

    var today = date.getDate();
    // Set date to 1 to find the first day of the month
    date.setDate(1);
    var first_day = date.getDay();
    // 35+firstDay is the number of date elements to be added to the dates table
    // 35 is from (7 days in a week) * (up to 5 rows of dates in a month)

    for (var i = 0; i < 35 + first_day; i++) {
      // Since some of the elements will be blank, 
      // need to calculate actual date from index
      var day = i - first_day + 1;
      // If it is a sunday, make a new row
      if (i % 7 === 0) {
        this.renderer.appendChild(this.el.nativeElement, row)
        // this.calendar_days?.nativeElement.append(row);

        this.renderer.addClass(row, "table-row")
      }
      // if current index isn't a day in this month, make it blank
      if (i < first_day || day > day_count) {
        var curr_date = this.renderer.createElement("td");
        this.renderer.addClass(row, "table-date")
        this.renderer.addClass(row, "nil")
        this.renderer.appendChild(row, curr_date)
        // console.log(row)
        console.log(day.toString())
      }
      else {
        var curr_date = this.renderer.createElement("td"); // creo td
        this.renderer.addClass(curr_date, "table-date") // le doy clase
        var dayEl = this.renderer.createElement("p"); //creo el elemento que va dentro de 
        this.renderer.setValue(dayEl, day.toString()); // le asigno el dia al p dentro del td
        console.log(day.toString())
        this.renderer.appendChild(curr_date, dayEl)
        // $("<td class='table-date'>" + day + "</td>");
        var events = this.check_events(day, month + 1, year);

        // if (today === day && $(".active-date").length === 0) {
        //   curr_date.addClass("active-date");
        //   // show_events(events, this.months[month], day);
        // }
        // If this date has any events, style it with .event-date
        if (events.length !== 0) {
          this.renderer.addClass(curr_date, "event-date")
          // curr_date.addClass("event-date");
        }
        // // Set onClick handler for clicking a date
        curr_date.click({ events: events, month: this.months[month], day: day }, this.date_click);
        this.renderer.appendChild(row, curr_date)
        console.log(row)
        // row.append(curr_date);
      }
    }
    // Append the last row and set the current year
    this.renderer.appendChild(this.el.nativeElement, row);
  }

  date_click() {
    // $(".events-container").show(250);
    // $("#dialog").hide(250);
    // $(".active-date").removeClass("active-date");
    // $(this).addClass("active-date");
    // show_events(event.data.events, event.data.month, event.data.day);
  };


  check_events(day: number, month: number, year: number) {
    var events = [];
    for (var i = 0; i < this.event_data["events"].length; i++) {
      var event = this.event_data["events"][i];
      if (event["day"] === day &&
        event["month"] === month &&
        event["year"] === year) {
        events.push(event);
      }
    }
    return events;
  }
  days_in_month(month: number, year: number) {
    var monthStart = new Date(year, month, 1);
    var monthEnd = new Date(year, month + 1, 1);
    console.log(monthEnd.getMonth())
    console.log(monthStart.getMonth())
    console.log((monthEnd.getMonth() - monthStart.getMonth()) / (1000 * 60 * 60 * 24))
    return (monthEnd.getMonth() - monthStart.getMonth()) / (1000 * 60 * 60 * 24);
  }

  event_data = {
    "events": [
      {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 10,
        "cancelled": true
      },
      {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 10,
        "cancelled": true
      },
      {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 10,
        "cancelled": true
      },
      {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 10
      },
      {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 10,
        "cancelled": true
      },
      {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 10
      },
      {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 10,
        "cancelled": true
      },
      {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 10
      },
      {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 10,
        "cancelled": true
      },
      {
        "occasion": " Repeated Test Event ",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 10
      },
      {
        "occasion": " Test Event",
        "invited_count": 120,
        "year": 2020,
        "month": 5,
        "day": 11
      }
    ]
  };
}
