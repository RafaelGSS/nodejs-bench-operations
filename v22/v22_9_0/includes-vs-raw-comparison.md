## Array.includes vs raw comparison


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

using Array.includes                          | ██████████████████████-------- | 73,678,894 ops/sec
using Array.includes (first item)             | █████████████████████████----- | 82,755,579 ops/sec
Using raw comparison                          | ██████████████████████████████ | 99,860,784 ops/sec
Using raw comparison (first item)             | ██████████████████████████████ | 100,072,644 ops/sec
```
