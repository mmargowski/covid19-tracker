const renderData = (res, data, error, tpl, pageName) => {
    res.render(tpl, {
        appName: "COVID-19 Tracker",
        pageName,
        data: data ? data : null,
        error: error ? error : null,
    });
}

module.exports = renderData;