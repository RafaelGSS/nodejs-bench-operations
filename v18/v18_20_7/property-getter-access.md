## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|106,565,178|53300193|
|Getter|55,887,614|27943821|
|Method|104,728,454|52375322|
|DefineProperty (getter)|106,720,018|53360034|
|DefineProperty (getter & enumerable=false)|56,721,972|28360999|
|DefineProperty (getter & configurable=false)|106,625,865|53312942|
|DefineProperty (getter & enumerable=false & configurable=false)|56,873,722|28444130|
|DefineProperty (writable)|106,939,170|53469595|
|DefineProperty (writable & enumerable=false)|100,034,146|50338832|
|DefineProperty (writable & enumerable=false & configurable=false)|106,604,565|53305911|
|DefineProperties (getter)|56,488,656|28260187|
|DefineProperties (getter & enumerable=false)|56,551,514|28358235|
|DefineProperties (getter & enumerable=false & configurable=false)|56,761,851|28380933|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:17:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":53300193,"opsSec":106565178.35698336},{"name":"Getter","samples":27943821,"opsSec":55887614.83861919},{"name":"Method","samples":52375322,"opsSec":104728454.34455039},{"name":"DefineProperty (getter)","samples":53360034,"opsSec":106720018.2684715},{"name":"DefineProperty (getter & enumerable=false)","samples":28360999,"opsSec":56721972.36166849},{"name":"DefineProperty (getter & configurable=false)","samples":53312942,"opsSec":106625865.8736028},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":28444130,"opsSec":56873722.394071415},{"name":"DefineProperty (writable)","samples":53469595,"opsSec":106939170.10931435},{"name":"DefineProperty (writable & enumerable=false)","samples":50338832,"opsSec":100034146.53608458},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":53305911,"opsSec":106604565.64042598},{"name":"DefineProperties (getter)","samples":28260187,"opsSec":56488656.749008566},{"name":"DefineProperties (getter & enumerable=false)","samples":28358235,"opsSec":56551514.773454286},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":28380933,"opsSec":56761851.01487133}]}-->
