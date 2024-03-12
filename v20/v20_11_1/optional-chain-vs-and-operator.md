## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|846,366,058|92|
|Using optional chain (obj.field?.field2) (undefined)|845,141,325|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|841,826,320|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|844,150,907|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:55:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":846366057.6667393,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":845141325.3021436,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":841826320.4626495,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":844150907.3495811,"samples":7}]}-->
