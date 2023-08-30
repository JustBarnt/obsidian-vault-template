const obsidian = this.app.plugins;
const { fieldModifier: f } = obsidian.plugins["metadata-menu"].api;
const { pages, headings } = input;

for(let group of pages.groupBy(page => page.Component)){
    dv.header(3, `Interface: ${group.key}`)
    dv.table(headings, await Promise.all(group.rows
        .sort(p => p['priority'], 'desc')
        .map(async p => [ 
            p["Component"],
            p.file.link, 
            p['Created'], 
            await f(dv, p, 'DueDate'), 
            await f(dv, p, 'priority'), 
            p['Issue'],
            p['Status']
        ])
    ));
}
