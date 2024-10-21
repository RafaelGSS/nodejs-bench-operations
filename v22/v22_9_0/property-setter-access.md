## Property Setter Access


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Setter (class)                                | ██████████████████████████████ | 100,849,462 ops/sec
Setter                                        | ███--------------------------- | 11,100,592 ops/sec
Method                                        | █████████████████████████████- | 99,267,116 ops/sec
DefineProperty (setter)                       | ████████████████████████████-- | 95,352,468 ops/sec
DefineProperty (setter & enumerable=false)    | ███--------------------------- | 11,159,151 ops/sec
DefineProperty (setter & configurable=false)  | ███--------------------------- | 11,554,499 ops/sec
DefineProperty (setter & enumerable=false & configurable=false) | ███--------------------------- | 11,579,726 ops/sec
DefineProperty (writable)                     | █████████████████████████████- | 96,237,908 ops/sec
DefineProperty (writable & enumerable=false)  | █████████████████████████████- | 96,159,782 ops/sec
DefineProperty (writable & enumerable=false & configurable=false) | █████████████████████████████- | 98,458,799 ops/sec
DefineProperties (setter)                     | ██████████████████████████████ | 100,956,294 ops/sec
DefineProperties (setter & enumerable=false)  | ███--------------------------- | 11,417,293 ops/sec
DefineProperties (setter & enumerable=false & configurable=false) | ███--------------------------- | 11,577,234 ops/sec
```
