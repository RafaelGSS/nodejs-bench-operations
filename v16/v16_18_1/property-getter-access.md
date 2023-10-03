## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|711,863,501|97|
|Getter|58,704,731|90|
|Method|713,481,650|93|
|DefineProperty (getter)|711,914,227|97|
|DefineProperty (getter & enumerable=false)|59,252,492|94|
|DefineProperty (getter & configurable=false)|712,428,758|96|
|DefineProperty (getter & enumerable=false & configurable=false)|59,395,416|92|
|DefineProperty (writable)|712,892,247|97|
|DefineProperty (writable & enumerable=false)|712,930,512|96|
|DefineProperty (writable & enumerable=false & configurable=false)|408,767,841|60|
|DefineProperties (getter)|37,359,095|90|
|DefineProperties (getter & enumerable=false)|58,718,103|95|
|DefineProperties (getter & enumerable=false & configurable=false)|59,253,865|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:35:07 GMT+0000 (Coordinated Universal Time)
</details>

