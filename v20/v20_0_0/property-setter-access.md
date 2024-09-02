## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,628,414|7314208|
|Setter|5,682,595|2841298|
|Method|14,954,465|7477233|
|DefineProperty (setter)|14,976,007|7488005|
|DefineProperty (setter & enumerable=false)|5,834,622|2917312|
|DefineProperty (setter & configurable=false)|5,729,844|2864923|
|DefineProperty (setter & enumerable=false & configurable=false)|5,782,017|2891009|
|DefineProperty (writable)|14,879,988|7439995|
|DefineProperty (writable & enumerable=false)|14,550,834|7275418|
|DefineProperty (writable & enumerable=false & configurable=false)|14,683,738|7341870|
|DefineProperties (setter)|14,567,964|7283983|
|DefineProperties (setter & enumerable=false)|5,682,882|2841442|
|DefineProperties (setter & enumerable=false & configurable=false)|5,627,953|2813977|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:46:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":14628414.118230077,"samples":7314208},{"name":"Setter","opsSec":5682595.267329938,"samples":2841298},{"name":"Method","opsSec":14954465.43281929,"samples":7477233},{"name":"DefineProperty (setter)","opsSec":14976007.176302034,"samples":7488005},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5834622.652627977,"samples":2917312},{"name":"DefineProperty (setter & configurable=false)","opsSec":5729844.510159711,"samples":2864923},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5782017.0379511975,"samples":2891009},{"name":"DefineProperty (writable)","opsSec":14879988.995123653,"samples":7439995},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14550834.509928994,"samples":7275418},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14683738.963029534,"samples":7341870},{"name":"DefineProperties (setter)","opsSec":14567964.84486522,"samples":7283983},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5682882.051837627,"samples":2841442},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5627953.286640024,"samples":2813977}]}-->
