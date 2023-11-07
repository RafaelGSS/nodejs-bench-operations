## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|842,379,612|94|
|Setter|10,054,769|98|
|Method|847,502,549|95|
|DefineProperty (setter)|847,358,430|100|
|DefineProperty (setter & enumerable=false)|10,090,552|96|
|DefineProperty (setter & configurable=false)|10,058,962|98|
|DefineProperty (setter & enumerable=false & configurable=false)|10,082,042|96|
|DefineProperty (writable)|849,163,622|96|
|DefineProperty (writable & enumerable=false)|257,348,220|31|
|DefineProperty (writable & enumerable=false & configurable=false)|136,519,795|82|
|DefineProperties (setter)|115,265,934|86|
|DefineProperties (setter & enumerable=false)|10,079,396|97|
|DefineProperties (setter & enumerable=false & configurable=false)|10,079,407|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:13:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":842379611.6651103,"samples":6},{"name":"Setter","opsSec":10054769.260232985,"samples":5},{"name":"Method","opsSec":847502549.0116049,"samples":7},{"name":"DefineProperty (setter)","opsSec":847358429.829472,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10090551.562446143,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":10058961.5549194,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10082041.737892421,"samples":5},{"name":"DefineProperty (writable)","opsSec":849163622.2001948,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":257348219.60544074,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":136519794.7300726,"samples":4},{"name":"DefineProperties (setter)","opsSec":115265933.70330971,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10079395.979681935,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10079407.333603894,"samples":9}]}-->
