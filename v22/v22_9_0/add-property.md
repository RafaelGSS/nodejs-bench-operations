## Adding property


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Directly in the object                        | ██████████████████████████████ | 101,088,669 ops/sec
Using dot notation                            | █████████████████████--------- | 71,930,552 ops/sec
Using define property (writable)              | █----------------------------- | 4,892,939 ops/sec
Using define property initialized (writable)  | ██---------------------------- | 6,920,781 ops/sec
Using define property (getter)                | █----------------------------- | 2,418,761 ops/sec
```
