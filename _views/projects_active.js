    const fileQuery = "#project/active";
    const tableHeadings = ["Name", "Priority"];
    const limit = 10;
    const sortBy = tableHeadings[1].toLowerCase();

    const { fieldModifier: f } = this.app.plugins.plugins["metadata-menu"].api;

    dv.table(tableHeadings,
        await Promise.all(
            dv.pages(fileQuery).limit(limit).sort(k => k[sortBy], 'desc')
            .map(async p => [
                p.file.link, 
                await f(dv, p, sortBy)
            ])
    ));


