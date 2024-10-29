## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|146,120,880|73147531|
|Using optional chain (obj.field?.field2) (undefined)|94,744,439|47427377|
|Using and operator (obj.field && obj.field.field2) (Valid)|101,178,935|50707158|
|Using and operator (obj.field && obj.field.field2) (undefined)|102,154,215|51084103|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:22:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":146120880.94180742,"samples":73147531},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":94744439.25959247,"samples":47427377},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":101178935.95404884,"samples":50707158},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":102154215.16299972,"samples":51084103}]}-->
