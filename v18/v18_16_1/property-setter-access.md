## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|473,600,625|97|
|Setter|7,083,375|91|
|Method|474,887,901|95|
|DefineProperty (setter)|473,884,412|97|
|DefineProperty (setter & enumerable=false)|7,421,694|97|
|DefineProperty (setter & configurable=false)|7,329,177|98|
|DefineProperty (setter & enumerable=false & configurable=false)|7,458,390|94|
|DefineProperty (writable)|706,713,675|95|
|DefineProperty (writable & enumerable=false)|709,085,825|95|
|DefineProperty (writable & enumerable=false & configurable=false)|384,262,987|54|
|DefineProperties (setter)|61,648,555|85|
|DefineProperties (setter & enumerable=false)|7,309,938|98|
|DefineProperties (setter & enumerable=false & configurable=false)|7,229,421|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":473600625.2549864,"samples":9},{"name":"Setter","opsSec":7083374.875387866,"samples":6},{"name":"Method","opsSec":474887900.98733556,"samples":8},{"name":"DefineProperty (setter)","opsSec":473884412.4109097,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7421694.41667812,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":7329177.154958923,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7458390.366860553,"samples":6},{"name":"DefineProperty (writable)","opsSec":706713675.3247832,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":709085825.2271608,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":384262987.4782049,"samples":7},{"name":"DefineProperties (setter)","opsSec":61648555.21747643,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7309938.220726118,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7229420.923330387,"samples":6}]}-->
