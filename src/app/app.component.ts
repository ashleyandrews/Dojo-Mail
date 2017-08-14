import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails = [
    {email: "ashleyandrews@gmail.com",
    importance: true,
    subject: "Test 1,2",
    content: "Let's see if this works"
  },
    {email: "benandrews@gmail.com",
    importance: false,
    subject: "Reminder - dr appt",
    content: "Don't forget the appointment on 8/17. You'll need to arrive 15 mins early."
  },
    {email: "marilyn.ray@gmail.com",
    importance: false,
    subject: "Upcoming beach trip",
    content: "When will you be arriving at the beach?"
  },
    {email: "recruiter@job.com",
    importance: true,
    subject: "Job Offer",
    content: "Congratulations! We would like to offer you the best job ever."
  }
  ]
}
