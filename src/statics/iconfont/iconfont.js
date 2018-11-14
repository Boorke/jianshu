import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1542217766376'); /* IE9*/
    src: url('./iconfont.eot?t=1542217766376#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1542217766376') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1542217766376#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
