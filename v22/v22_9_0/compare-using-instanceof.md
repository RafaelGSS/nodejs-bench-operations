## Comparison using `instanceof`


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

[True conditional] Using instanceof only      | ------------------------------ | 396,101 ops/sec
[True conditional] Using constructor name     | ------------------------------ | 381,714 ops/sec
[True conditional] Check if property is valid then instanceof  | ------------------------------ | 362,269 ops/sec
[False conditional] Using instanceof only     | █████████████████████████████- | 97,195,989 ops/sec
[False conditional] Using constructor name    | ██████████████████████████████ | 98,029,228 ops/sec
[False conditional] Check if property is valid then instanceof  | ██████████████████████████████ | 99,173,222 ops/sec
```
