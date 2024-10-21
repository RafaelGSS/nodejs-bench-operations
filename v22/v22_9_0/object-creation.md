## Object Creation


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Object.create(null)                           | ██████████-------------------- | 32702879.08 ops/sec
Object.create({})                             | █----------------------------- | 2116415.47 ops/sec
Cached Empty.prototype                        | ██████████████████████████████ | 102497407.86 ops/sec
Empty.prototype                               | █----------------------------- | 2545470.76 ops/sec
Empty class                                   | ------------------------------ | 1576326.93 ops/sec
```
