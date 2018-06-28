declare module "idiotic-api" {

    export const version: string;

    export class IdioticClient {
        public constructor(token: string, options?: IdioticClientOptions);

        public token: string;
        public options?: IdioticClientOptions;
        public dev: boolean;
        public baseUrl: string;
        /* Generators */
        public blame(name: string): Promise<Buffer>;
        public pls(name: string): Promise<Buffer>;
        public snapchat(text: string): Promise<Buffer>;
        public achievement(avatar: string, text: string): Promise<Buffer>;
        public theSearch(avatar: string, text: string): Promise<Buffer>;
        public missing(avatar: string, text: string): Promise<Buffer>;
        public steam(avatar: string, text: string): Promise<Buffer>;
        public suggestion(avatar: string, suggestion: string): Promise<Buffer>;
        public beautiful(avatar: string): Promise<Buffer>;
        public facepalm(avatar: string): Promise<Buffer>;
        public respect(avatar: string): Promise<Buffer>;
        public stepped(avatar: string): Promise<Buffer>;
        public tattoo(avatar: string): Promise<Buffer>;
        public triggered(avatar: string): Promise<Buffer>;
        public vaultBoy(avatar: string): Promise<Buffer>;
        public wanted(avatar: string): Promise<Buffer>;
        public karen(avatar: string): Promise<Buffer>;
        public challenger(avatar: string): Promise<Buffer>;
        public bobRoss(avatar: string): Promise<Buffer>;
        public waifuInsult(avatar: string): Promise<Buffer>;
        public heavyFear(avatar: string): Promise<Buffer>;
        public wreckIt(avatar: string): Promise<Buffer>;
        public painting(avatar: string): Promise<Buffer>;
        public garbage(avatar: string): Promise<Buffer>;
        public batSlap(slapper: string, slapped: string): Promise<Buffer>;
        public superPunch(puncher: string, punched: string): Promise<Buffer>;
        public crush(crusher: string, crush: string): Promise<Buffer>;
        public confused(avatar: string, photo: string): Promise<Buffer>;
        public superSpank(spanker: string, spanked: string): Promise<Buffer>;
        public tinderMatch(avatar: string, match: string): Promise<Buffer>;
        public colour(colour: string): Promise<Buffer>;
        public color(color: string): Promise<Buffer>;
        public religion(avatar: string): Promise<Buffer>;
        public coffee(text1: string, text2: string): Promise<Buffer>;
        public zerotwo(avatar: string): Promise<Buffer>;
        public girls(avatar: string): Promise<Buffer>;
        public hates(avatar: string): Promise<Buffer>;
        public hide(avatar: string, target: string): Promise<Buffer>;
        public ignore(avatar: string): Promise<Buffer>;
        public time(avatar: string): Promise<Buffer>;
        public osu(user: string, theme: string): Promise<Buffer>;
        public sniper(avatar: string): Promise<Buffer>;
        public changemymind(avatar: string, text: string): Promise<Buffer>;
        public virtual(avatar: string): Promise<Buffer>;
        public kirby(avatar: string, text: string): Promise<Buffer>;
        /* Greetings */
        public welcome(version?: string, bot?: boolean, avatar: string, usertag: string, guild: string): Promise<Buffer>;
        public goodbye(version?: string, bot?: boolean, avatar: string, usertag: string): Promise<Buffer>;
        /* Effects */
        public brightness(avatar: string, brightness: number): Promise<Buffer>;
        public darkness(avatar: string, darkness: number): Promise<Buffer>;
        public greyscale(avatar: string): Promise<Buffer>;
        public invert(avatar: string): Promise<Buffer>;
        public iGrey(avatar: string): Promise<Buffer>;
        public iThreshold(avatar: string, threshold: number): Promise<Buffer>;
        public sepia(avatar: string): Promise<Buffer>;
        public silhouette(avatar: string): Promise<Buffer>;
        public threshold(avatar: string, threshold: number): Promise<Buffer>;
        /* Overlays */
        public rainbow(avatar: string): Promise<Buffer>;
        public approved(avatar: string): Promise<Buffer>;
        public rejected(avatar: string): Promise<Buffer>;
        /* Text */
        public owoify(text: string): Promise<string>;
        public mock(text: string): Promise<string>;
        public tiny(text: string, style: tinyStyle): Promise<string>;
        public cursive(text: string, style: cursiveStyle): Promise<string>;
        public vapor(text: string): Promise<string>;
        /* Private */
        public _get(endpoint: string, query?: { [key: string]: string }): Promise<any>;
    }

    export { IdioticClient as Client };

    export type IdioticClientOptions = {
        [x: string]: any;
        dev?: boolean;
        url?: string;
    };

    export type tinyStyle = "tiny" | "superscript" | "subscript";
    export type cursiveStyle = "bold" | "normal";
    export type osuTheme = "light" | "dark" | "darker";
}
