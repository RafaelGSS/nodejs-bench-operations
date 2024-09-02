## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,134,670|8067336|
|Getter|14,125,721|7062861|
|Method|16,011,523|8005762|
|DefineProperty (getter)|15,782,127|7891064|
|DefineProperty (getter & enumerable=false)|14,207,309|7103655|
|DefineProperty (getter & configurable=false)|15,938,039|7969020|
|DefineProperty (getter & enumerable=false & configurable=false)|14,104,290|7052146|
|DefineProperty (writable)|16,421,354|8210678|
|DefineProperty (writable & enumerable=false)|15,846,237|7923119|
|DefineProperty (writable & enumerable=false & configurable=false)|16,075,745|8038111|
|DefineProperties (getter)|14,254,894|7127448|
|DefineProperties (getter & enumerable=false)|14,322,349|7161175|
|DefineProperties (getter & enumerable=false & configurable=false)|14,132,860|7066431|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:17:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":16134670.848723302,"samples":8067336},{"name":"Getter","opsSec":14125721.105050642,"samples":7062861},{"name":"Method","opsSec":16011523.839786615,"samples":8005762},{"name":"DefineProperty (getter)","opsSec":15782127.06354502,"samples":7891064},{"name":"DefineProperty (getter & enumerable=false)","opsSec":14207309.579076719,"samples":7103655},{"name":"DefineProperty (getter & configurable=false)","opsSec":15938039.641975839,"samples":7969020},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":14104290.2901595,"samples":7052146},{"name":"DefineProperty (writable)","opsSec":16421354.242890246,"samples":8210678},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15846237.451003937,"samples":7923119},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16075745.391953902,"samples":8038111},{"name":"DefineProperties (getter)","opsSec":14254894.725937925,"samples":7127448},{"name":"DefineProperties (getter & enumerable=false)","opsSec":14322349.068316596,"samples":7161175},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":14132860.625913527,"samples":7066431}]}-->
