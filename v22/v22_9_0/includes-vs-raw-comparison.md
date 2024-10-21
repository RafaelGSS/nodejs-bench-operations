## Array.includes vs raw comparison


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

using Array.includes                          | ██████████████████████-------- | 72374788.92 ops/sec
using Array.includes (first item)             | █████████████████████████----- | 82829265.42 ops/sec
Using raw comparison                          | ██████████████████████████████ | 99297759.95 ops/sec
Using raw comparison (first item)             | ██████████████████████████████ | 99334718.69 ops/sec
```
