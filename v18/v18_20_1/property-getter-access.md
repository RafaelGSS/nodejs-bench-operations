## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|17,055,131|8527566|
|Getter|13,629,380|6814691|
|Method|15,691,108|7845555|
|DefineProperty (getter)|16,140,841|8070421|
|DefineProperty (getter & enumerable=false)|13,471,438|6735720|
|DefineProperty (getter & configurable=false)|16,996,863|8498432|
|DefineProperty (getter & enumerable=false & configurable=false)|14,056,356|7028179|
|DefineProperty (writable)|17,068,809|8534405|
|DefineProperty (writable & enumerable=false)|17,031,233|8515617|
|DefineProperty (writable & enumerable=false & configurable=false)|17,078,336|8539169|
|DefineProperties (getter)|14,019,468|7009763|
|DefineProperties (getter & enumerable=false)|14,192,640|7096321|
|DefineProperties (getter & enumerable=false & configurable=false)|13,940,360|6970181|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:48:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":17055131.129820332,"samples":8527566},{"name":"Getter","opsSec":13629380.511730127,"samples":6814691},{"name":"Method","opsSec":15691108.25666989,"samples":7845555},{"name":"DefineProperty (getter)","opsSec":16140841.599779243,"samples":8070421},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13471438.567518806,"samples":6735720},{"name":"DefineProperty (getter & configurable=false)","opsSec":16996863.1652122,"samples":8498432},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":14056356.10316621,"samples":7028179},{"name":"DefineProperty (writable)","opsSec":17068809.24306905,"samples":8534405},{"name":"DefineProperty (writable & enumerable=false)","opsSec":17031233.147281896,"samples":8515617},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":17078336.428288016,"samples":8539169},{"name":"DefineProperties (getter)","opsSec":14019468.702834008,"samples":7009763},{"name":"DefineProperties (getter & enumerable=false)","opsSec":14192640.172753884,"samples":7096321},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13940360.318237705,"samples":6970181}]}-->
