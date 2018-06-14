const snekfetch = require("snekfetch");
const imageUrlRegex = /.webp$/g;
const cursiveStyles = ["bold", "normal"];
const tinyStyles = ["tiny", "superscript", "subscript"];

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
   * @param {string} token Idiotic API token
   * @param {IdioticClientOptions} [options] Client options
   */
  constructor(token, options = {}) {
    if (!token) throw new Error("Unknown Token: Token Missing");
    if (typeof token !== "string") throw new SyntaxError("Invalid Token: Token must be a String");

    /**
     * Idiot's Guide API token
     * @type {String}
     * @private
     */
    Object.defineProperty(this, "token", { value: token });
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
   * @param {string} name text to except back
   * @returns {Promise<Buffer>}
   */
  blame(name) {
    return this._get(this.dev ? "generators/blame" : "blame", { name }).then(body => Buffer.from(body));
  }

  /**
   * Pls endpoint
   * @param {string} name text to except back
   * @returns {Promise<Buffer>}
   */
  pls(name) {
    return this._get(this.dev ? "generators/pls" : "pls", { name }).then(body => Buffer.from(body));
  }

  /**
   * Snapchat endpoint
   * @param {string} text text to except back
   * @returns {Promise<Buffer>}
   */
  snapchat(text) {
    return this._get(this.dev ? "generators/snapchat" : "snapchat", { text }).then(body => Buffer.from(body));
  }

  /* Image and Text endpoints */

  /**
   * Achievement endpoint
   * @param {string} avatar Image you except to be used
   * @param {string} text text to except back
   * @returns {Promise<Buffer>}
   */
  achievement(avatar, text) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/achievement" : "achievement", { avatar, text }).then(body => Buffer.from(body));
  }

  /**
   * TheSearch endpoint
   * @param {string} avatar Image you except to be used
   * @param {string} text text to except back
   * @returns {Promise<Buffer>}
   */
  theSearch(avatar, text) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/thesearch" : "thesearch", { avatar, text }).then(body => Buffer.from(body));
  }

  /**
   * Missing endpoint
   * @param {string} avatar Image you except to be used
   * @param {string} text text to except back
   * @returns {Promise<Buffer>}
   */
  missing(avatar, text) {
    if (!this.dev) throw new Error("Missing endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/missing", { avatar, text }).then(body => Buffer.from(body));
  }

  /**
   * Steam endpoint
   * @param {string} avatar Image you except to be used
   * @param {string} text text to except back
   * @returns {Promise<Buffer>}
   */
  steam(avatar, text) {
    if (!this.dev) throw new Error("Steam endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/steam", { avatar, text }).then(body => Buffer.from(body));
  }

  /**
   * Missing endpoint
   * @param {string} avatar Image you except to be used
   * @param {string} text text to except back
   * @returns {Promise<Buffer>}
   */
  suggestion(avatar, suggestion) {
    if (!this.dev) throw new Error("Suggestion endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/suggestion", { avatar, suggestion }).then(body => Buffer.from(body));
  }

  /* Single Image endpoints */

  /**
   * Beautiful endpoint
   * @param {string} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  beautiful(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/beautiful" : "beautiful", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Facepalm endpoint
   * @param {string} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  facepalm(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/facepalm" : "facepalm", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Respect endpoint
   * @param {string} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  respect(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/respect" : "respect", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Stepped endpoint
   * @param {string} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  stepped(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/stepped" : "stepped", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Tattoo endpoint
   * @param {string} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  tattoo(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/tattoo" : "tattoo", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Triggered endpoint
   * @param {string} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  triggered(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/triggered" : "triggered", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * VaultBoy endpoint
   * @param {string} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  vaultBoy(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/vault" : "vault", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Wanted endpoint
   * @param {string} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  wanted(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/wanted" : "wanted", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Karen endpoint
   * @param {string} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  karen(avatar) {
    if (!this.dev) throw new Error("Karen endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/karen", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Challenger endpoint
   * @param {string} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  challenger(avatar) {
    if (!this.dev) throw new Error("Challenger endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/challenger", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Bobross endpoint
   * @param {string} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  bobRoss(avatar) {
    if (!this.dev) throw new Error("Bobross endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/bobross", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * WaifuInsult endpoint
   * @param {string} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  waifuInsult(avatar) {
    if (!this.dev) throw new Error("WaifuInsult endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/waifuinsult", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * HeavyFear endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>} 
   */
  heavyFear(avatar) {
    if (!this.dev) throw new Error("HeavyFear endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/heavyfear", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * WreckIt endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>} 
   */
  wreckIt(avatar) {
    if (!this.dev) throw new Error("WreckIt endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/wreckit", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Painting endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>} 
   */
  painting(avatar) {
    if (!this.dev) throw new Error("Painting endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/painting", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Garbage endpoint
   * @param {string} avatar Image you except to be used
   * @returns {Promise<Buffer>}
   */
  garbage(avatar) {
    if (!this.dev) throw new Error("Garbage endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/garbage", { avatar }).then(body => Buffer.from(body));
  }

  /* Double Image endpoints */

  /**
   * BatSlap endpoint
   * @param {string} slapper Image you expect to be used
   * @param {string} slapped Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  batSlap(slapper, slapped) {
    slapper = slapper.replace(imageUrlRegex, ".png");
    slapped = slapped.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/batslap" : "batslap", { slapper, slapped }).then(body => Buffer.from(body));
  }

  /**
   * FanSlap endpoint
   * @param {string} slapper Image you expect to be used
   * @param {string} slapped Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  fanSlap(slapper, slapped) {
    slapper = slapper.replace(imageUrlRegex, ".png");
    slapped = slapped.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/fanslap" : "slap", { slapper, slapped }).then(body => Buffer.from(body));
  }

  /**
   * SuperPunch endpoint
   * @param {string} puncher Image you expect to be used
   * @param {string} punched Image you expect to be used
   * @returns {Promise<Buffer>}
   */ 
  superPunch(puncher, punched) {
    puncher = puncher.replace(imageUrlRegex, ".png");
    punched = punched.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/superpunch" : "superpunch", { puncher, punched }).then(body => Buffer.from(body));
  }  

  /**
   * Crush endpoint
   * @param {string} crusher Image you expect to be used
   * @param {string} crush Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  crush(crusher, crush) {
    crusher = crusher.replace(imageUrlRegex, ".png");
    crush = crush.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? "generators/crush" : "crush", { crusher, crush }).then(body => Buffer.from(body));
  }

  /**
   * Confused endpoint
   * @param {string} avatar Image you expect to be used
   * @param {string} slapped Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  confused(avatar, photo) {
    if (!this.dev) throw new Error("Confused endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    photo = photo.replace(imageUrlRegex, ".png");
    return this._get("generators/confused", { avatar, photo }).then(body => Buffer.from(body));
  }

  /**
   * SuperSpank endpoint
   * @param {string} spanker Image you expect to be used
   * @param {string} spanked Image you expect to be used
   * @returns {Promise<Buffer>}
   */ 
  superSpank(spanker, spanked) {
    if (!this.dev) throw new Error("Super Spank endpoint is disabled while in production");
    spanker = spanker.replace(imageUrlRegex, ".png");
    spanked = spanked.replace(imageUrlRegex, ".png");
    return this._get("generators/superspank", { spanker, spanked }).then(body => Buffer.from(body));
  }  

  /**
   * Tinder endpoint
   * @param {string} avatar Image you expect to be used
   * @param {string} match Image you expect to be used
   * @returns {Promise<Buffer>}
   */ 
  tinderMatch(avatar, match) {
    if (!this.dev) throw new Error("Tinder Match endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    match = match.replace(imageUrlRegex, ".png");
    return this._get("generators/tinder", { avatar, match }).then(body => Buffer.from(body));
  }  

  /**
   * Colour endpoint
   * @param {string} colour Supply a colour code in any of these supported formats `hex`, `rgb`, `rgba`
   * @returns {Promise<Buffer>}
   */ 
  colour(colour) {
    if (!this.dev) throw new Error("Colour endpoint is disabled while in production");
    return this._get("generators/colour", { colour }).then(body => Buffer.from(body));
  }
  
  /**
   * Color endpoint
   * @param {String} color Supply a color code in any of these supported formats `hex`, `rgb`, `rgba`
   * @returns {Promise<Buffer>}
   */ 
  color(...args) {
    return this.colour(...args);
  }

  /**
   * Religion endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */ 
  religion(avatar) {
    if (!this.dev) throw new Error("Religion endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/religion", { avatar }).then(body => Buffer.from(body));
  }  

  /**
   * Coffee endpoint
   * @param {string} text1 Supply the build up text
   * @param {string} text2 Supply the punch line text
   * @returns {Promise<Buffer>}
   */ 
  coffee(text1, text2) {
    if (!this.dev) throw new Error("Coffee endpoint is disabled while in production");
    return this._get("generators/coffee", { text1, text2 }).then(body => Buffer.from(body));
  }  

  /**
   * Zero Two Picture endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */ 
  zerotwo(avatar) {
    if (!this.dev) throw new Error("Zero Two endpoint is disabled while in production");
    return this._get("generators/02picture", { avatar }).then(body => Buffer.from(body));
  }  

  /**
   * Girls endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */ 
  girls(avatar) {
    if (!this.dev) throw new Error("Girls endpoint is disabled while in production");
    return this._get("generators/girls", { avatar }).then(body => Buffer.from(body));
  }  

  /**
   * Hates endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */ 
  hates(avatar) {
    if (!this.dev) throw new Error("Hates endpoint is disabled while in production");
    return this._get("generators/hates", { avatar }).then(body => Buffer.from(body));
  }  

  /**
   * Hide endpoint
   * @param {string} avatar Image you expect to be used
   * @param {string} target Image you expect to be used
   * @returns {Promise<Buffer>}
   */ 
  hide(avatar, target) {
    if (!this.dev) throw new Error("Hide endpoint is disabled while in production");
    return this._get("generators/hide", { avatar, target }).then(body => Buffer.from(body));
  }  

  /**
   * Ignore endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */ 
  ignore(avatar) {
    if (!this.dev) throw new Error("Ignore endpoint is disabled while in production");
    return this._get("generators/ignore", { avatar }).then(body => Buffer.from(body));
  }  

  /**
   * Time endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */ 
  time(avatar) {
    if (!this.dev) throw new Error("Time endpoint is disabled while in production");
    return this._get("generators/time", { avatar }).then(body => Buffer.from(body));
  }  

  /* Greetings endpoints */

  /**
   * 
   * @param {string} [version="gearz"] The type/version of greeting image you want to use
   * @param {boolean} [bot=false] A boolean saying if the user is a bot or not
   * @param {string} avatar Image you expect to be used
   * @param {string} usertag User's tag, format: username#discrim
   * @param {string} guild guild name and guild member count seperated by #, format: guildname#memberCount
   * @returns {Promise<Buffer>}
   */
  welcome(version = "gearz", bot = false, avatar, usertag, guild) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? `greetings/${version}_welcome` : `${version}_welcome`, { bot, avatar, usertag, guild }).then(body => Buffer.from(body));
  }

  /* Farewell endpoints */

  /**
   *
   * @param {string} [version="gearz"] The type/version of farewell image you want to use
   * @param {boolean} [bot=false] A boolean saying if the user is a bot or not
   * @param {string} avatar Image you expect to be used
   * @param {string} usertag User's tag, format: username#discrim
   * @returns {Promise<Buffer>}
   */
  goodbye(version = "gearz", bot = false, avatar, usertag) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get(this.dev ? `greetings/${version}_goodbye` : `${version}_goodbye`, { bot, avatar, usertag }).then(body => Buffer.from(body));
  }

  /* Filter endpoints */

  /**
   * Brightness endpoint
   * @param {string} avatar Image you expect to be used
   * @param {number} brightness A numerical value between 0 and 100 to brighten the image by
   * @returns {Promise<Buffer>}
   */
  brightness(avatar, brightness) {
    if (!this.dev) throw new Error("Filter endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/brightness", { avatar, brightness }).then(body => Buffer.from(body));
  }

  /**
   * Darkness endpoint
   * @param {string} avatar Image you expect to be used
   * @param {number} darkness A numerical value between 0 and 100 to darken the image by
   * @returns {Promise<Buffer>}
   */
  darkness(avatar, darkness) {
    if (!this.dev) throw new Error("Filter endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/darkness", { avatar, darkness }).then(body => Buffer.from(body));
  }

  /**
   * Greyscale endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  greyscale(avatar) {
    if (!this.dev) throw new Error("Filter endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/greyscale", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Invert endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  invert(avatar) {
    if (!this.dev) throw new Error("Filter endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/invert", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Inverted Greyscale endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  iGrey(avatar) {
    if (!this.dev) throw new Error("Filter endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/invertGreyscale", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Inverted Threshold endpoint
   * @param {string} avatar Image you expect to be used
   * @param {number} threshold The threshold to apply in a range of 0 to 255
   * @returns {Promise<Buffer>}
   */
  iThreshold(avatar, threshold) {
    if (!this.dev) throw new Error("Filter endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/invertThreshold", { avatar, threshold }).then(body => Buffer.from(body));
  }

  /**
   * Sepia endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  sepia(avatar) {
    if (!this.dev) throw new Error("Filter endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/sepia", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Silhouette endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  silhouette(avatar) {
    if (!this.dev) throw new Error("Filter endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/silhouette", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Threshold endpoint
   * @param {string} avatar Image you expect to be used
   * @param {number} threshold The threshold to apply in a range of 0 to 255
   * @returns {Promise<Buffer>}
   */
  threshold(avatar, threshold) {
    if (!this.dev) throw new Error("Filter endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/threshold", { avatar, threshold }).then(body => Buffer.from(body));
  }

  /* Overlays */

  /**
   * Rainbow endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  rainbow(avatar) {
    if (!this.dev) throw new Error("Overlay endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("overlays/rainbow", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Approved endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  approved(avatar) {
    if (!this.dev) throw new Error("Overlay endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("overlays/approved", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Rejected endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  rejected(avatar) {
    if (!this.dev) throw new Error("Overlay endpoint is disabled while in production");
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("overlays/rejected", { avatar }).then(body => Buffer.from(body));
  }

  /* Text */

  /**
   * Owoify endpoint
   * @param {string} text The text you want to alter
   * @returns {string}
   */
  owoify(text) {
    if (!this.dev) throw new Error("Owoify endpoint is disabled while in production");
    if (typeof text !== "string") throw new TypeError("Text can only be a string");
    return this._get("text/owoify", { text }).then(body => body.text);
  }

  /**
   * Mock endpoint
   * @param {string} text The text you want to alter
   * @returns {string}
   */
  mock(text) {
    if (!this.dev) throw new Error("Mock endpoint is disabled while in production");
    if (typeof text !== "string") throw new TypeError("Text can only be a string");
    return this._get("text/mock", { text }).then(body => body.text);
  }

  /**
   * Tiny endpoint
   * @param {string} text The text you want to alter
   * @param {string} style The style of the text, tiny, superscript or subscript
   * @returns {string}
   */
  tiny(text, style) {
    if (!this.dev) throw new Error("Tiny endpoint is disabled while in production");
    if (typeof text !== "string") throw new TypeError("Text can only be a string");
    if (!tinyStyles.includes(style)) throw new TypeError("Style must be either tiny, superscript or subscript");
    return this._get("text/tinytext", { text, style }).then(body => body.text);
  }

  /**
   * cursive endpoint
   * @param {string} text The text you want to alter
   * @param {string} style The style of the text, bold or normal
   * @returns {string}
   */
  cursive(text, style) {
    if (!this.dev) throw new Error("Cursive endpoint is disabled while in production");
    if (typeof text !== "string") throw new TypeError("Text can only be a string");
    if (!cursiveStyles.includes(style)) throw new TypeError("Style must be either normal or bold");
    return this._get("text/cursive", { text, style }).then(body => body.text);
  }

  /**
   * Vapor endpoint
   * @param {string} text The text you want to alter
   * @returns {string}
   */
  vapor(text) {
    if (!this.dev) throw new Error("Vapor endpoint is disabled while in production");
    if (typeof text !== "string") throw new TypeError("Text can only be a string");
    return this._get("text/vaporwave", { text }).then(body => body.text);
  }

  /**
   * A private method used to get endpoints with querys
   * @param {string} endpoint endpoint string
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
