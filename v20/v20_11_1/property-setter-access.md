## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|778,136,073|93|
|Setter|11,263,116|93|
|Method|621,952,063|93|
|DefineProperty (setter)|784,277,082|97|
|DefineProperty (setter & enumerable=false)|11,583,866|94|
|DefineProperty (setter & configurable=false)|11,100,188|97|
|DefineProperty (setter & enumerable=false & configurable=false)|11,699,870|95|
|DefineProperty (writable)|783,434,031|94|
|DefineProperty (writable & enumerable=false)|786,217,647|100|
|DefineProperty (writable & enumerable=false & configurable=false)|424,226,082|56|
|DefineProperties (setter)|102,048,834|81|
|DefineProperties (setter & enumerable=false)|10,537,931|96|
|DefineProperties (setter & enumerable=false & configurable=false)|11,615,804|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:09:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Setter (class)","opsSec":778136073.1391925,"samples":5},{"name":"Setter","opsSec":11263116.20888593,"samples":5},{"name":"Method","opsSec":621952062.7606215,"samples":6},{"name":"DefineProperty (setter)","opsSec":784277081.7395037,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11583866.231096502,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":11100187.72256073,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11699870.17784133,"samples":6},{"name":"DefineProperty (writable)","opsSec":783434030.5308703,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":786217647.3730175,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":424226082.10579896,"samples":6},{"name":"DefineProperties (setter)","opsSec":102048834.20979856,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10537931.264266485,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11615804.231793258,"samples":4}]}-->
