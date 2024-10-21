## Function return


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Function returning null                       | ██████████████████████████████ | 1,961,681 ops/sec
Function returning explicitly undefined       | █████████████████████████████- | 1,915,955 ops/sec
Function returning implicitly undefined       | █████████████████████████████- | 1,912,928 ops/sec
Function returning string                     | █████████████████████████████- | 1,941,235 ops/sec
Function returning integer                    | █████████████████████████████- | 1,917,850 ops/sec
Function returning float                      | ██████████████████████████████ | 1,988,693 ops/sec
Function returning functions                  | █████████████████████████████- | 1,902,370 ops/sec
Function returning arrow functions            | ███████████████████████████--- | 1,766,359 ops/sec
Function returning empty object               | ███████████████████████████--- | 1,785,114 ops/sec
Function returning empty array                | ███████████████████████████--- | 1,810,759 ops/sec
```
