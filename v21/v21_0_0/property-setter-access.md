## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|145,502,949|72752119|
|Setter|11,149,804|5574915|
|Method|97,887,721|48956032|
|DefineProperty (setter)|100,320,695|50162625|
|DefineProperty (setter & enumerable=false)|11,810,902|5905454|
|DefineProperty (setter & configurable=false)|11,605,233|5802620|
|DefineProperty (setter & enumerable=false & configurable=false)|11,817,948|5912493|
|DefineProperty (writable)|99,547,653|49776010|
|DefineProperty (writable & enumerable=false)|100,549,746|50495126|
|DefineProperty (writable & enumerable=false & configurable=false)|100,198,246|50099130|
|DefineProperties (setter)|99,038,687|49519377|
|DefineProperties (setter & enumerable=false)|10,940,252|5470129|
|DefineProperties (setter & enumerable=false & configurable=false)|11,235,148|5617577|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:00:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":145502949.7168832,"samples":72752119},{"name":"Setter","opsSec":11149804.043256186,"samples":5574915},{"name":"Method","opsSec":97887721.08574495,"samples":48956032},{"name":"DefineProperty (setter)","opsSec":100320695.23979472,"samples":50162625},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11810902.472497642,"samples":5905454},{"name":"DefineProperty (setter & configurable=false)","opsSec":11605233.663542418,"samples":5802620},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11817948.175502524,"samples":5912493},{"name":"DefineProperty (writable)","opsSec":99547653.640816,"samples":49776010},{"name":"DefineProperty (writable & enumerable=false)","opsSec":100549746.17629504,"samples":50495126},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":100198246.57343496,"samples":50099130},{"name":"DefineProperties (setter)","opsSec":99038687.04984756,"samples":49519377},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10940252.87996165,"samples":5470129},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11235148.8992424,"samples":5617577}]}-->
