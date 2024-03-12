## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|767,482,045|96|
|Setter|12,447,449|94|
|Method|777,488,084|96|
|DefineProperty (setter)|755,175,888|94|
|DefineProperty (setter & enumerable=false)|12,377,748|94|
|DefineProperty (setter & configurable=false)|12,434,935|99|
|DefineProperty (setter & enumerable=false & configurable=false)|12,373,770|95|
|DefineProperty (writable)|781,623,859|99|
|DefineProperty (writable & enumerable=false)|783,725,712|97|
|DefineProperty (writable & enumerable=false & configurable=false)|782,649,337|98|
|DefineProperties (setter)|783,245,868|99|
|DefineProperties (setter & enumerable=false)|12,455,255|96|
|DefineProperties (setter & enumerable=false & configurable=false)|11,417,395|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:08:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":767482045.4953654,"samples":5},{"name":"Setter","opsSec":12447449.486412486,"samples":5},{"name":"Method","opsSec":777488084.3957238,"samples":6},{"name":"DefineProperty (setter)","opsSec":755175887.969131,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12377748.34978412,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":12434935.225842612,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12373770.128823284,"samples":4},{"name":"DefineProperty (writable)","opsSec":781623858.7607074,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":783725711.8135378,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":782649336.7645162,"samples":6},{"name":"DefineProperties (setter)","opsSec":783245868.0389146,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12455255.38146559,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11417394.753152201,"samples":4}]}-->
