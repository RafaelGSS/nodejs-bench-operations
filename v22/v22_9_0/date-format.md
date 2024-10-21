## Date format MM/DD/YYYY


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Intl.DateTimeFormat().format(Date.now())      | █----------------------------- | 19357.48 ops/sec
Intl.DateTimeFormat().format(new Date())      | █----------------------------- | 18847.35 ops/sec
Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now()) | █----------------------------- | 18981.19 ops/sec
Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date()) | █----------------------------- | 17870.30 ops/sec
Reusing Intl.DateTimeFormat()                 | ████████████████-------------- | 526959.16 ops/sec
Date.toLocaleDateString()                     | ██████████████████████████████ | 1004797.14 ops/sec
Date.toLocaleDateString(undefined, twoDigitsLocaleOptions) | █----------------------------- | 23102.87 ops/sec
```
