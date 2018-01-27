const snekfetch = require('snekfetch');

class Client {

    constructor(token) {
        this.token = token;

        this.baseUrl = 'http://api.anidiots.guide/api/';
    }

    _get(endpoint, query = {}) {
        return new Promise((resolve, reject) => {
            snekfetch.get(`${this.baseUrl}${endpoint}`)
                .set('token', this.token)
                .query(query)
                .then(res => {
                    if (res.status !== 200) return reject(res);
                    return resolve(res.body);
                }).catch(err => reject(err));
        });
    }

}

module.exports = Client;
