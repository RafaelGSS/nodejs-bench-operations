## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|126,550,321|63355075|
|Using optional chain (obj.field?.field2) (undefined)|92,189,126|46094577|
|Using and operator (obj.field && obj.field.field2) (Valid)|92,981,235|46562321|
|Using and operator (obj.field && obj.field.field2) (undefined)|90,923,454|45465509|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:26:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":126550321.24697597,"samples":63355075},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":92189126.15888391,"samples":46094577},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":92981235.18135509,"samples":46562321},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":90923454.07785526,"samples":45465509}]}-->
