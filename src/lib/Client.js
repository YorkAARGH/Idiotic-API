const fetch = require("node-fetch");
const querystring = require("querystring");
const imageUrlRegex = /.webp$/g;
const cursiveStyles = ["bold", "normal"];
const tinyStyles = ["tiny", "superscript", "subscript"];
const osuThemes = ["light", "dark", "darker"];
const discordHouses = ["bravery", "balance", "brilliance"];

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
   * @param {string} name The name you want to blame
   * @returns {Promise<Buffer>}
   */
  blame(name) {
    return this._get("generators/blame", { name }).then(body => Buffer.from(body));
  }

  /**
   * Pls endpoint
   * @param {string} name The name you want to beg
   * @returns {Promise<Buffer>}
   */
  pls(name) {
    return this._get("generators/pls", { name }).then(body => Buffer.from(body));
  }

  /**
   * Snapchat endpoint
   * @param {string} text The text you want to display
   * @returns {Promise<Buffer>}
   */
  snapchat(text) {
    return this._get("generators/snapchat", { text }).then(body => Buffer.from(body));
  }

  /**
   * Aliens endpoint
   * @param {string} top The text you want to display
   * @param {string} bottom The text you want to display
   * @returns {Promise<Buffer>}
   */
  aliens(top, bottom) {
    return this._get("generators/aliens", { top, bottom }).then(body => Buffer.from(body));
  }

  /* Image and Text endpoints */

  /**
   * Achievement endpoint
   * @param {string} avatar Image you except to be used
   * @param {string} text The text you want to display
   * @returns {Promise<Buffer>}
   */
  achievement(avatar, text) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/achievement", { avatar, text }).then(body => Buffer.from(body));
  }

  /**
   * TheSearch endpoint
   * @param {string} avatar Image you except to be used
   * @param {string} text The text you want to display
   * @returns {Promise<Buffer>}
   */
  theSearch(avatar, text) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/thesearch", { avatar, text }).then(body => Buffer.from(body));
  }

  /**
   * Missing endpoint
   * @param {string} avatar Image you except to be used
   * @param {string} text The text you want to display
   * @returns {Promise<Buffer>}
   */
  missing(avatar, text) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/missing", { avatar, text }).then(body => Buffer.from(body));
  }

  /**
   * Steam endpoint
   * @param {string} avatar Image you except to be used
   * @param {string} text The text you want to display
   * @returns {Promise<Buffer>}
   */
  steam(avatar, text) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/steam", { avatar, text }).then(body => Buffer.from(body));
  }

  /**
   * Suggestion endpoint
   * @param {string} avatar Image you except to be used
   * @param {string} suggestion The text you want to display
   * @returns {Promise<Buffer>}
   */
  suggestion(avatar, suggestion) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/suggestion", { avatar, suggestion }).then(body => Buffer.from(body));
  }

  /* Single Image endpoints */

  /**
   * Beautiful endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  beautiful(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/beautiful", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Facepalm endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  facepalm(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/facepalm", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Respect endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  respect(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/respect", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Stepped endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  stepped(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/stepped", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Tattoo endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  tattoo(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/tattoo", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Triggered endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  triggered(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/triggered", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * VaultBoy endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  vaultBoy(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/vault", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Wanted endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  wanted(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/wanted", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Karen endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  karen(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/karen", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Challenger endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  challenger(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/challenger", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Bobross endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  bobRoss(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/bobross", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * WaifuInsult endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  waifuInsult(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/waifuinsult", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * HeavyFear endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  heavyFear(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/heavyfear", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * WreckIt endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  wreckIt(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/wreckit", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Painting endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  painting(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/painting", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Garbage endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  garbage(avatar) {
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
    return this._get("generators/batslap", { slapper, slapped }).then(body => Buffer.from(body));
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
    return this._get("generators/fanslap", { slapper, slapped }).then(body => Buffer.from(body));
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
    return this._get("generators/superpunch", { puncher, punched }).then(body => Buffer.from(body));
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
    return this._get("generators/crush", { crusher, crush }).then(body => Buffer.from(body));
  }

  /**
   * Confused endpoint
   * @param {string} avatar Image you expect to be used
   * @param {string} photo Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  confused(avatar, photo) {
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
    return this._get("generators/colour", { colour }).then(body => Buffer.from(body));
  }

  /**
   * Color endpoint
   * @param {string} color Supply a color code in any of these supported formats `hex`, `rgb`, `rgba`
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
    return this._get("generators/coffee", { text1, text2 }).then(body => Buffer.from(body));
  }

  /**
   * Zero Two Picture endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  zerotwo(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/zerotwopicture", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Girls endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  girls(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/girls", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Hates endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  hates(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/hates", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Hide endpoint
   * @param {string} avatar Image you expect to be used
   * @param {string} target Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  hide(avatar, target) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    target = target.replace(imageUrlRegex, ".png");
    return this._get("generators/hide", { avatar, target }).then(body => Buffer.from(body));
  }

  /**
   * Ignore endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  ignore(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/ignore", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Time endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  time(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/time", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * osu! endpoint
   * @param {string} user This is the osu! username.
   * @param {string} theme Select between 3 valid themes, light, dark and darker
   * @returns {Promise<Buffer>}
   */
  osu(user, theme) {
    if (!osuThemes.includes(theme)) throw new TypeError("Theme must be either light, dark or darker");
    return this._get("generators/osu", { user, theme }).then(body => Buffer.from(body));
  }

  /**
   * Sniper endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  sniper(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/sniper", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Change my mind endpoint
   * @param {string} avatar Image you expect to be used
   * @param {string} text Supply the build up text
   * @returns {Promise<Buffer>}
   */
  changemymind(avatar, text) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/changemymind", { avatar, text }).then(body => Buffer.from(body));
  }

  /**
   * Virtual endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  virtual(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/vr", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Kirby School endpoint
   * @param {string} avatar Image you expect to be used
   * @param {string} text Supply the build up text
   * @returns {Promise<Buffer>}
   */
  kirby(avatar, text) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("generators/kirby", { avatar, text }).then(body => Buffer.from(body));
  }

  /* Greetings endpoints */

  /**
   *
   * @param {string} type The type of message, welcome or farewell
   * @param {string} version The version of greeting image you want to use
   * @param {boolean} bot A boolean saying if the user is a bot or not
   * @param {string} avatar Image you expect to be used
   * @param {string} username The username you wish to display
   * @param {string} discriminator The discriminator of the user
   * @param {string} guildName The guild name for the image
   * @param {number} memberCount The member count of the guild
   * @param {string} message The message you want to include in your images (Not all versions support this.)
   * @returns {Promise<Buffer>}
   */
  welcomer(type, version, bot, avatar, username, discriminator, guildName, memberCount, message = "") {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("greetings/unified", { version, type, bot, avatar, username, discriminator, guildName, memberCount, message }).then(body => Buffer.from(body));
  }

  /* Filter endpoints */

  /**
   * Brightness endpoint
   * @param {string} avatar Image you expect to be used
   * @param {number} brightness A numerical value between 0 and 100 to brighten the image by
   * @returns {Promise<Buffer>}
   */
  brightness(avatar, brightness) {
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
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/darkness", { avatar, darkness }).then(body => Buffer.from(body));
  }

  /**
   * Greyscale endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  greyscale(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/greyscale", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Invert endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  invert(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/invert", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Inverted Greyscale endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  iGrey(avatar) {
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
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/invertThreshold", { avatar, threshold }).then(body => Buffer.from(body));
  }

  /**
   * Sepia endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  sepia(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("effects/sepia", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Silhouette endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  silhouette(avatar) {
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
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("overlays/rainbow", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Discord House endpoint
   * @param {string} avatar Image you expect to be used
   * @param {string} house The discord house icon and colour scheme you want for your overlay
   * @returns {Promise<Buffer>}
   */
  discordHouse(avatar, house) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    if (!discordHouses.includes(house)) throw new TypeError("House must be either bravery, balance or brilliance");
    return this._get("overlays/discord", { avatar, house }).then(body => Buffer.from(body));
  }

  /**
   * Approved endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  approved(avatar) {
    avatar = avatar.replace(imageUrlRegex, ".png");
    return this._get("overlays/approved", { avatar }).then(body => Buffer.from(body));
  }

  /**
   * Rejected endpoint
   * @param {string} avatar Image you expect to be used
   * @returns {Promise<Buffer>}
   */
  rejected(avatar) {
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
    if (typeof text !== "string") throw new TypeError("Text can only be a string");
    return this._get("text/owoify", { text }).then(body => body.text);
  }

  /**
   * Mock endpoint
   * @param {string} text The text you want to alter
   * @returns {string}
   */
  mock(text) {
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
    if (typeof text !== "string") throw new TypeError("Text can only be a string");
    return this._get("text/vaporwave", { text }).then(body => body.text);
  }

  /**
	 * Profile endpoint
   * @param {string} name The name you want to display
   * @param {number} points The points you want to display
   * @param {number} level The level you want to display
   * @param {string} avatar The avatar you want to display
   * @param {string} [theme] The theme you want to use
   * @param {number} [expbar] The value you want to use to display on the exp bar
   * @param {number} [remaining] The the value you want to display below the exp bar
   * @returns {Promise<Buffer>}
   */
  profile(name, points, level, avatar, theme = "blurple", expbar, remaining) {
    return this._get("profile/card", { name, points, level, avatar, theme, expbar, remaining }).then(body => Buffer.from(body));
  }

  /**
   * A private method used to get endpoints with queries
   * @param {string} endpoint endpoint string
   * @param {Object} [query={}] query object
   * @returns {Promise<any>}
   * @private
   */
  _get(endpoint, query = {}) {
    const qs = querystring.stringify(query);
    return fetch(`${this.baseUrl}${endpoint}?${qs}`, { headers: { [this.dev ? "Authorization" : "token"]: this.token } })
      .then(res => {
        if (res.status !== 200) return console.log(`API Error ${res.status}: ${res.body}`);
        return res.buffer();
      }).catch(err => console.log(err));
  }

}

module.exports = IdioticClient;
