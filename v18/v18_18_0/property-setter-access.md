## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|774,279,285|96|
|Setter|9,990,594|92|
|Method|775,723,107|97|
|DefineProperty (setter)|775,521,655|94|
|DefineProperty (setter & enumerable=false)|9,877,269|96|
|DefineProperty (setter & configurable=false)|9,869,976|94|
|DefineProperty (setter & enumerable=false & configurable=false)|9,673,682|97|
|DefineProperty (writable)|816,457,205|91|
|DefineProperty (writable & enumerable=false)|546,767,879|67|
|DefineProperty (writable & enumerable=false & configurable=false)|146,862,812|83|
|DefineProperties (setter)|110,655,800|86|
|DefineProperties (setter & enumerable=false)|9,104,064|93|
|DefineProperties (setter & enumerable=false & configurable=false)|9,260,065|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:10:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":774279285.3209535,"samples":6},{"name":"Setter","opsSec":9990594.15684433,"samples":5},{"name":"Method","opsSec":775723107.0188408,"samples":8},{"name":"DefineProperty (setter)","opsSec":775521655.3034204,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":9877269.398394072,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":9869976.06328901,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":9673682.033820927,"samples":4},{"name":"DefineProperty (writable)","opsSec":816457205.4498817,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":546767879.3294234,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":146862811.71085763,"samples":6},{"name":"DefineProperties (setter)","opsSec":110655799.92531483,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":9104064.199813442,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":9260065.31158088,"samples":6}]}-->
