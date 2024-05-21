export class Socials {
  private socials = [
    {icon: 'simpleLinkedin', url: 'https://www.linkedin.com/in/elhabbazisoufiyan', content: 'Follow on Linkedin'},
    {icon: 'simpleGithub', url: 'https://github.com/soufiyanelhabbazi', content: 'Follow on Github'},
    {icon: 'simpleX', url: 'https://x.com/SoufiyanHB', content: 'Follow on X'},
    {icon: 'simpleLeetcode', url: 'https://leetcode.com/u/user8491Rm/', content: 'Follow on Leetcode'},
    {icon: 'simpleSpotify', url: 'https://open.spotify.com/user/317rcx3twqj3ewj7map5jyokwjva?si=3abc438b66ac485a&nd=1&dlsi=0ebd156da13344df', content: 'Follow on Spotify'}
  ];

  getSocials() {
    return this.socials;
  }
}
