## Function return


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Function returning null                       | █████████████████████████████- | 1950790.76 ops/sec
Function returning explicitly undefined       | █████████████████████████████- | 1930043.31 ops/sec
Function returning implicitly undefined       | █████████████████████████████- | 1918187.49 ops/sec
Function returning string                     | ██████████████████████████████ | 1999436.17 ops/sec
Function returning integer                    | █████████████████████████████- | 1924399.61 ops/sec
Function returning float                      | ██████████████████████████████ | 2012078.18 ops/sec
Function returning functions                  | █████████████████████████████- | 1920364.24 ops/sec
Function returning arrow functions            | ██████████████████████████---- | 1760445.46 ops/sec
Function returning empty object               | ██████████████████████████---- | 1776220.90 ops/sec
Function returning empty array                | ███████████████████████████--- | 1830511.93 ops/sec
```
