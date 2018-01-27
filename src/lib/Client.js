const snekfetch = require("snekfetch");

class Client {

  constructor(token) {
    if (!token) throw new Error("Token must be specified");
    if (typeof token !== "string") throw new SyntaxError("Token must be a string");

    this.token = token;
    
    this.baseUrl = "http://api.anidiots.guide/api/";
  }

  // Commands

  // Text based
  blame(text) {
    return this._get("blame", { text });
  }

  pls(text) {
    return this._get("pls", { text });
  }

  snapchat(text) {
    return this._get("snapchat", { text });
  }

  // Image and Text
  achievement(image, text) {
    return this._get("achievement", { image, text });  
  }  

  theSearch(image, text) {
    return this._get("thesearch", { image, text });  
  }  

  // Single Image
  beautiful(image) {
    return this._get("beautiful", { image });  
  }

  facepalm(image) {
    return this._get("facepalm", { image });  
  }

  respect(image) {
    return this._get("respect", { image });  
  }

  stepped(image) {
    return this._get("stepped", { image });  
  }

  tattoo(image) {
    return this._get("tattoo", { image });  
  }

  triggered(image) {
    return this._get("triggered", { image });  
  }

  vaultBoy(image) {
    return this._get("vault", { image });  
  }
  
  wanted(image) {
    return this._get("wanted", { image });  
  }

  // Double Image
  batSlap(imageOne, imageTwo) {
    return this._get("batslap", { imageOne, imageTwo });  
  }

  fanSlap(imageOne, imageTwo) {
    return this._get("slap", { imageOne, imageTwo });  
  }

  crush(imageOne, imageTwo) {
    return this._get("crush", { imageOne, imageTwo });    
  }  

  // Greetings
  welcome(version, bot, avatar, usertag, guild) {
    const user = encodeURIComponent(usertag);
    return this._get(`${version}_welcome`, { bot, avatar, user, guild });    
  }

  // Farewells
  goodbye(version, bot, avatar, usertag) {
    const user = encodeURIComponent(usertag);
    return this._get(`${version}_goodbye`, { bot, avatar, user });    
  }

  _get(endpoint, query = {}) {
    return new Promise((resolve, reject) => {
      snekfetch.get(`${this.baseUrl}${endpoint}`)
        .set("token", this.token)
        .query(query)
        .then(res => {
          if (res.status !== 200) return reject(res);
          return resolve(res.body);
        }).catch(err => reject(err));
    });
  }

}

module.exports = Client;
