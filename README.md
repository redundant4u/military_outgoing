# military_outgoing
military_outgoing is a web service suitable for Korea soldiers.

# Develop Period
2019.12.10 ~ 2020.01.05

# Review
### index.php
Separate into register, toggle, commandselect, calendar, grid, more id. 
- register: Part of outgiong registeration. you can type name, military number, command, rank, outgiongtype, outgoingkind, startdate and enddate.

- toggle: Toggle between calendar and grid style. Default is calendar style.

- commandselect: Print outgoing data depending on command.

- calendar: Show name and date in calendar style.

- grid: Show name and date in grid style. This style looks more visually than calendar.

- more: When you click a box which contains start or end of outgoing date, print details below calendar about outgoing. Only calendar mode can.

### js
Seperate into 4 parts, calendar, register, showdata, showmore.
- calendar: All functions about calendar and grid style. It performs to make frame, toggle styles, classify commands mainly.

- register: Make register frame and throw its data to php.

- showdata: Print outgoing data in calendar and grid using AJAX.
