## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|863,814,816|99|
|Setter|11,672,224|96|
|Method|865,706,635|97|
|DefineProperty (setter)|865,248,268|95|
|DefineProperty (setter & enumerable=false)|11,508,609|94|
|DefineProperty (setter & configurable=false)|11,148,885|99|
|DefineProperty (setter & enumerable=false & configurable=false)|11,079,729|95|
|DefineProperty (writable)|833,783,982|88|
|DefineProperty (writable & enumerable=false)|162,544,401|84|
|DefineProperty (writable & enumerable=false & configurable=false)|158,256,588|83|
|DefineProperties (setter)|118,397,121|85|
|DefineProperties (setter & enumerable=false)|11,696,418|98|
|DefineProperties (setter & enumerable=false & configurable=false)|11,674,019|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:56:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":863814816.4774655,"samples":7},{"name":"Setter","opsSec":11672224.281782798,"samples":5},{"name":"Method","opsSec":865706634.9058242,"samples":8},{"name":"DefineProperty (setter)","opsSec":865248267.5122753,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11508609.489745036,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":11148884.701037467,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11079728.62951718,"samples":5},{"name":"DefineProperty (writable)","opsSec":833783982.3199879,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":162544400.62774217,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":158256587.8643545,"samples":4},{"name":"DefineProperties (setter)","opsSec":118397120.82460217,"samples":10},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11696417.80933043,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11674018.60605792,"samples":5}]}-->
