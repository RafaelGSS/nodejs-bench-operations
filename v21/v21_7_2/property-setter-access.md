## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,135,859|7567930|
|Setter|6,737,927|3368964|
|Method|15,130,536|7565269|
|DefineProperty (setter)|15,117,902|7558952|
|DefineProperty (setter & enumerable=false)|6,673,943|3336972|
|DefineProperty (setter & configurable=false)|6,611,723|3305862|
|DefineProperty (setter & enumerable=false & configurable=false)|6,647,834|3323918|
|DefineProperty (writable)|15,184,278|7592140|
|DefineProperty (writable & enumerable=false)|15,217,736|7608869|
|DefineProperty (writable & enumerable=false & configurable=false)|15,222,493|7611247|
|DefineProperties (setter)|15,018,574|7509288|
|DefineProperties (setter & enumerable=false)|6,741,154|3370578|
|DefineProperties (setter & enumerable=false & configurable=false)|6,788,281|3394141|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:13:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15135859.72754985,"samples":7567930},{"name":"Setter","opsSec":6737927.016264174,"samples":3368964},{"name":"Method","opsSec":15130536.396224469,"samples":7565269},{"name":"DefineProperty (setter)","opsSec":15117902.427740036,"samples":7558952},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6673943.345940462,"samples":3336972},{"name":"DefineProperty (setter & configurable=false)","opsSec":6611723.325602549,"samples":3305862},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6647834.869880169,"samples":3323918},{"name":"DefineProperty (writable)","opsSec":15184278.633395568,"samples":7592140},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15217736.265248453,"samples":7608869},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15222493.878218235,"samples":7611247},{"name":"DefineProperties (setter)","opsSec":15018574.58845698,"samples":7509288},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6741154.638183988,"samples":3370578},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6788281.565590827,"samples":3394141}]}-->
