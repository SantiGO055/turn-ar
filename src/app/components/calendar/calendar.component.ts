import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  @ViewChild('tbody') calendar_days: ElementRef | undefined;

  faChevronLeft = faChevronLeft
  faChevronRight = faChevronRight
  date = new Date();
  today = this.date.getDate();
  actualYear = this.date.getFullYear();
  activeMonth = false;
  selectedMonth = 0;
  first_day = 1;
  day_count = 0;
  day = 0;




  constructor(private element: ElementRef,
    private renderer: Renderer2
  ) {

    this.month_click(this.date.getMonth() + 1);

  }
  ngOnInit() {

    // this.init_calendar(this.date);

    // dynamicElement.setAttribute('', '');
    // dynamicElement.addEventListener('click', () => {
    //   alert('You clicked a Dynamic button!');
    // });

  }

  generateElement(type: string, className: string, innerText: string) {
    const element = document.createElement(type);
    element.classList.add(className);
    element.textContent = innerText;
    return element;
  }

  // $("#add-button").click({ date: date }, new_event);
  // // Set current month as active

  // init_calendar(date);
  // var events = check_events(today, date.getMonth() + 1, date.getFullYear());
  // show_events(events, months[date.getMonth()], today);

  // init_calendar(date: Date) {
  //   var row = this.renderer.createElement("tr");
  //   this.renderer.addClass(row, "table-row")

  //   var month = date.getMonth();
  //   var year = date.getFullYear();
  //   var day_count = this.days_in_month(month, year);

  //   var today = date.getDate();
  //   // Set date to 1 to find the first day of the month
  //   date.setDate(1);
  //   var first_day = date.getDay();
  //   // 35+firstDay is the number of date elements to be added to the dates table
  //   // 35 is from (7 days in a week) * (up to 5 rows of dates in a month)
  //   for (var i = 0; i < 35 + first_day; i++) {
  //     // Since some of the elements will be blank, 
  //     // need to calculate actual date from index
  //     var day = i - first_day + 1;
  //     // If it is a sunday, make a new row
  //     if (i % 7 === 0) {
  //       this.renderer.appendChild(this.calendar_days, row)
  //       // this.calendar_days?.nativeElement.append(row);
  //       row = this.renderer.createElement("tr");
  //       this.renderer.addClass(row, "table-row")
  //     }
  //     // if current index isn't a day in this month, make it blank
  //     if (i < first_day || day > day_count) {
  //       var curr_date = this.renderer.createElement("td");
  //       this.renderer.addClass(row, "table-date")
  //       this.renderer.addClass(row, "nil")
  //       this.renderer.appendChild(row, curr_date)
  //     }
  //     else {
  //       var curr_date = this.renderer.createElement("td"); // creo td
  //       this.renderer.addClass(curr_date, "table-date") // le doy clase
  //       var dayEl = this.renderer.createElement("p"); //creo el elemento que va dentro de 
  //       this.renderer.setValue(dayEl, day.toString()); // le asigno el dia al p dentro del td
  //       this.renderer.appendChild(curr_date, dayEl)
  //       // $("<td class='table-date'>" + day + "</td>");
  //       var events = this.check_events(day, month + 1, year);

  //       // if (today === day && $(".active-date").length === 0) {
  //       //   curr_date.addClass("active-date");
  //       //   show_events(events, months[month], day);
  //       // }
  //       // If this date has any events, style it with .event-date
  //       if (events.length !== 0) {
  //         this.renderer.addClass(curr_date, "event-date")
  //         // curr_date.addClass("event-date");
  //       }
  //       // Set onClick handler for clicking a date
  //       curr_date.click({ events: events, month: this.months[month], day: day }, this.date_click);
  //       row.append(curr_date);
  //     }
  //   }
  //   // Append the last row and set the current year
  //   this.renderer.appendChild(this.calendar_days, row);
  //   // calendar_days.append(row);

  //   // $(".year").text(year);
  // }

  // Get the number of days in a given month/year
  days_in_month(month: number, year: number) {
    var monthStart = new Date(year, month, 1);
    var monthEnd = new Date(year, month + 1, 1);
    return (monthEnd.getMonth() - monthStart.getMonth()) / (1000 * 60 * 60 * 24);
  }

  // Event handler for when a date is clicked
  date_click() {
    // $(".events-container").show(250);
    // $("#dialog").hide(250);
    // $(".active-date").removeClass("active-date");
    // $(this).addClass("active-date");
    // show_events(event.data.events, event.data.month, event.data.day);
  };

  // Event handler for when a month is clicked
  month_click(month: number) {
    // $(".events-container").show(250);
    console.log(month)
    // $("#dialog").hide(250);

    // $(".active-month").removeClass("active-month");
    this.selectedMonth = month;
    this.activeMonth = true;
    // $(this).addClass("active-month");
    var new_month = month;
    this.date.setMonth(new_month);
    // init_calendar(date);
  }

  // Event handler for when the year right-button is clicked
  next_year() {
    // $("#dialog").hide(250);

    var new_year = this.date.getFullYear() + 1;
    console.log(new_year);
    this.actualYear = new_year;
    this.date.setFullYear(new_year)
    // $("year").html(new_year);
    // date.setFullYear(new_year);
    // init_calendar(date);
  }

  // Event handler for when the year left-button is clicked
  prev_year() {
    // $("#dialog").hide(250);

    var new_year = this.date.getFullYear() - 1;
    this.actualYear = new_year;
    console.log(this.actualYear)
    this.date.setFullYear(new_year);
    // init_calendar(date);
  }

  // Event handler for clicking the new event button
  // function new_event(event) {
  //   // if a date isn't selected then do nothing
  //   if ($(".active-date").length === 0)
  //     return;
  //   // remove red error input on click
  //   $("input").click(function () {
  //     $(this).removeClass("error-input");
  //   })
  //   // empty inputs and hide events
  //   $("#dialog input[type=text]").val('');
  //   $("#dialog input[type=number]").val('');
  //   $(".events-container").hide(250);
  //   $("#dialog").show(250);
  //   // Event handler for cancel button
  //   $("#cancel-button").click(function () {
  //     $("#name").removeClass("error-input");
  //     $("#count").removeClass("error-input");
  //     $("#dialog").hide(250);
  //     $(".events-container").show(250);
  //   });
  //   // Event handler for ok button
  //   $("#ok-button").unbind().click({ date: event.data.date }, function () {
  //     var date = event.data.date;
  //     var name = $("#name").val().trim();
  //     var count = parseInt($("#count").val().trim());
  //     var day = parseInt($(".active-date").html());
  //     // Basic form validation
  //     if (name.length === 0) {
  //       $("#name").addClass("error-input");
  //     }
  //     else if (isNaN(count)) {
  //       $("#count").addClass("error-input");
  //     }
  //     else {
  //       $("#dialog").hide(250);
  //       console.log("new event");
  //       new_event_json(name, count, date, day);
  //       date.setDate(day);
  //       init_calendar(date);
  //     }
  //   });
  // }

  // Adds a json event to event_data
  // function new_event_json(name, count, date, day) {
  //   var event = {
  //     "occasion": name,
  //     "invited_count": count,
  //     "year": date.getFullYear(),
  //     "month": date.getMonth() + 1,
  //     "day": day
  //   };
  //   event_data["events"].push(event);
  // }

  // Display all events of the selected date in card views
  show_events() {
    //   // Clear the dates container
    //   $(".events-container").empty();
    //   $(".events-container").show(250);
    //   console.log(event_data["events"]);
    //   // If there are no events for this date, notify the user
    //   if (events.length === 0) {
    //     var event_card = $("<div class='event-card'></div>");
    //     var event_name = $("<div class='event-name'>There are no events planned for " + month + " " + day + ".</div>");
    //     $(event_card).css({ "border-left": "10px solid #FF1744" });
    //     $(event_card).append(event_name);
    //     $(".events-container").append(event_card);
    //   }
    //   else {
    //     // Go through and add each event as a card to the events container
    //     for (var i = 0; i < events.length; i++) {
    //       var event_card = $("<div class='event-card'></div>");
    //       var event_name = $("<div class='event-name'>" + events[i]["occasion"] + ":</div>");
    //       var event_count = $("<div class='event-count'>" + events[i]["invited_count"] + " Invited</div>");
    //       if (events[i]["cancelled"] === true) {
    //         $(event_card).css({
    //           "border-left": "10px solid #FF1744"
    //         });
    //         event_count = $("<div class='event-cancelled'>Cancelled</div>");
    //       }
    //       $(event_card).append(event_name).append(event_count);
    //       $(".events-container").append(event_card);
    //     }
    //   }
  }

  // // Checks if a specific date has any events
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

  // Given data for events in JSON format


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

  months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];

  days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
  ];
}
