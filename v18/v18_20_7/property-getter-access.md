## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|98,536,535|49290632|
|Getter|56,695,177|28357143|
|Method|96,009,677|48051683|
|DefineProperty (getter)|98,909,049|49454865|
|DefineProperty (getter & enumerable=false)|56,269,588|28134883|
|DefineProperty (getter & configurable=false)|99,442,696|49721358|
|DefineProperty (getter & enumerable=false & configurable=false)|55,153,183|27739316|
|DefineProperty (writable)|98,832,500|49420409|
|DefineProperty (writable & enumerable=false)|98,806,670|49405879|
|DefineProperty (writable & enumerable=false & configurable=false)|87,365,237|43682631|
|DefineProperties (getter)|55,910,921|27955465|
|DefineProperties (getter & enumerable=false)|55,801,376|27903028|
|DefineProperties (getter & enumerable=false & configurable=false)|55,221,637|27612921|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:25:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":49290632,"opsSec":98536535.50751014},{"name":"Getter","samples":28357143,"opsSec":56695177.57074191},{"name":"Method","samples":48051683,"opsSec":96009677.83617389},{"name":"DefineProperty (getter)","samples":49454865,"opsSec":98909049.70355614},{"name":"DefineProperty (getter & enumerable=false)","samples":28134883,"opsSec":56269588.0755625},{"name":"DefineProperty (getter & configurable=false)","samples":49721358,"opsSec":99442696.90700221},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":27739316,"opsSec":55153183.98165469},{"name":"DefineProperty (writable)","samples":49420409,"opsSec":98832500.45442677},{"name":"DefineProperty (writable & enumerable=false)","samples":49405879,"opsSec":98806670.83974513},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":43682631,"opsSec":87365237.88719435},{"name":"DefineProperties (getter)","samples":27955465,"opsSec":55910921.3897181},{"name":"DefineProperties (getter & enumerable=false)","samples":27903028,"opsSec":55801376.71975379},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":27612921,"opsSec":55221637.97670083}]}-->
