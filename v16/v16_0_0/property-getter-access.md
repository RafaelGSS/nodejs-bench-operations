## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|575,047,421|84|
|Getter|47,641,971|87|
|Method|599,065,546|86|
|DefineProperty (getter)|599,677,009|86|
|DefineProperty (getter & enumerable=false)|47,337,322|83|
|DefineProperty (getter & configurable=false)|580,921,292|87|
|DefineProperty (getter & enumerable=false & configurable=false)|47,800,309|86|
|DefineProperty (writable)|599,390,845|88|
|DefineProperty (writable & enumerable=false)|557,971,152|86|
|DefineProperty (writable & enumerable=false & configurable=false)|74,624,420|79|
|DefineProperties (getter)|30,400,650|81|
|DefineProperties (getter & enumerable=false)|30,397,798|86|
|DefineProperties (getter & enumerable=false & configurable=false)|48,923,447|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:35:11 GMT+0000 (Coordinated Universal Time)
</details>

