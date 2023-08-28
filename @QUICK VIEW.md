---
obsidianUIMode: preview
tags: <% tp.file.tags = ['#quickview'] %>
---
# Project Glance
```dataview
LIST
FROM #project/active OR #project/frozen
WHERE Priority < 2
SORT created DESC
```

# Do Now
```tasks
not done
due before today
```
# Do Today
```tasks
not done
due today
```
# Do Next
```tasks
not done
priority is high
```
# Upcoming
```tasks
not done
due after today
due before in one week
short mode
hide edit button
hide backlink
```