const Moment = require('moment');

module.exports.timezoneMoment = () => {
    const dateString = "2019-01-24 16:00:00";
    const offset = 480;
    const dateOffset = new Date().getTimezoneOffset();
    console.log(`Time zone string: "${dateString}", offset: ${offset}`);
    const m = Moment(dateString);
    console.log(`m: ${m}`);

    const mWithOffset = Moment(dateString).utcOffset(-480);
    console.log(`Moment(dateString).utcOffset(-480): ${Moment(dateString).utcOffset(-480)}`);
    console.log(`Moment(dateString).utcOffset(480): ${Moment(dateString).utcOffset(480)}`);
    console.log(`using Date.getTimezoneOffset in moment: ${Moment(dateString).utcOffset(dateOffset)}`);
    console.log(`using Date.getTimezoneOffset*-1 in moment: ${Moment(dateString).utcOffset(dateOffset*-1)}`);

    console.log(`Moment('${dateString}'): ${Moment(dateString)}`);
    console.log(`Moment.utc('${dateString}'): ${Moment.utc(dateString)}`);
    console.log(`Moment.parseZone('${dateString}'): ${Moment.parseZone(dateString)}`);

    console.log(`Moment.parseZone().utcOffset(): ${Moment.parseZone().utcOffset()}`);
    console.log(`Moment.format('Z'): ${Moment().format('Z')}`);
    const offsetAsString = Moment(dateString).utcOffset(-480).format('Z');
    let newString;
    if (offset.toString().startsWith("-")) {
        newString = dateString + offset.toString();
    }
    else {
        newString = dateString + offsetAsString;
    }
    console.log(`Moment(${newString}): ${Moment(newString)}`);
    console.log(`Moment(${newString}).valueOf(): ${Moment(newString).valueOf()}`);

};
