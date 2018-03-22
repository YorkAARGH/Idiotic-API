const snekfetch = require("snekfetch");
const imageUrlRegex = /.webp$/g;

/**
 * Client for Idiotic-api Wrapper
 */
class IdioticClient {

  /**
   * @typedef {Object} IdioticClientOptions
   * @property {String} [url] Base URL for Idiotic API
   * @property {Boolean} [dev=false]
   * @memberof IdioticClient
   */

  /**
   * @param {String} token Idiotic API token
   * @param {IdioticClientOptions} [options] Client options
   */
  constructor(token, options = {}) {
    if (!token) throw new Error("Unknown Token: Token Missing");
    if (typeof token !== "string") throw new SyntaxError("Invalid Token: Token must be a String");

    /**
     * Idiot's Guide API token
     * @type {String}
     */
    this.token = token;
    /**
     * Client options
     * @type {Object}
     */
    this.options = options;
    /**
     * Whether to use the dev endpoint
     * @type {Boolean}
     */
    this.dev = options.dev || false;
    /**
     * Base URL for Idiot's Guide API
     * @type {String}
     */
    this.baseUrl = options.url || this.dev ? "https://dev.anidiots.guide/" : "https://api.anidiots.guide/api/";
  }

  /* Text based endpoints */

  /**
   * Blame endpoint
   * @param {String} name text to except back
   * @returns {Promise<Buffer>}
   */
  blame(name) {
    return this._get(this.dev ? "generators/blame" : "blame", { name }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /**
   * Pls endpoint
   * @param {String} name text to except back
   * @returns {Promise<Buffer>}
   */
  pls(name) {
    return this._get(this.dev ? "generators/pls" : "pls", { name }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /**
   * Snapchat endpoint
   * @param {String} text text to except back
   * @returns {Promise<Buffer>}
   */
  snapchat(text) {
    return this._get(this.dev ? "generators/snapchat" : "snapchat", { text }).then(body => this.dev ? Buffer.from(body.data) : body);
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
    return this._get(this.dev ? "generators/achievement" : "achievement", { avatar, text }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /**
   * TheSearch endpoint
   * @param {String} avatar Image you except to be used
   * @param {String} text text to except back
   * @returns {Promise<Buffer>}
   */
  theSearch(avatar, text) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/thesearch" : "thesearch", { avatar, text }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /**
   * Missing endpoint
   * @param {String} avatar Image you except to be used
   * @param {String} text text to except back
   * @returns {Promise<Buffer>}
   */
  missing(avatar, text) {
    if (!this.dev) throw new Error("Missing endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/missing", { avatar, text }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /**
   * Steam endpoint
   * @param {String} avatar Image you except to be used
   * @param {String} text text to except back
   * @returns {Promise<Buffer>}
   */
  steam(avatar, text) {
    if (!this.dev) throw new Error("Steam endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/steam", { avatar, text }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /**
   * Missing endpoint
   * @param {String} avatar Image you except to be used
   * @param {String} text text to except back
   * @returns {Promise<Buffer>}
   */
  suggestion(avatar, suggestion) {
    if (!this.dev) throw new Error("Suggestion endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/suggestion", { avatar, suggestion }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /* Single Image endpoints */

  /**
   * Beautiful endpoint
   * @param {String} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  beautiful(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/beautiful" : "beautiful", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /**
   * Facepalm endpoint
   * @param {String} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  facepalm(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/facepalm" : "facepalm", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /**
   * Respect endpoint
   * @param {String} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  respect(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/respect" : "respect", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /**
   * Stepped endpoint
   * @param {String} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  stepped(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/stepped" : "stepped", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /**
   * Tattoo endpoint
   * @param {String} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  tattoo(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/tattoo" : "tattoo", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /**
   * Triggered endpoint
   * @param {String} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  triggered(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/triggered" : "triggered", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /**
   * VaultBoy endpoint
   * @param {String} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  vaultBoy(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/vault" : "vault", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /**
   * Wanted endpoint
   * @param {String} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  wanted(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/wanted" : "wanted", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /**
   * Karen endpoint
   * @param {String} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  karen(avatar) {
    if (!this.dev) throw new Error("Karen endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/karen", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /**
   * Challenger endpoint
   * @param {String} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  challenger(avatar) {
    if (!this.dev) throw new Error("Challenger endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/challenger", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /**
   * Bobross endpoint
   * @param {String} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  bobRoss(avatar) {
    if (!this.dev) throw new Error("Bobross endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/bobross", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /**
   * WaifuInsult endpoint
   * @param {String} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  waifuInsult(avatar) {
    if (!this.dev) throw new Error("WaifuInsult endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/waifuinsult", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /**
   * HeavyFear endpoint
   * @param {String} avatar Image you expect to be used
   * @returns {Promise<Buffer>} 
   */
  heavyFear(avatar) {
    if (!this.dev) throw new Error("HeavyFear endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/heavyfear", { avatar }).then(body => Buffer.from(body.data));
  }

  /**
   * WreckIt endpoint
   * @param {String} avatar Image you expect to be used
   * @returns {Promise<Buffer>} 
   */
  wreckIt(avatar) {
    if (!this.dev) throw new Error("WreckIt endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/wreckit", { avatar }).then(body => Buffer.from(body.data));
  }

  /**
   * Painting endpoint
   * @param {String} avatar Image you expect to be used
   * @returns {Promise<Buffer>} 
   */
  painting(avatar) {
    if (!this.dev) throw new Error("Painting endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/painting", { avatar }).then(body => Buffer.from(body.data));
  }

  /**
   * Garbage endpoint
   * @param {String} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  garbage(avatar) {
    if (!this.dev) throw new Error("Garbage endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/garbage", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
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
    return this._get(this.dev ? "generators/batslap" : "batslap", { slapper, slapped }).then(body => this.dev ? Buffer.from(body.data) : body);
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
    return this._get(this.dev ? "generators/fanslap" : "slap", { slapper, slapped }).then(body => this.dev ? Buffer.from(body.data) : body);
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
    return this._get(this.dev ? "generators/superpunch" : "superpunch", { puncher, punched }).then(body => this.dev ? Buffer.from(body.data) : body);
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
    return this._get(this.dev ? "generators/crush" : "crush", { crusher, crush }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /**
   * Confused endpoint
   * @param {String} avatar Image you expect to be used
   * @param {String} slapped Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  confused(avatar, photo) {
    if (!this.dev) throw new Error("Confused endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    photo = photo.replace(imageUrlRegex, ".png");
    return this._get("generators/confused", { avatar, photo }).then(body => Buffer.from(body.data));
  }

  /**
   * SuperSpank endpoint
   * @param {String} spanker Image you expect to be used
   * @param {String} spanked Image you expect to be used
   * @returns {Promise<Buffer>}
   */ 
  superSpank(spanker, spanked) {
    if (!this.dev) throw new Error("Super Spank endpoint is disabled while in production");
    spanker = spanker.replace(imageUrlRegex, ".png");
    spanked = spanked.replace(imageUrlRegex, ".png");
    return this._get("generators/superspank", { spanker, spanked }).then(body => Buffer.from(body.data));
  }  

  /**
   * Tinder endpoint
   * @param {String} avatar Image you expect to be used
   * @param {String} match Image you expect to be used
   * @returns {Promise<Buffer>}
   */ 
  tinderMatch(avatar, match) {
    if (!this.dev) throw new Error("Tinder Match endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    match = match.replace(imageUrlRegex, ".png");
    return this._get("generators/superspank", { avatar, match }).then(body => Buffer.from(body.data));
  }  

  /* Greetings endpoints */

  /**
   *
   * @param {String} [version="gearz"] The type/version of greeting image you want to use
   * @param {Boolean} [bot=false] A boolean saying if the user is a bot or not
   * @param {String} avatar Avatar url
   * @param {String} usertag User's tag, format: username#discrim
   * @param {String} guild guild name and guild member count seperated by #, format: guildname#memberCount
   * @returns {Promise<Buffer>}
   */
  welcome(version = "gearz", bot = false, avatar, usertag, guild) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? `greetings/${version}_welcome` : `${version}_welcome`, { bot, avatar, usertag, guild }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /* Farewell endpoints */

  /**
   *
   * @param {String} [version="gearz"] The type/version of farewell image you want to use
   * @param {Boolean} [bot=false] A boolean saying if the user is a bot or not
   * @param {String} avatar Avatar url
   * @param {String} usertag User's tag, format: username#discrim
   * @returns {Promise<Buffer>}
   */
  goodbye(version = "gearz", bot = false, avatar, usertag) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? `greetings/${version}_goodbye` : `${version}_goodbye`, { bot, avatar, usertag }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /* Filter endpoints */

  brightness(avatar, brightness) {
    if (!this.dev) throw new Error("Filter endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/brightness", { avatar, brightness }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  darkness(avatar, darkness) {
    if (!this.dev) throw new Error("Filter endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/darkness", { avatar, darkness }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  greyscale(avatar) {
    if (!this.dev) throw new Error("Filter endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/greyscale", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  invert(avatar) {
    if (!this.dev) throw new Error("Filter endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/invert", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  iGrey(avatar) {
    if (!this.dev) throw new Error("Filter endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/invertGreyscale", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  iThreshold(avatar, threshold) {
    if (!this.dev) throw new Error("Filter endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/invertThreshold", { avatar, threshold }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  sepia(avatar) {
    if (!this.dev) throw new Error("Filter endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/sepia", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  silhouette(avatar) {
    if (!this.dev) throw new Error("Filter endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/silhouette", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  threshold(avatar, threshold) {
    if (!this.dev) throw new Error("Filter endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/threshold", { avatar, threshold }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  /* Overlays */

  rainbow(avatar) {
    if (!this.dev) throw new Error("Overlay endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("overlays/rainbow", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  approved(avatar) {
    if (!this.dev) throw new Error("Overlay endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("overlays/approved", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
  }

  rejected(avatar) {
    if (!this.dev) throw new Error("Overlay endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("overlays/rejected", { avatar }).then(body => this.dev ? Buffer.from(body.data) : body);
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
        .set(this.dev ? "Authorization" : "token", this.token)
        .query(query)
        .then(res => {
          if (res.status !== 200) return reject(res);
          return resolve(res.body);
        }).catch(err => reject(err));
    });
  }

}

module.exports = IdioticClient;
