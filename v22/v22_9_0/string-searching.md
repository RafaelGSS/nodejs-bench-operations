## String searching


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Using includes                                | ██████████████████████████████ | 15,849,995 ops/sec
Using indexof                                 | ██████████████████████████████ | 16,049,843 ops/sec
Using RegExp.test                             | █████████████████████████----- | 13,157,213 ops/sec
Using RegExp.text with cached regex pattern   | ███████████████████████████--- | 14,249,363 ops/sec
Using new RegExp.test                         | █████████--------------------- | 4,854,048 ops/sec
Using new RegExp.test with cached regex pattern | ██████████-------------------- | 5,508,947 ops/sec
```
