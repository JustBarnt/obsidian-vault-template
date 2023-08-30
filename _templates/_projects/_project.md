---
creation_date: <%*
let issueType = await tp.system.prompt("JIRA Issue Type [CLIPS, INT, etc...] ");
let issueNumber = await tp.system.prompt("JIRA Issue Number");
let issueKey = `${issueType.toUpperCase()}-${issueNumber}`;
let priorityIcon = 'sorry failed';
const issue = await $ji.base.getIssue(issueKey);
tp.file.title = await tp.file.rename(`${issueKey} - ${issue.fields.summary}`)
switch(parseInt(issue.fields.priority.id)){
	case 1:
		priorityIcon = '🔺'
	break;
	case 2:
		priorityIcon = '⏫'
	break;
	case 3:
		priorityIcon = '🔼'
	break;
	case 4:
		priorityIcon = '🔽'
	break;
	case 5:
	default:
		priorityIcon = '⏬'
	break;
}
tR += tp.date.now('YYYY-MM-DD');
%>
Priority: <%* tR += issue.fields.priority.name %>
Tag_Priority: <%* tR += priorityIcon %>
Priority_Id: <%* tR += parseInt(issue.fields.priority.id) %>
Issue: <%* tR += issue.key %>
DueDate: <%* tR += issue.fields.duedate %>
Created: <%* tR += issue.fields.created.split("T")[0] %>
Status: <%* tR += issue.fields.status.name %>
tags: work, <%* tR += `project/${await tp.system.prompt("Projects Tag [active, inactive, archived]", 'inactive')}` %>
Component: <%* issue.fields.components.map(c => tR += c.name) %>
---
> [! Description] 
<%* tR += issue.fields.description.replace(/^(?:[ \t\r\n]*)(.*)/gmi, '> $1') %>

## Tasks
- [ ] <%* tR += `JIRA:${issue.key}` %> <%* tR += `${priorityIcon} 📅 ${issue.fields.duedate}` %> 
## Goals