# Get tool actual version string

## CLI

```bash
npm i @k03mad/actual-versions -g
acver
# ╔════════╤════════════════╗
# ║ aria   │ 1.37.0         ║
# ╟────────┼────────────────╢
# ║ chrome │ 126.0.6478.182 ║
# ╟────────┼────────────────╢
# ║ curl   │ 8.8.0          ║
# ╚════════╧════════════════╝
```

## API

```bash
npm i @k03mad/actual-versions
```

```js
import {
    getAriaVersion
    getChromeVersion,
    getCurlVersion
} from '@k03mad/actual-versions';

const ariaVersion = await getAriaVersion();
// '1.37.0'

const chromeVersion = await getChromeVersion();
// '126.0.6478.182'

const curlVersion = await getCurlVersion();
// '8.8.0'
```
