# Get actual versions of some tools

## CLI

```bash
npm i @k03mad/actual-versions -g
acver
# ╔════════╤═══════════════╗
# ║ aria   │ 1.37.0        ║
# ╟────────┼───────────────╢
# ║ chrome │ 127.0.6533.99 ║
# ╟────────┼───────────────╢
# ║ curl   │ 8.9.1         ║
# ╟────────┼───────────────╢
# ║ nodejs │ 22.6.0        ║
# ╚════════╧═══════════════╝
```

## API

```bash
npm i @k03mad/actual-versions
```

```js
import {
    getAriaVersion
    getChromeVersion,
    getCurlVersion,
    getNodeJsVersion,
} from '@k03mad/actual-versions';

const ariaVersion = await getAriaVersion();
// '1.37.0'

const chromeVersion = await getChromeVersion();
// '126.0.6478.182'

const curlVersion = await getCurlVersion();
// '8.8.0'

const nodeJsVersion = await getNodeJsVersion();
// '22.6.0'
```
