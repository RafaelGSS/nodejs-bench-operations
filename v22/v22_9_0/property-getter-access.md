## Property Getter Access


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Getter (class)                                | ██████████████████████████████ | 96,137,210 ops/sec
Getter                                        | ███████████████--------------- | 49,013,013 ops/sec
Method                                        | ██████████████████████████████ | 97,358,853 ops/sec
DefineProperty (getter)                       | ██████████████████████████████ | 95,738,527 ops/sec
DefineProperty (getter & enumerable=false)    | ███████████████--------------- | 50,238,409 ops/sec
DefineProperty (getter & configurable=false)  | █████████████████████████████- | 95,143,386 ops/sec
DefineProperty (getter & enumerable=false & configurable=false) | ████████████████-------------- | 50,613,479 ops/sec
DefineProperty (writable)                     | ██████████████████████████████ | 96,117,330 ops/sec
DefineProperty (writable & enumerable=false)  | █████████████████████████████- | 95,196,836 ops/sec
DefineProperty (writable & enumerable=false & configurable=false) | ██████████████████████████████ | 96,251,177 ops/sec
DefineProperties (getter)                     | ████████████████-------------- | 51,149,541 ops/sec
DefineProperties (getter & enumerable=false)  | ████████████████-------------- | 50,995,850 ops/sec
DefineProperties (getter & enumerable=false & configurable=false) | ██████████████---------------- | 46,364,626 ops/sec
```
