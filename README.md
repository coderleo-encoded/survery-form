# Sports Survey Form

A client-side web form that collects sports preference data, validates user input, and exports responses as a downloadable CSV file — all without a backend server.

---

## Features

- Input validation for name (letters and spaces only) and age (1–150)
- Inline error and success messages with distinct styling
- Error highlighting clears and re-evaluates on each submission
- Exports form responses as a `survey_data.csv` download
- Form resets automatically 2 seconds after successful submission

---

## Files

```
├── index.html    # Form structure and markup
├── style.css     # Styling including error and success states
└── script.js     # Validation logic and CSV export
```

---

## How It Works

1. User fills out the form and clicks **Submit**
2. JavaScript intercepts the submission with `event.preventDefault()` to stop the page from reloading
3. The name field is validated against a regex — only English letters and spaces allowed
4. The age field is validated as a number between 1 and 150
5. If validation fails, the relevant field is highlighted and an error message is shown
6. If validation passes, all form data is collected via `FormData`, converted to CSV, and downloaded automatically
7. The form resets after 2 seconds

---

## Form Fields

| Field | Type | Validation |
|---|---|---|
| Name | Text | Letters and spaces only |
| Age | Number | 1–150 |
| Favorite Type of Sport | Radio | Indoor / Outdoor / Both |
| Favorite Sport to Watch | Text | Required |
| Favorite Sport to Play | Text | Required |
| Favorite Sports-person | Text | Required |
| Opinion on Sports | Textarea | Optional |

---

## CSV Output

On successful submission, a file named `survey_data.csv` is downloaded containing the field names as headers and the user's responses as values:

```
name,age,type,fav-sport-watch,fav-sport-play,fav-sport-person,sports-opinion
John,25,Indoor,Football,Tennis,Federer,I love sports
```

---

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript (no libraries or frameworks)
