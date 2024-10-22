## Date format MM/DD/YYYY


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Intl.DateTimeFormat().format(Date.now())      | █----------------------------- | 19,223 ops/sec
Intl.DateTimeFormat().format(new Date())      | █----------------------------- | 18,735 ops/sec
Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now()) | █----------------------------- | 18,447 ops/sec
Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date()) | █----------------------------- | 17,829 ops/sec
Reusing Intl.DateTimeFormat()                 | ███████████████--------------- | 497,685 ops/sec
Date.toLocaleDateString()                     | ██████████████████████████████ | 997,224 ops/sec
Date.toLocaleDateString(undefined, twoDigitsLocaleOptions) | █----------------------------- | 22,807 ops/sec
```
