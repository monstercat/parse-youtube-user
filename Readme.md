
# parse-youtube-user

  Parse a youtube shortname from a youtube url

  Includes a test suite generated from a youtube application form with
  thousands of users. So this accurately captures most ways people tend to paste
  their youtube url.

## Installation

  Install with npm

    $ npm install parse-youtube-user

## API

### parse(youtube_url)

The url can be in pretty much any format imaginable

## Example

```js
parse('http://m.youtube.com/channel/UC5F2oUCU91HQMjCxJeODGsA')
parse('http://m.youtube.com/user/officialdjtmz')
parse('http://www.youtube.com/channel/UC0ynNPczQ_Cc0Txs9xrIaRQ/videos')
parse('http://www.youtube.com/channel/UCCIlWlP_sh4iQTOGlcarSGw?feature=guide')
parse('/channel/UC3OMbFI3n2vR2BIGwG_pXVQ')
parse('channel/UC3OMbFI3n2vR2BIGwG_pXVQ')
parse('channel/UCV8dV53ALfpO2vjCuK5kyCA/videos')
parse('www.youtube.com/channel/UCcbzBlCbdiCZxCXAxuzla9g')
parse(' www.youtube.com/channel/UCcbzBlCbdiCZxCXAxuzla9g')
parse('/user/derp')
parse('user/derp')
parse('/user/derp?what')
parse('/user/derp/what')
parse('Http://YouTube.com/thevipermusic')
parse('youtube.com/user/ThatKaiburGuy')
parse('jackbox55')
```

## License

  The MIT License (MIT)

  Copyright (c) 2014 William Casarin

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
