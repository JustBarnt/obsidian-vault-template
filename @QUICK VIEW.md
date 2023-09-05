---
obsidianUIMode: preview
tags: quickview
---
# Project Glance
```dataview
LIST
FROM #project/active OR #project/frozen
WHERE Priority < 2
SORT created DESC
```
#### Completed Today
```tasks
done on today
hide edit button
short mode
```

# Recurring
```tasks
not done
is recurring
folder does not include _templates/
hide edit button
hide backlink
short mode
```
# Do Now
```tasks
not done
due today AND priority is above low
is not recurring
folder does not include _templates/
hide edit button
hide backlink
short mode
```
# Do within A Week
```tasks
not done
due in this week
priority is above low
folder does not include _templates/
is not recurring
short mode
hide edit button
```
# Do Next
```tasks
not done
priority is above low
is not recurring
folder does not include _templates/
hide edit button
short mode
```
# Upcoming
```tasks
not done
due after today
due before in one week
is not recurring
folder does not include _templates/
short mode
hide edit button
hide backlink
```
