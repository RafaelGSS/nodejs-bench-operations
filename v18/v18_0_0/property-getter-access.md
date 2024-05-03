## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|908,719,397|98|
|Getter|102,190,929|90|
|Method|910,829,598|99|
|DefineProperty (getter)|909,615,214|99|
|DefineProperty (getter & enumerable=false)|102,310,490|95|
|DefineProperty (getter & configurable=false)|910,574,444|99|
|DefineProperty (getter & enumerable=false & configurable=false)|101,823,035|95|
|DefineProperty (writable)|912,043,380|95|
|DefineProperty (writable & enumerable=false)|913,374,524|99|
|DefineProperty (writable & enumerable=false & configurable=false)|912,036,845|98|
|DefineProperties (getter)|64,545,494|66|
|DefineProperties (getter & enumerable=false)|102,152,140|99|
|DefineProperties (getter & enumerable=false & configurable=false)|101,278,386|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:42:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":908719396.9955536,"samples":6},{"name":"Getter","opsSec":102190929.23573232,"samples":5},{"name":"Method","opsSec":910829598.1551472,"samples":6},{"name":"DefineProperty (getter)","opsSec":909615214.2773839,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":102310490.47283737,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":910574443.8816664,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":101823035.48869814,"samples":7},{"name":"DefineProperty (writable)","opsSec":912043379.9090273,"samples":10},{"name":"DefineProperty (writable & enumerable=false)","opsSec":913374523.781378,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":912036845.3992412,"samples":7},{"name":"DefineProperties (getter)","opsSec":64545494.41073542,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":102152140.06837134,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":101278385.55060078,"samples":6}]}-->
