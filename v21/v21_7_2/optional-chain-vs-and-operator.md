## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|148,721,418|74360710|
|Using optional chain (obj.field?.field2) (undefined)|101,417,453|50729201|
|Using and operator (obj.field && obj.field.field2) (Valid)|103,209,971|51604997|
|Using and operator (obj.field && obj.field.field2) (undefined)|98,845,260|49422639|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:24:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":148721418.21534297,"samples":74360710},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":101417453.68889858,"samples":50729201},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":103209971.08738643,"samples":51604997},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":98845260.60323414,"samples":49422639}]}-->
