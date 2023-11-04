## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|587,545,012|98|
|Getter|75,244,715|96|
|Method|590,633,189|96|
|DefineProperty (getter)|591,822,075|95|
|DefineProperty (getter & enumerable=false)|75,118,659|97|
|DefineProperty (getter & configurable=false)|592,588,618|98|
|DefineProperty (getter & enumerable=false & configurable=false)|75,426,987|96|
|DefineProperty (writable)|592,577,911|96|
|DefineProperty (writable & enumerable=false)|592,562,572|99|
|DefineProperty (writable & enumerable=false & configurable=false)|590,715,427|97|
|DefineProperties (getter)|61,790,989|79|
|DefineProperties (getter & enumerable=false)|45,544,683|92|
|DefineProperties (getter & enumerable=false & configurable=false)|46,013,189|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:35:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":587545012.0190506,"samples":10},{"name":"Getter","opsSec":75244714.90911673,"samples":5},{"name":"Method","opsSec":590633189.2110747,"samples":6},{"name":"DefineProperty (getter)","opsSec":591822074.8853347,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":75118659.16998959,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":592588618.0187888,"samples":10},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":75426986.9983979,"samples":5},{"name":"DefineProperty (writable)","opsSec":592577910.8242893,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":592562572.3127769,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":590715426.5911704,"samples":6},{"name":"DefineProperties (getter)","opsSec":61790989.37900196,"samples":7},{"name":"DefineProperties (getter & enumerable=false)","opsSec":45544683.47326164,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":46013189.2081578,"samples":5}]}-->
