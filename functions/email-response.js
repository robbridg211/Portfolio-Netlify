
exports.handler = function(event, context, callback) {

    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    } else {

        const data = JSON.parse(event.body);
        console.log(data.name, data.message)

    }
}