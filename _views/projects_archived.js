// NOTE: When querying by folder you have to start at the project root- it cannot handle relative path to where the query is called from.
const fileQuery = '"CommSys/Projects" and #project/archived';
const tableHeadings = ["Name", "Date Archived"];
const limit = 10;

dv.table(tableHeadings,
    await Promise.all(
        dv.pages(fileQuery).limit(limit).sort(k => k['archived'], 'desc')
        .map(async p => [
            p.file.link, 
            p['archived']
        ])
));
