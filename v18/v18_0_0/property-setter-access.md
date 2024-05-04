## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|865,262,389|99|
|Setter|9,805,148|93|
|Method|865,670,388|94|
|DefineProperty (setter)|864,858,061|96|
|DefineProperty (setter & enumerable=false)|10,822,954|97|
|DefineProperty (setter & configurable=false)|10,554,496|94|
|DefineProperty (setter & enumerable=false & configurable=false)|10,426,345|96|
|DefineProperty (writable)|906,939,368|93|
|DefineProperty (writable & enumerable=false)|907,890,691|98|
|DefineProperty (writable & enumerable=false & configurable=false)|777,603,758|86|
|DefineProperties (setter)|115,635,419|88|
|DefineProperties (setter & enumerable=false)|10,554,145|96|
|DefineProperties (setter & enumerable=false & configurable=false)|10,315,659|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:58:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":865262388.6240853,"samples":6},{"name":"Setter","opsSec":9805147.870197657,"samples":6},{"name":"Method","opsSec":865670388.4843001,"samples":7},{"name":"DefineProperty (setter)","opsSec":864858061.2141894,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10822953.78055742,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":10554496.054428425,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10426345.181627521,"samples":5},{"name":"DefineProperty (writable)","opsSec":906939367.6941485,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":907890691.3333101,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":777603758.0760058,"samples":8},{"name":"DefineProperties (setter)","opsSec":115635418.99758266,"samples":4},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10554145.048701225,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10315658.910947848,"samples":5}]}-->
