## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|106,347,546|53193637|
|Getter|55,588,958|27809544|
|Method|106,020,861|53013346|
|DefineProperty (getter)|98,874,375|49451184|
|DefineProperty (getter & enumerable=false)|53,276,766|26641082|
|DefineProperty (getter & configurable=false)|106,193,835|53096931|
|DefineProperty (getter & enumerable=false & configurable=false)|55,397,492|27711210|
|DefineProperty (writable)|104,247,631|52123827|
|DefineProperty (writable & enumerable=false)|106,318,435|53168122|
|DefineProperty (writable & enumerable=false & configurable=false)|106,705,604|53356609|
|DefineProperties (getter)|50,305,324|25169981|
|DefineProperties (getter & enumerable=false)|49,631,099|24828953|
|DefineProperties (getter & enumerable=false & configurable=false)|50,154,582|25077301|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:24:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":53193637,"opsSec":106347546.38518217},{"name":"Getter","samples":27809544,"opsSec":55588958.56210351},{"name":"Method","samples":53013346,"opsSec":106020861.27671322},{"name":"DefineProperty (getter)","samples":49451184,"opsSec":98874375.47780973},{"name":"DefineProperty (getter & enumerable=false)","samples":26641082,"opsSec":53276766.104611814},{"name":"DefineProperty (getter & configurable=false)","samples":53096931,"opsSec":106193835.45154114},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":27711210,"opsSec":55397492.1256983},{"name":"DefineProperty (writable)","samples":52123827,"opsSec":104247631.27401638},{"name":"DefineProperty (writable & enumerable=false)","samples":53168122,"opsSec":106318435.02422284},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":53356609,"opsSec":106705604.55511498},{"name":"DefineProperties (getter)","samples":25169981,"opsSec":50305324.7716817},{"name":"DefineProperties (getter & enumerable=false)","samples":24828953,"opsSec":49631099.15146411},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25077301,"opsSec":50154582.54002198}]}-->
