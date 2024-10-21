## Comparison using `instanceof`


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

[True conditional] Using instanceof only      | ------------------------------ | 400169.49 ops/sec
[True conditional] Using constructor name     | ------------------------------ | 388365.55 ops/sec
[True conditional] Check if property is valid then instanceof  | ------------------------------ | 371247.11 ops/sec
[False conditional] Using instanceof only     | ██████████████████████████████ | 98248121.78 ops/sec
[False conditional] Using constructor name    | ████████████████████████████-- | 91881951.57 ops/sec
[False conditional] Check if property is valid then instanceof  | ██████████████████████████████ | 99113512.49 ops/sec
```
