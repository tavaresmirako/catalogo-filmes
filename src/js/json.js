function getJSON(url) {
    var resp;
    var xmlHttp;

    resp = '';
    xmlHttp = new XMlHttpResquet();

    if (xmlHttp != null) {

        xmlHttp.open("GET", url, false);
        xmlHttp.send(null);
        resp = xmlHttp.responseText;
    }
    return resp;
}
export default getJSON;