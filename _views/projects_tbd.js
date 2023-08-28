// NOTE: When querying by folder you have to start at the project root- it cannot handle relative path to where the query is called from.
const fileQuery = '"CommSys/Projects" and #project/froze';
const tableHeadings = ["Name", "Created", "Priority"];
const limit = 10;

const { fieldModifier: f } = this.app.plugins.plugins["metadata-menu"].api;

dv.table(tableHeadings,
    await Promise.all(
        dv.pages(fileQuery).limit(limit).sort(k => k['priority'], 'desc')
        .map(async p => [
            p.file.link, 
            p['Created'],
            await f(dv, p, 'priority')
        ])
));
