const snekfetch = require('snekfetch');

class Client {

    constructor(token) {
        if (!token) throw new Error(`Token must be specified`);
        if (typeof token !== 'string') throw new SyntaxError(`Token must be a string`);
        this.token = token;

        this.baseUrl = 'http://api.anidiots.guide/api/';
    }

    achievement(avatar, text) {
        return this._get('achievement', { avatar, text });
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
