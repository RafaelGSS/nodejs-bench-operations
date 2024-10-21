## Get the last item of an Array


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Length = 100 - Array.at                       | ██████████████████████████████ | 97579829.00 ops/sec
Length = 10_000 - Array.at                    | ██████████████████████████████ | 98194537.91 ops/sec
Length = 1_000_000 - Array.at                 | ██████████████████████████████ | 98117103.98 ops/sec
Length = 100 - Array[length - 1]              | █████████████████████████████- | 95915006.02 ops/sec
Length = 10_000 - Array[length - 1]           | ██████████████████████████████ | 98874853.96 ops/sec
Length = 1_000_000 - Array[length - 1]        | ██████████████████████████████ | 97649599.14 ops/sec
```
