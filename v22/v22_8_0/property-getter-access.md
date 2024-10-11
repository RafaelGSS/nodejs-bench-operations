## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|141,972,000|70997054|
|Getter|51,186,439|25593227|
|Method|90,270,427|45141991|
|DefineProperty (getter)|96,225,823|48401737|
|DefineProperty (getter & enumerable=false)|51,026,390|25516402|
|DefineProperty (getter & configurable=false)|98,050,149|49025083|
|DefineProperty (getter & enumerable=false & configurable=false)|50,649,881|25324954|
|DefineProperty (writable)|98,139,945|49073116|
|DefineProperty (writable & enumerable=false)|97,910,177|48956172|
|DefineProperty (writable & enumerable=false & configurable=false)|96,212,412|48106216|
|DefineProperties (getter)|51,042,134|25522769|
|DefineProperties (getter & enumerable=false)|51,249,036|25626720|
|DefineProperties (getter & enumerable=false & configurable=false)|50,997,044|25502731|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:43:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Getter (class)","opsSec":141972000.40404108,"samples":70997054},{"name":"Getter","opsSec":51186439.66779689,"samples":25593227},{"name":"Method","opsSec":90270427.89525153,"samples":45141991},{"name":"DefineProperty (getter)","opsSec":96225823.07094258,"samples":48401737},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51026390.79909881,"samples":25516402},{"name":"DefineProperty (getter & configurable=false)","opsSec":98050149.3314746,"samples":49025083},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":50649881.763361245,"samples":25324954},{"name":"DefineProperty (writable)","opsSec":98139945.94018264,"samples":49073116},{"name":"DefineProperty (writable & enumerable=false)","opsSec":97910177.63940956,"samples":48956172},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":96212412.37266788,"samples":48106216},{"name":"DefineProperties (getter)","opsSec":51042134.71462576,"samples":25522769},{"name":"DefineProperties (getter & enumerable=false)","opsSec":51249036.99023602,"samples":25626720},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50997044.52982399,"samples":25502731}]}-->
