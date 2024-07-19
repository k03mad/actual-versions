# Get tool actual version string

## Global

```bash
npm i @k03mad/acver -g
acver
# ╔════════╤════════════════╗
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
import {getChromeVersion, getCurlVersion} from '@k03mad/acver';

const chrome = await getChromeVersion();
// '126.0.6478.182'

const curl = await getCurlVersion();
// '8.8.0'
```
