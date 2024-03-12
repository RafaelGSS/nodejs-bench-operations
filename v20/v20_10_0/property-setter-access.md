## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|775,475,277|97|
|Setter|11,998,290|94|
|Method|628,065,025|99|
|DefineProperty (setter)|783,658,770|93|
|DefineProperty (setter & enumerable=false)|12,136,399|96|
|DefineProperty (setter & configurable=false)|12,016,013|95|
|DefineProperty (setter & enumerable=false & configurable=false)|12,019,807|98|
|DefineProperty (writable)|785,582,545|93|
|DefineProperty (writable & enumerable=false)|782,670,764|97|
|DefineProperty (writable & enumerable=false & configurable=false)|786,592,841|98|
|DefineProperties (setter)|646,807,776|77|
|DefineProperties (setter & enumerable=false)|11,749,840|95|
|DefineProperties (setter & enumerable=false & configurable=false)|10,877,335|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:06:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":775475276.7850553,"samples":6},{"name":"Setter","opsSec":11998290.140313676,"samples":5},{"name":"Method","opsSec":628065024.8977271,"samples":6},{"name":"DefineProperty (setter)","opsSec":783658770.3014977,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12136398.613771249,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":12016012.950997269,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12019807.23147694,"samples":5},{"name":"DefineProperty (writable)","opsSec":785582544.765919,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":782670763.9485544,"samples":9},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":786592840.5405314,"samples":6},{"name":"DefineProperties (setter)","opsSec":646807775.522417,"samples":8},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11749840.16039514,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10877335.053994484,"samples":5}]}-->
