## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|848,742,320|100|
|Getter|98,854,373|99|
|Method|848,742,608|98|
|DefineProperty (getter)|848,431,825|100|
|DefineProperty (getter & enumerable=false)|98,960,854|98|
|DefineProperty (getter & configurable=false)|849,153,324|98|
|DefineProperty (getter & enumerable=false & configurable=false)|98,602,962|95|
|DefineProperty (writable)|848,760,568|99|
|DefineProperty (writable & enumerable=false)|664,037,972|79|
|DefineProperty (writable & enumerable=false & configurable=false)|139,714,845|75|
|DefineProperties (getter)|61,608,449|87|
|DefineProperties (getter & enumerable=false)|98,605,539|96|
|DefineProperties (getter & enumerable=false & configurable=false)|98,644,359|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:54:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":848742320.4762058,"samples":8},{"name":"Getter","opsSec":98854373.10991251,"samples":7},{"name":"Method","opsSec":848742608.0906402,"samples":7},{"name":"DefineProperty (getter)","opsSec":848431825.3293294,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":98960854.41382223,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":849153323.6077112,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":98602962.29035902,"samples":8},{"name":"DefineProperty (writable)","opsSec":848760567.9145799,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":664037972.0348951,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":139714845.12261045,"samples":6},{"name":"DefineProperties (getter)","opsSec":61608448.872481905,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":98605539.19831523,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":98644358.6229868,"samples":5}]}-->
