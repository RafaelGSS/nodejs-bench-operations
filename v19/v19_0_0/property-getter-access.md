## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|573,587,098|88|
|Getter|42,757,512|93|
|Method|584,608,277|93|
|DefineProperty (getter)|592,735,720|96|
|DefineProperty (getter & enumerable=false)|43,465,537|94|
|DefineProperty (getter & configurable=false)|601,853,321|92|
|DefineProperty (getter & enumerable=false & configurable=false)|43,262,753|94|
|DefineProperty (writable)|602,657,221|89|
|DefineProperty (writable & enumerable=false)|602,308,724|94|
|DefineProperty (writable & enumerable=false & configurable=false)|598,387,304|94|
|DefineProperties (getter)|43,972,007|89|
|DefineProperties (getter & enumerable=false)|43,652,005|94|
|DefineProperties (getter & enumerable=false & configurable=false)|30,490,252|70|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:35:11 GMT+0000 (Coordinated Universal Time)
</details>

