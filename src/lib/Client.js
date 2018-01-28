const snekfetch = require("snekfetch");
const imageUrlRegex = /.webp$/g;

/**
 * Base client for the Idiot's Guide API wrapper
 */
class Client {
  /**
   * @param {String} token Idiot's Guide API token
   */
  constructor(token) {
    if (!token) throw new Error("Token must be specified");
    if (typeof token !== "string") throw new SyntaxError("Token must be a string");

    /**
     * Idiot's Guide API token
     * @type {String}
     */
    this.token = token;
    
    /**
     * Base URL for Idiot's Guide API
     * @type {String}
     */
    this.baseUrl = "http://api.anidiots.guide/api/";
  }

  /* Text based endpoints */

  /**
   * Blame endpoint
   * @param {String} text text to except back
   * @returns {Promise<Buffer>}
   */
  blame(text) {
    return this._get("blame", { text });
  }

  /**
   * Pls endpoint
   * @param {String} text text to except back
   * @returns {Promise<Buffer>}
   */
  pls(text) {
    return this._get("pls", { text });
  }

  /**
   * Snapchat endpoint
   * @param {String} text text to except back
   * @returns {Promise<Buffer>}
   */
  snapchat(text) {
    return this._get("snapchat", { text });
  }

  /* Image and Text endpoints */

  /**
   * Achievement endpoint
   * @param {String} image Image you except to be used
   * @param {String} text text to except back
   * @returns {Promise<Buffer>}
   */
  achievement(image, text) {
    image = image.replace(imageUrlRegex, ".png");
    return this._get("achievement", { image, text });  
  }  

  /**
   * TheSearch endpoint
   * @param {String} image Image you except to be used
   * @param {String} text text to except back
   * @returns {Promise<Buffer>}
   */
  theSearch(image, text) {
    image = image.replace(imageUrlRegex, ".png");
    return this._get("thesearch", { image, text });  
  }  

  /* Single Image endpoints */

  /**
   * Beautiful endpoint
   * @param {String} image Image you except to be used
   * @returns {Promise<Buffer>}
   */
  beautiful(image) {
    image = image.replace(imageUrlRegex, ".png");
    return this._get("beautiful", { image });  
  }

  /**
   * Facepalm endpoint
   * @param {String} image Image you except to be used
   * @returns {Promise<Buffer>}
   */
  facepalm(image) {
    image = image.replace(imageUrlRegex, ".png");
    return this._get("facepalm", { image });  
  }

  /**
   * Respect endpoint
   * @param {String} image Image you except to be used
   * @returns {Promise<Buffer>}
   */
  respect(image) {
    image = image.replace(imageUrlRegex, ".png");
    return this._get("respect", { image });  
  }

  /**
   * Stepped endpoint
   * @param {String} image Image you except to be used
   * @returns {Promise<Buffer>}
   */
  stepped(image) {
    image = image.replace(imageUrlRegex, ".png");
    return this._get("stepped", { image });  
  }

  /**
   * Tattoo endpoint
   * @param {String} image Image you except to be used
   * @returns {Promise<Buffer>}
   */
  tattoo(image) {
    image = image.replace(imageUrlRegex, ".png");
    return this._get("tattoo", { image });  
  }

  /**
   * Triggered endpoint
   * @param {String} image Image you except to be used
   * @returns {Promise<Buffer>}
   */
  triggered(image) {
    image = image.replace(imageUrlRegex, ".png");
    return this._get("triggered", { image });  
  }

  /**
   * VaultBoy endpoint
   * @param {String} image Image you except to be used
   * @returns {Promise<Buffer>}
   */
  vaultBoy(image) {
    image = image.replace(imageUrlRegex, ".png");
    return this._get("vault", { image });  
  }

  /**
   * Wanted endpoint
   * @param {String} image Image you except to be used
   * @returns {Promise<Buffer>}
   */
  wanted(image) {
    image = image.replace(imageUrlRegex, ".png");
    return this._get("wanted", { image });  
  }

  /* Double Image endpoints */

  /**
   * BatSlap endpoint
   * @param {String} imageOne Image you expect to be used
   * @param {String} imageTwo Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  batSlap(imageOne, imageTwo) {
    imageOne = imageOne.replace(imageUrlRegex, ".png");
    imageTwo = imageTwo.replace(imageUrlRegex, ".png");
    return this._get("batslap", { imageOne, imageTwo });  
  }

  /**
   * FanSlap endpoint
   * @param {String} imageOne Image you expect to be used
   * @param {String} imageTwo Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  fanSlap(imageOne, imageTwo) {
    imageOne = imageOne.replace(imageUrlRegex, ".png");
    imageTwo = imageTwo.replace(imageUrlRegex, ".png");
    return this._get("slap", { imageOne, imageTwo });  
  }

  /**
   * Crush endpoint
   * @param {String} imageOne Image you expect to be used
   * @param {String} imageTwo Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  crush(imageOne, imageTwo) {
    imageOne = imageOne.replace(imageUrlRegex, ".png");
    imageTwo = imageTwo.replace(imageUrlRegex, ".png");
    return this._get("crush", { imageOne, imageTwo });    
  }  

  /* Greetings endpoints */

  /**
   * 
   * @param {String} version The type/version of greeting image you want to use
   * @param {Boolean} bot A boolean saying if the user is a bot or not
   * @param {String} avatar Avatar url
   * @param {String} usertag User's tag
   * @param {String} guild guild name and guild member count seperated by #
   * @returns {Promise<Buffer>}
   */
  welcome(version, bot, avatar, usertag, guild) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    usertag = encodeURIComponent(usertag);
    guild = encodeURIComponent(guild);
    return this._get(`${version}_welcome`, { bot, avatar, usertag, guild });    
  }

  /* Farewell endpoints */

  /**
   * 
   * @param {String} version The type/version of farewell image you want to use
   * @param {Boolean} bot A boolean saying if the user is a bot or not
   * @param {String} avatar Avatar url
   * @param {String} usertag User's tag
   * @returns {Promise<Buffer>}
   */
  goodbye(version, bot, avatar, usertag) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    usertag = encodeURIComponent(usertag);
    return this._get(`${version}_goodbye`, { bot, avatar, usertag });    
  }

  /**
   * A private method used to get endpoints with querys
   * @param {String} endpoint endpoint string
   * @param {Object} [query={}] query object
   * @returns {Promise<any>}
   * @private
   */
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
