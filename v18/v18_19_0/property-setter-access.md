## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|775,144,641|96|
|Setter|9,958,458|92|
|Method|779,691,701|98|
|DefineProperty (setter)|778,425,081|93|
|DefineProperty (setter & enumerable=false)|9,885,750|97|
|DefineProperty (setter & configurable=false)|9,888,189|95|
|DefineProperty (setter & enumerable=false & configurable=false)|9,549,268|95|
|DefineProperty (writable)|681,713,565|81|
|DefineProperty (writable & enumerable=false)|139,711,515|80|
|DefineProperty (writable & enumerable=false & configurable=false)|148,533,229|85|
|DefineProperties (setter)|109,866,802|83|
|DefineProperties (setter & enumerable=false)|9,923,008|95|
|DefineProperties (setter & enumerable=false & configurable=false)|9,880,536|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:06:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Setter (class)","opsSec":775144641.1265786,"samples":6},{"name":"Setter","opsSec":9958458.226171952,"samples":7},{"name":"Method","opsSec":779691700.8792115,"samples":8},{"name":"DefineProperty (setter)","opsSec":778425081.3848745,"samples":9},{"name":"DefineProperty (setter & enumerable=false)","opsSec":9885749.975118803,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":9888189.327992847,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":9549268.308971588,"samples":5},{"name":"DefineProperty (writable)","opsSec":681713564.7088989,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":139711514.62137532,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":148533229.25174338,"samples":6},{"name":"DefineProperties (setter)","opsSec":109866801.99842557,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":9923008.174265461,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":9880535.827095747,"samples":5}]}-->
