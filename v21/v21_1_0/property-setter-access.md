## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|868,830,228|98|
|Setter|13,759,469|98|
|Method|869,293,834|97|
|DefineProperty (setter)|870,313,404|99|
|DefineProperty (setter & enumerable=false)|13,781,365|96|
|DefineProperty (setter & configurable=false)|13,737,521|99|
|DefineProperty (setter & enumerable=false & configurable=false)|13,739,756|99|
|DefineProperty (writable)|871,601,267|98|
|DefineProperty (writable & enumerable=false)|871,691,385|98|
|DefineProperty (writable & enumerable=false & configurable=false)|872,236,292|98|
|DefineProperties (setter)|870,049,875|97|
|DefineProperties (setter & enumerable=false)|13,677,147|99|
|DefineProperties (setter & enumerable=false & configurable=false)|13,048,908|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 19:05:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":868830227.8883955,"samples":6},{"name":"Setter","opsSec":13759469.30156521,"samples":4},{"name":"Method","opsSec":869293834.1711546,"samples":6},{"name":"DefineProperty (setter)","opsSec":870313403.8669031,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":13781365.028653776,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":13737521.323463626,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":13739756.00768191,"samples":5},{"name":"DefineProperty (writable)","opsSec":871601266.6923369,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":871691384.8392708,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":872236292.15871,"samples":6},{"name":"DefineProperties (setter)","opsSec":870049874.6691028,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":13677147.413323408,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":13048907.784362331,"samples":5}]}-->
