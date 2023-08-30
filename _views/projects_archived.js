// NOTE: When querying by folder you have to start at the project root- it cannot handle relative path to where the query is called from.
const fileQuery = '"CommSys/Projects" and #project/archived';
const tableHeadings = ["Name", "Created", "DueDate", "Priority", "Status"];

const obsidian = this.app.plugins;
const { fieldModifier: f } = obsidian.plugins["metadata-menu"].api;

dv.table(tableHeadings, await Promise.all(dv.pages(fileQuery)
    .sort(k => k['priority'], 'desc')
    .map(async p => [ 
        p.file.link, 
        p['Created'], 
        p['Due Date'], 
        p['priority'],
        p['Status'],
    ])
));
