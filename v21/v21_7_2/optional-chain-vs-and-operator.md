## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|910,543,794|96|
|Using optional chain (obj.field?.field2) (undefined)|910,939,993|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|911,119,081|100|
|Using and operator (obj.field && obj.field.field2) (undefined)|910,855,793|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:59:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":910543793.6378728,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":910939992.7062029,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":911119080.8179945,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":910855792.8557374,"samples":6}]}-->
