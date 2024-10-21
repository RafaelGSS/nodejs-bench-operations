## Adding property


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Directly in the object                        | ██████████████████████████████ | 98546499.33 ops/sec
Using dot notation                            | █████████████████████--------- | 68418124.94 ops/sec
Using define property (writable)              | █----------------------------- | 4906986.92 ops/sec
Using define property initialized (writable)  | ██---------------------------- | 6919126.75 ops/sec
Using define property (getter)                | █----------------------------- | 2415740.61 ops/sec
```
