## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,656,928|7828465|
|Setter|6,423,695|3211848|
|Method|15,495,163|7747582|
|DefineProperty (setter)|15,776,923|7888462|
|DefineProperty (setter & enumerable=false)|6,611,044|3305523|
|DefineProperty (setter & configurable=false)|6,596,522|3298262|
|DefineProperty (setter & enumerable=false & configurable=false)|6,317,192|3158597|
|DefineProperty (writable)|15,527,673|7763837|
|DefineProperty (writable & enumerable=false)|15,708,695|7854348|
|DefineProperty (writable & enumerable=false & configurable=false)|15,565,505|7782753|
|DefineProperties (setter)|15,643,500|7821751|
|DefineProperties (setter & enumerable=false)|6,339,471|3169736|
|DefineProperties (setter & enumerable=false & configurable=false)|6,338,885|3169443|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:22:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15656928.810064008,"samples":7828465},{"name":"Setter","opsSec":6423695.974313971,"samples":3211848},{"name":"Method","opsSec":15495163.814108254,"samples":7747582},{"name":"DefineProperty (setter)","opsSec":15776923.179517813,"samples":7888462},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6611044.175336206,"samples":3305523},{"name":"DefineProperty (setter & configurable=false)","opsSec":6596522.970955842,"samples":3298262},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6317192.294350333,"samples":3158597},{"name":"DefineProperty (writable)","opsSec":15527673.565340457,"samples":7763837},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15708695.183135686,"samples":7854348},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15565505.065984214,"samples":7782753},{"name":"DefineProperties (setter)","opsSec":15643500.842574041,"samples":7821751},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6339471.759042888,"samples":3169736},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6338885.835166866,"samples":3169443}]}-->
