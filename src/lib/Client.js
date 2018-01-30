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
    if (!token) throw new Error("Unknown Token: Token Missing");
    if (typeof token !== "string") throw new SyntaxError("Invalid Token: Token must be a String");

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
   * @param {String} name text to except back
   * @returns {Promise<Buffer>}
   */
  blame(name) {
    return this._get("blame", { name });
  }

  /**
   * Pls endpoint
   * @param {String} mame text to except back
   * @returns {Promise<Buffer>}
   */
  pls(name) {
    return this._get("pls", { name });
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
   * @param {String} avatar Image you except to be used
   * @param {String} text text to except back
   * @returns {Promise<Buffer>}
   */
  achievement(avatar, text) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("achievement", { avatar, text });  
  }  

  /**
   * TheSearch endpoint
   * @param {String} avatar Image you except to be used
   * @param {String} text text to except back
   * @returns {Promise<Buffer>}
   */
  theSearch(avatar, text) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("thesearch", { avatar, text });  
  }  

  /* Single Image endpoints */

  /**
   * Beautiful endpoint
   * @param {String} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  beautiful(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("beautiful", { avatar });  
  }

  /**
   * Facepalm endpoint
   * @param {String} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  facepalm(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("facepalm", { avatar });
  }

  /**
   * Respect endpoint
   * @param {String} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  respect(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("respect", { avatar });
  }

  /**
   * Stepped endpoint
   * @param {String} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  stepped(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("stepped", { avatar });
  }

  /**
   * Tattoo endpoint
   * @param {String} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  tattoo(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("tattoo", { avatar });  
  }

  /**
   * Triggered endpoint
   * @param {String} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  triggered(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("triggered", { avatar });  
  }

  /**
   * VaultBoy endpoint
   * @param {String} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  vaultBoy(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("vault", { avatar });  
  }

  /**
   * Wanted endpoint
   * @param {String} image Image you except to be used
   * @returns {Promise<Buffer>}
   */
  wanted(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("wanted", { avatar });  
  }

  /* Double Image endpoints */

  /**
   * BatSlap endpoint
   * @param {String} slapper Image you expect to be used
   * @param {String} slapped Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  batSlap(slapper, slapped) {
    slapper = slapper.replace(imageUrlRegex, ".png");
    slapped = slapped.replace(imageUrlRegex, ".png");
    return this._get("batslap", { slapper, slapped });  
  }

  /**
   * SuperPunch endpoint
   * @param {String} puncher Image you expect to be used
   * @param {String} punched Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  superPunch(puncher, punched) {
    puncher = puncher.replace(imageUrlRegex, ".png");
    punched = punched.replace(imageUrlRegex, ".png");
    return this._get("batslap", { puncher, punched });  
  }

  /**
   * FanSlap endpoint
   * @param {String} slapper Image you expect to be used
   * @param {String} slapped Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  fanSlap(slapper, slapped) {
    slapper = slapper.replace(imageUrlRegex, ".png");
    slapped = slapped.replace(imageUrlRegex, ".png");
    return this._get("slap", { slapper, slapped });  
  }

  /**
   * Crush endpoint
   * @param {String} crusher Image you expect to be used
   * @param {String} crush Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  crush(crusher, crush) {
    crusher = crusher.replace(imageUrlRegex, ".png");
    crush = crush.replace(imageUrlRegex, ".png");
    return this._get("crush", { crusher, crush });    
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
