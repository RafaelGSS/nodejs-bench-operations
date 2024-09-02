## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,559,270|7279636|
|Setter|5,568,886|2784444|
|Method|14,390,458|7195230|
|DefineProperty (setter)|14,904,136|7452069|
|DefineProperty (setter & enumerable=false)|5,689,759|2844880|
|DefineProperty (setter & configurable=false)|5,673,674|2836838|
|DefineProperty (setter & enumerable=false & configurable=false)|5,651,142|2825572|
|DefineProperty (writable)|14,717,288|7358645|
|DefineProperty (writable & enumerable=false)|14,317,486|7158744|
|DefineProperty (writable & enumerable=false & configurable=false)|14,402,861|7201431|
|DefineProperties (setter)|14,230,525|7115263|
|DefineProperties (setter & enumerable=false)|5,637,517|2818759|
|DefineProperties (setter & enumerable=false & configurable=false)|5,655,134|2827568|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:41:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":14559270.548278825,"samples":7279636},{"name":"Setter","opsSec":5568886.6818584725,"samples":2784444},{"name":"Method","opsSec":14390458.554335924,"samples":7195230},{"name":"DefineProperty (setter)","opsSec":14904136.336109675,"samples":7452069},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5689759.295020871,"samples":2844880},{"name":"DefineProperty (setter & configurable=false)","opsSec":5673674.896548356,"samples":2836838},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5651142.91665647,"samples":2825572},{"name":"DefineProperty (writable)","opsSec":14717288.410698934,"samples":7358645},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14317486.143132914,"samples":7158744},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14402861.98138177,"samples":7201431},{"name":"DefineProperties (setter)","opsSec":14230525.131172612,"samples":7115263},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5637517.125775227,"samples":2818759},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5655134.098912459,"samples":2827568}]}-->
