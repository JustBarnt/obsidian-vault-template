// NOTE: When querying by folder you have to start at the project root- it cannot handle relative path to where the query is called from.
const fileQuery = '"CommSys/Projects" and #project/active';
const tableHeadings = ["Name", "Created", "Due Date", "Priority", "Issue", "Status"];
const limit = 10;

const obsidian = this.app.plugins;
const { update } = obsidian.plugins["metaedit"].api;
const { fieldModifier: f } = obsidian.plugins["metadata-menu"].api;

dv.table(tableHeadings, await Promise.all(dv.pages(fileQuery)
    .limit(limit)
    .sort(k => k['priority'], 'desc')
    .map(async p => [ 
        p.file.link, 
        p['Created'], 
        await f(dv, p, 'DueDate'), 
        await f(dv, p, 'priority'), 
        p['Issue'],
        p['Status'],
    ])
));
