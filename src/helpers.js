const formatDate = (datestr) => {
    let splitedDate = datestr.substr(0, 10).split('-');

    return `${(splitedDate[2])}/${splitedDate[1]}/${splitedDate[0]}`;
};

export default {
    formatDate
}