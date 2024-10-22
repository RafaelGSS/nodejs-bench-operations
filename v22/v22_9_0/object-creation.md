## Object Creation


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Object.create(null)                           | ██████████-------------------- | 32,416,019 ops/sec
Object.create({})                             | █----------------------------- | 2,099,724 ops/sec
Cached Empty.prototype                        | ██████████████████████████████ | 98,377,220 ops/sec
Empty.prototype                               | █----------------------------- | 2,440,986 ops/sec
Empty class                                   | ------------------------------ | 1,586,513 ops/sec
```
