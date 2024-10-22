## Parsing Integer


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Using parseInt(x, 10) - small number (2 len)  | █████████████████████████████- | 97,009,084 ops/sec
Using parseInt(x, 10) - big number (10 len)   | ██████████████████████████████ | 99,080,910 ops/sec
Using + - small number (2 len)                | ██████████████████████████████ | 98,244,961 ops/sec
Using + - big number (10 len)                 | ██████████████████████████████ | 98,373,516 ops/sec
```
