## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|119,513,569|59768289|
|Using optional chain (obj.field?.field2) (undefined)|96,443,879|48221952|
|Using and operator (obj.field && obj.field.field2) (Valid)|97,884,533|48942559|
|Using and operator (obj.field && obj.field.field2) (undefined)|97,696,965|48848876|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:24:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":119513569.7256107,"samples":59768289},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":96443879.5032546,"samples":48221952},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":97884533.04203054,"samples":48942559},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":97696965.34403504,"samples":48848876}]}-->
