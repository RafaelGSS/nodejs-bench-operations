## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|153,031,902|76516060|
|Setter|10,484,290|5242147|
|Method|100,814,737|50407379|
|DefineProperty (setter)|104,315,798|52158853|
|DefineProperty (setter & enumerable=false)|10,479,817|5241141|
|DefineProperty (setter & configurable=false)|10,409,338|5204932|
|DefineProperty (setter & enumerable=false & configurable=false)|10,694,096|5348339|
|DefineProperty (writable)|99,371,186|49685680|
|DefineProperty (writable & enumerable=false)|100,361,349|50193516|
|DefineProperty (writable & enumerable=false & configurable=false)|101,119,767|50559898|
|DefineProperties (setter)|97,439,202|48721183|
|DefineProperties (setter & enumerable=false)|10,448,569|5224288|
|DefineProperties (setter & enumerable=false & configurable=false)|10,182,617|5091375|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:45:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Setter (class)","opsSec":153031902.69469815,"samples":76516060},{"name":"Setter","opsSec":10484290.267592665,"samples":5242147},{"name":"Method","opsSec":100814737.23216413,"samples":50407379},{"name":"DefineProperty (setter)","opsSec":104315798.48130897,"samples":52158853},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10479817.377508791,"samples":5241141},{"name":"DefineProperty (setter & configurable=false)","opsSec":10409338.141055789,"samples":5204932},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10694096.552033305,"samples":5348339},{"name":"DefineProperty (writable)","opsSec":99371186.49790838,"samples":49685680},{"name":"DefineProperty (writable & enumerable=false)","opsSec":100361349.32998377,"samples":50193516},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":101119767.07974662,"samples":50559898},{"name":"DefineProperties (setter)","opsSec":97439202.73372245,"samples":48721183},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10448569.229327139,"samples":5224288},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10182617.768525658,"samples":5091375}]}-->
