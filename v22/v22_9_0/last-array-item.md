## Get the last item of an Array


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Length = 100 - Array.at                       | ██████████████████████████████ | 99,277,411 ops/sec
Length = 10_000 - Array.at                    | ██████████████████████████████ | 99,406,725 ops/sec
Length = 1_000_000 - Array.at                 | ██████████████████████████████ | 99,817,893 ops/sec
Length = 100 - Array[length - 1]              | ██████████████████████████████ | 98,845,308 ops/sec
Length = 10_000 - Array[length - 1]           | ████████████████████████████-- | 91,669,982 ops/sec
Length = 1_000_000 - Array[length - 1]        | █████████████████████████████- | 95,236,734 ops/sec
```
