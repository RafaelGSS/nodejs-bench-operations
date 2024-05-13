## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,145,834|7572919|
|Using optional chain (obj.field?.field2) (undefined)|15,176,166|7588084|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,213,603|7606802|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,259,820|7629911|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:06:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15145834.910236724,"samples":7572919},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":15176166.755535465,"samples":7588084},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15213603.269764507,"samples":7606802},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15259820.870777205,"samples":7629911}]}-->
