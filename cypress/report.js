const report = require('multiple-cucumber-html-reporter');
 
report.generate({
    jsonDir: './cucumber-json',
    pageTitle: 'TMS',
    reportName: 'Smoke Suite',
    durationInMS: true,
    displayDuration: true,
    displayReportTime: true,
    hideMetadata: true,
    reportPath: './report/',
});