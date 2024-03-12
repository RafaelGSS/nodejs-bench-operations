## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|778,887,799|94|
|Setter|10,232,373|96|
|Method|767,131,508|90|
|DefineProperty (setter)|775,263,430|96|
|DefineProperty (setter & enumerable=false)|10,095,355|95|
|DefineProperty (setter & configurable=false)|10,087,746|97|
|DefineProperty (setter & enumerable=false & configurable=false)|9,743,252|94|
|DefineProperty (writable)|817,121,446|98|
|DefineProperty (writable & enumerable=false)|817,394,427|100|
|DefineProperty (writable & enumerable=false & configurable=false)|334,977,133|44|
|DefineProperties (setter)|111,317,917|88|
|DefineProperties (setter & enumerable=false)|10,208,155|96|
|DefineProperties (setter & enumerable=false & configurable=false)|10,231,200|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:06:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Setter (class)","opsSec":778887798.8595953,"samples":6},{"name":"Setter","opsSec":10232373.493726902,"samples":5},{"name":"Method","opsSec":767131507.6473124,"samples":6},{"name":"DefineProperty (setter)","opsSec":775263430.2904947,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10095354.987392826,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":10087746.182196626,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":9743252.355306694,"samples":5},{"name":"DefineProperty (writable)","opsSec":817121445.771731,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":817394427.4287274,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":334977133.00910306,"samples":6},{"name":"DefineProperties (setter)","opsSec":111317916.91229966,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10208154.545330998,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10231199.809135694,"samples":5}]}-->
