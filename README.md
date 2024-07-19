# Get tool actual version string

## CLI

```bash
npm i @k03mad/acver -g
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
npm i @k03mad/acver
```

```js
import {
    getAriaVersion
    getChromeVersion,
    getCurlVersion
} from '@k03mad/acver';

const ariaVersion = await getAriaVersion();
// '1.37.0'

const chromeVersion = await getChromeVersion();
// '126.0.6478.182'

const curlVersion = await getCurlVersion();
// '8.8.0'
```
